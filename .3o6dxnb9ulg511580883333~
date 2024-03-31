import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { VersionDomainModule } from '../domain'
import { VersionController } from './version.controller'

import { DocumentDomainModule } from '../../../modules/document/domain'

import { VersionByDocumentController } from './versionByDocument.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    VersionDomainModule,

    DocumentDomainModule,
  ],
  controllers: [VersionController, VersionByDocumentController],
  providers: [],
})
export class VersionApplicationModule {}
