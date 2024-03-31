import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { VersionDomainFacade } from '@server/modules/version/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { VersionApplicationEvent } from './version.application.event'
import { VersionCreateDto } from './version.dto'

import { DocumentDomainFacade } from '../../document/domain'

@Controller('/v1/documents')
export class VersionByDocumentController {
  constructor(
    private documentDomainFacade: DocumentDomainFacade,

    private versionDomainFacade: VersionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/document/:documentId/versions')
  async findManyDocumentId(
    @Param('documentId') documentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.documentDomainFacade.findOneByIdOrFail(documentId)

    const items = await this.versionDomainFacade.findManyByDocument(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/document/:documentId/versions')
  async createByDocumentId(
    @Param('documentId') documentId: string,
    @Body() body: VersionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, documentId }

    const item = await this.versionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<VersionApplicationEvent.VersionCreated.Payload>(
      VersionApplicationEvent.VersionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
