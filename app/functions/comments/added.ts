import { COLOR } from "app/config"
import { embed } from "app/discord"
import { CommentAddedArgs } from "app/types/functions"

export const commentAdded = ({ comment, sender, card }: CommentAddedArgs) => {
  const { text } = comment
  const { name: senderName, username } = sender
  const { name: cardName } = card

  return embed
    .setTitle(`New comment on ${cardName}`)
    .setAuthor(senderName, `https://github.com/${username}.png`, `https://github.com/${username}`)
    .setDescription(text)
    .setColor(COLOR)
    .setTimestamp()
}
