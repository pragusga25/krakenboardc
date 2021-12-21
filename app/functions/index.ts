import { commentAdded, commentDeleted, commentUpdated } from "./comments"

export const functions = {
  comments: {
    added: commentAdded,
    deleted: commentDeleted,
    updated: commentUpdated,
  },
}
