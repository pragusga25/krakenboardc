import { COLOR } from "app/config"
import { embed } from "app/discord"
import { CommentUpdatedArgs } from "app/types/functions"

export const commentUpdated = ({ comment, sender, card }: CommentUpdatedArgs) => {
  const { text } = comment
  const { name: senderName, username } = sender
  const { name: cardName } = card

  return embed
    .setTitle(`Comment updated on ${cardName}`)
    .setAuthor(senderName, `https://github.com/${username}.png`, `https://github.com/${username}`)
    .setDescription(text)
    .setColor(COLOR)
    .setTimestamp()
}
