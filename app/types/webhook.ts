import {
  GkActions,
  GkCardUpdated,
  GkCardUpdatedAndAdded,
  GkFields,
  GKSender,
  IdName,
} from "app/types/gitkraken"
import { NextApiRequest } from "blitz"

export interface WebhookHttpHeaders extends Pick<NextApiRequest, "headers"> {
  "x-gk-event": GkFields
  "x-gk-signature": string
}

type GkCommentsBody = {
  [GkActions.ADDED]: {
    card: IdName
    comment: {
      id: string
      text: string
      created_date: string
      created_by: {
        id: string
      }
    }
  }
}

type GkCardsBody = {
  [GkActions.ACRHIVED]: {
    card: IdName
  }
  [GkActions.ADDED]: {
    card: GkCardUpdatedAndAdded
  }
  [GkActions.UPDATED]: {
    card: GkCardUpdated
  }
}

export type FullGkBody = {
  [GkFields.CARDS]: GkCardsBody
  [GkFields.COMMENTS]: GkCommentsBody
}

export interface BodyFromGk {
  action: GkActions
  board: IdName
  sender: GKSender
  sequence: number
}

type WebhookHttpBody = BodyFromGk

export interface HeadersAndBody {
  headers: WebhookHttpHeaders
  body: WebhookHttpBody
}

export type WebhookApiRequest = Omit<NextApiRequest, "body"> & HeadersAndBody
