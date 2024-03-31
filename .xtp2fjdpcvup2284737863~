import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationDocumentSubscriber } from './subscribers/notification.document.subscriber'

import { NotificationVersionSubscriber } from './subscribers/notification.version.subscriber'

import { NotificationMetadataSubscriber } from './subscribers/notification.metadata.subscriber'

import { NotificationPermissionSubscriber } from './subscribers/notification.permission.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationDocumentSubscriber,

    NotificationVersionSubscriber,

    NotificationMetadataSubscriber,

    NotificationPermissionSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
