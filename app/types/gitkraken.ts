export interface IdName {
  id: string
  name: string
}

export interface Id {
  id: string
}

export interface IdText {
  id: string
  text: string
}

export interface Assigne extends IdName {
  email: string
}

export interface GkComment extends IdText {
  created_date: string
  created_by: Id
}

export interface GkCommentUpdated extends GkComment {
  previous: GkComment
}

export enum GkFields {
  COMMENTS = "comments",
  COLUMNS = "columns",
  CARDS = "cards",
}

export enum GkActions {
  ADDED = "added",
  UPDATED = "updated",
  ACRHIVED = "acrhived",
  DELETED = "deleted",
}

export interface GKSender {
  id: string
  name: string
  username: string
}

export interface Previous {
  id: string
  name: string
  description: {
    text?: string
  }
  assignes: Assigne[]
  permanent_id: string
}

export interface GkCardUpdatedAndAdded extends Previous {
  created_date: string
  board_id: string
  column_id: string
  labels: IdName[]
  completed_task_count: number
  total_task_count: number
  attachment_count: number
  display_id: string
  created_by: {
    id: string
  }
}

export interface GkCardUpdated extends GkCardUpdatedAndAdded {
  previous: Previous
  comment_count: number
}
