import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from '@server/libraries/event'
import { Metadata, MetadataDomainFacade } from '@server/modules/metadata/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { MetadataApplicationEvent } from './metadata.application.event'
import { MetadataCreateDto, MetadataUpdateDto } from './metadata.dto'

@Controller('/v1/metadatas')
export class MetadataController {
  constructor(
    private eventService: EventService,
    private metadataDomainFacade: MetadataDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.metadataDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: MetadataCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.metadataDomainFacade.create(body)

    await this.eventService.emit<MetadataApplicationEvent.MetadataCreated.Payload>(
      MetadataApplicationEvent.MetadataCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:metadataId')
  async findOne(
    @Param('metadataId') metadataId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.metadataDomainFacade.findOneByIdOrFail(
      metadataId,
      queryOptions,
    )

    return item
  }

  @Patch('/:metadataId')
  async update(
    @Param('metadataId') metadataId: string,
    @Body() body: MetadataUpdateDto,
  ) {
    const item = await this.metadataDomainFacade.findOneByIdOrFail(metadataId)

    const itemUpdated = await this.metadataDomainFacade.update(
      item,
      body as Partial<Metadata>,
    )
    return itemUpdated
  }

  @Delete('/:metadataId')
  async delete(@Param('metadataId') metadataId: string) {
    const item = await this.metadataDomainFacade.findOneByIdOrFail(metadataId)

    await this.metadataDomainFacade.delete(item)

    return item
  }
}
