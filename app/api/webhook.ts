import { MessageBuilder } from "discord-webhook-node"
import { NextApiResponse } from "blitz"
import { createHook } from "app/discord"
import { functions } from "app/functions"
import { BodyFromGk, WebhookApiRequest } from "app/types/webhook"
import { GkFields } from "app/types/gitkraken"
import crypto from "crypto"
import { fieldsActionsSelected, SECRET } from "app/config"

const handler = async (req: WebhookApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed")
  }

  try {
    const { headers } = req
    let body = req.body as any

    const field = headers["x-gk-event"]
    const secret = headers["x-gk-signature"].split("=")[1]

    if (!secret) {
      return res.status(400).send("Missing secret")
    }

    const sh1 = crypto.createHmac("sha1", SECRET)
    sh1.update(JSON.stringify(body))
    const signature = sh1.digest("hex")

    if (secret !== signature) {
      return res.status(400).send("Invalid signature")
    }

    const {
      action,
      board: { name },
    } = body as BodyFromGk

    console.log("==========================================")
    console.log("====== HEADERS =====")
    console.log(headers)
    console.log("====== BODY =====")
    console.log(body)

    const boardName = name.toLowerCase()
    const hook = createHook(boardName)

    if (!hook) {
      return res.status(404).json({
        message: `Board ${boardName} not found`,
      })
    }

    const { sender } = body

    let embed: MessageBuilder | null = null

    if (field === GkFields.COMMENTS) {
      const { comment, card } = body as any
      embed = functions.comments[action]({ comment, card, sender })

      const selected = fieldsActionsSelected[boardName][field][action]
      if (!selected) embed = null
    }

    if (embed) hook.send(embed)

    res.status(200).send("OK")
  } catch (error) {
    res.status(500).send(error)
  }
}

export default handler
