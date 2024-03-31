import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { PermissionDomainModule } from '../domain'
import { PermissionController } from './permission.controller'

import { DocumentDomainModule } from '../../../modules/document/domain'

import { PermissionByDocumentController } from './permissionByDocument.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { PermissionByUserController } from './permissionByUser.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    PermissionDomainModule,

    DocumentDomainModule,

    UserDomainModule,
  ],
  controllers: [
    PermissionController,

    PermissionByDocumentController,

    PermissionByUserController,
  ],
  providers: [],
})
export class PermissionApplicationModule {}
