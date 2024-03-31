import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { DocumentDomainModule } from './document/domain'

import { VersionDomainModule } from './version/domain'

import { MetadataDomainModule } from './metadata/domain'

import { PermissionDomainModule } from './permission/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    DocumentDomainModule,

    VersionDomainModule,

    MetadataDomainModule,

    PermissionDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
