import { Config } from "app/types/discord"

export const config: Config = {
  xenon: {
    // boardname
    webhookUrl: process.env.BLITZ_PUBLIC_XENON_WEBHOOK_URL || "",
    username: "inYourDream",
    avatarUrl: "https://github.com/pragusga25.png",
  },
}

export const fieldsActionsSelected = {
  xenon: {
    comments: {
      added: true,
      deleted: true,
      updated: true,
    },
  },
}

export const COLOR = 1197055
export const SECRET = process.env.BLITZ_PUBLIC_SECRET || "secret"
