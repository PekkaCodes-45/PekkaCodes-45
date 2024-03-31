import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { MetadataDomainFacade } from './metadata.domain.facade'
import { Metadata } from './metadata.model'

@Module({
  imports: [TypeOrmModule.forFeature([Metadata]), DatabaseHelperModule],
  providers: [MetadataDomainFacade, MetadataDomainFacade],
  exports: [MetadataDomainFacade],
})
export class MetadataDomainModule {}
