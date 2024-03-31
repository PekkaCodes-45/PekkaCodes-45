import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { VersionDomainFacade } from './version.domain.facade'
import { Version } from './version.model'

@Module({
  imports: [TypeOrmModule.forFeature([Version]), DatabaseHelperModule],
  providers: [VersionDomainFacade, VersionDomainFacade],
  exports: [VersionDomainFacade],
})
export class VersionDomainModule {}
