import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { MetadataDomainFacade } from '@server/modules/metadata/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { MetadataApplicationEvent } from './metadata.application.event'
import { MetadataCreateDto } from './metadata.dto'

import { DocumentDomainFacade } from '../../document/domain'

@Controller('/v1/documents')
export class MetadataByDocumentController {
  constructor(
    private documentDomainFacade: DocumentDomainFacade,

    private metadataDomainFacade: MetadataDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/document/:documentId/metadatas')
  async findManyDocumentId(
    @Param('documentId') documentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.documentDomainFacade.findOneByIdOrFail(documentId)

    const items = await this.metadataDomainFacade.findManyByDocument(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/document/:documentId/metadatas')
  async createByDocumentId(
    @Param('documentId') documentId: string,
    @Body() body: MetadataCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, documentId }

    const item = await this.metadataDomainFacade.create(valuesUpdated)

    await this.eventService.emit<MetadataApplicationEvent.MetadataCreated.Payload>(
      MetadataApplicationEvent.MetadataCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
