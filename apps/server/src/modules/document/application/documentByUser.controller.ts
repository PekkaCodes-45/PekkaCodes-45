import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { DocumentDomainFacade } from '@server/modules/document/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { DocumentApplicationEvent } from './document.application.event'
import { DocumentCreateDto } from './document.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class DocumentByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private documentDomainFacade: DocumentDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/author/:authorId/documents')
  async findManyAuthorId(
    @Param('authorId') authorId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(authorId)

    const items = await this.documentDomainFacade.findManyByAuthor(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/author/:authorId/documents')
  async createByAuthorId(
    @Param('authorId') authorId: string,
    @Body() body: DocumentCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, authorId }

    const item = await this.documentDomainFacade.create(valuesUpdated)

    await this.eventService.emit<DocumentApplicationEvent.DocumentCreated.Payload>(
      DocumentApplicationEvent.DocumentCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
}
