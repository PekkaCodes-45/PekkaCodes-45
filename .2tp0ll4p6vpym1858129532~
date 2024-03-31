import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PermissionDomainFacade } from '@server/modules/permission/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PermissionApplicationEvent } from './permission.application.event'
import { PermissionCreateDto } from './permission.dto'

import { DocumentDomainFacade } from '../../document/domain'

@Controller('/v1/documents')
export class PermissionByDocumentController {
  constructor(
    private documentDomainFacade: DocumentDomainFacade,

    private permissionDomainFacade: PermissionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/document/:documentId/permissions')
  async findManyDocumentId(
    @Param('documentId') documentId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.documentDomainFacade.findOneByIdOrFail(documentId)

    const items = await this.permissionDomainFacade.findManyByDocument(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/document/:documentId/permissions')
  async createByDocumentId(
    @Param('documentId') documentId: string,
    @Body() body: PermissionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, documentId }

    const item = await this.permissionDomainFacade.create(valuesUpdated)

    await this.eventService.emit<PermissionApplicationEvent.PermissionCreated.Payload>(
      PermissionApplicationEvent.PermissionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
