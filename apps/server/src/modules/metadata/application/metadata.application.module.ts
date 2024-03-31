import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { MetadataDomainModule } from '../domain'
import { MetadataController } from './metadata.controller'

import { DocumentDomainModule } from '../../../modules/document/domain'

import { MetadataByDocumentController } from './metadataByDocument.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    MetadataDomainModule,

    DocumentDomainModule,
  ],
  controllers: [MetadataController, MetadataByDocumentController],
  providers: [],
})
export class MetadataApplicationModule {}
