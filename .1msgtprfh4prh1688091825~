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
import { Version, VersionDomainFacade } from '@server/modules/version/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { VersionApplicationEvent } from './version.application.event'
import { VersionCreateDto, VersionUpdateDto } from './version.dto'

@Controller('/v1/versions')
export class VersionController {
  constructor(
    private eventService: EventService,
    private versionDomainFacade: VersionDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.versionDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(@Body() body: VersionCreateDto, @Req() request: Request) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.versionDomainFacade.create(body)

    await this.eventService.emit<VersionApplicationEvent.VersionCreated.Payload>(
      VersionApplicationEvent.VersionCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }

  @Get('/:versionId')
  async findOne(
    @Param('versionId') versionId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item = await this.versionDomainFacade.findOneByIdOrFail(
      versionId,
      queryOptions,
    )

    return item
  }

  @Patch('/:versionId')
  async update(
    @Param('versionId') versionId: string,
    @Body() body: VersionUpdateDto,
  ) {
    const item = await this.versionDomainFacade.findOneByIdOrFail(versionId)

    const itemUpdated = await this.versionDomainFacade.update(
      item,
      body as Partial<Version>,
    )
    return itemUpdated
  }

  @Delete('/:versionId')
  async delete(@Param('versionId') versionId: string) {
    const item = await this.versionDomainFacade.findOneByIdOrFail(versionId)

    await this.versionDomainFacade.delete(item)

    return item
  }
}
