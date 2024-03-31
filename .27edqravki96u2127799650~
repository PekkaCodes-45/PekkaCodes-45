import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from '@server/helpers/request'
import { EventService } from '@server/libraries/event'
import { PermissionDomainFacade } from '@server/modules/permission/domain'
import { AuthenticationDomainFacade } from '@server/modules/authentication/domain'
import { PermissionApplicationEvent } from './permission.application.event'
import { PermissionCreateDto } from './permission.dto'

import { UserDomainFacade } from '../../user/domain'

@Controller('/v1/users')
export class PermissionByUserController {
  constructor(
    private userDomainFacade: UserDomainFacade,

    private permissionDomainFacade: PermissionDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/user/:userId/permissions')
  async findManyUserId(
    @Param('userId') userId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const parent = await this.userDomainFacade.findOneByIdOrFail(userId)

    const items = await this.permissionDomainFacade.findManyByUser(
      parent,
      queryOptions,
    )

    return items
  }

  @Post('/user/:userId/permissions')
  async createByUserId(
    @Param('userId') userId: string,
    @Body() body: PermissionCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, userId }

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
