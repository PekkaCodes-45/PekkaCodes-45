import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { DocumentDomainModule } from '../domain'
import { DocumentController } from './document.controller'

import { UserDomainModule } from '../../../modules/user/domain'

import { DocumentByUserController } from './documentByUser.controller'

@Module({
  imports: [AuthenticationDomainModule, DocumentDomainModule, UserDomainModule],
  controllers: [DocumentController, DocumentByUserController],
  providers: [],
})
export class DocumentApplicationModule {}
