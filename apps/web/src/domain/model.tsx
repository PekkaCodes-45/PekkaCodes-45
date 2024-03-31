import { AuthorizationRole as AuthorizationRoleModel } from './authorization/authorization.model'

import { User as UserModel } from './user/user.model'

import { Notification as NotificationModel } from './notification/notification.model'

import { Document as DocumentModel } from './document/document.model'

import { Version as VersionModel } from './version/version.model'

import { Metadata as MetadataModel } from './metadata/metadata.model'

import { Permission as PermissionModel } from './permission/permission.model'

export namespace Model {
  export class AuthorizationRole extends AuthorizationRoleModel {}

  export class User extends UserModel {}

  export class Notification extends NotificationModel {}

  export class Document extends DocumentModel {}

  export class Version extends VersionModel {}

  export class Metadata extends MetadataModel {}

  export class Permission extends PermissionModel {}
}
