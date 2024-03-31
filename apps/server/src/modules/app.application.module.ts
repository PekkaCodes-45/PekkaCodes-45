import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { DocumentApplicationModule } from './document/application'

import { VersionApplicationModule } from './version/application'

import { MetadataApplicationModule } from './metadata/application'

import { PermissionApplicationModule } from './permission/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,

    DocumentApplicationModule,

    VersionApplicationModule,

    MetadataApplicationModule,

    PermissionApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
