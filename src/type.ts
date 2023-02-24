export interface iEventItem {
  event: iHandler
  thisArg: any
}

export type iEventMap = Record<string, iEventItem[]>

export type iHandler = (...args: any) => unknown
