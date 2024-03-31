import { Notification } from '../notification'

import { Document } from '../document'

import { Permission } from '../permission'

export enum UserStatus {
  CREATED = 'CREATED',
  VERIFIED = 'VERIFIED',
}
export class User {
  id: string
  email: string
  status: UserStatus
  name: string
  pictureUrl: string
  password: string
  dateCreated: string
  dateUpdated: string
  notifications?: Notification[]

  documentsAsAuthor?: Document[]

  permissions?: Permission[]
}
