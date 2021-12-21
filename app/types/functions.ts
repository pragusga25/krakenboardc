import { GkComment, GkCommentUpdated, GKSender, IdName } from "app/types/gitkraken"

export interface CommentAddedArgs {
  comment: GkComment
  sender: GKSender
  card: IdName
}

export interface CommentUpdatedArgs extends CommentAddedArgs {
  comment: GkCommentUpdated
}
