import { config } from "app/config"
import { Webhook, MessageBuilder } from "discord-webhook-node"

export const createHook = (boardName: string) => {
  const conf = config[boardName]

  if (!conf) return null

  const { webhookUrl, avatarUrl, username } = conf
  const hook = new Webhook(webhookUrl)

  hook.setUsername(username)
  hook.setAvatar(avatarUrl)

  return hook
}

export const embed = new MessageBuilder()
