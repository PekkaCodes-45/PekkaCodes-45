import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Metadata } from './metadata.model'

import { Document } from '../../document/domain'

@Injectable()
export class MetadataDomainFacade {
  constructor(
    @InjectRepository(Metadata)
    private repository: Repository<Metadata>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(values: Partial<Metadata>): Promise<Metadata> {
    return this.repository.save(values)
  }

  async update(item: Metadata, values: Partial<Metadata>): Promise<Metadata> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Metadata): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Metadata> = {},
  ): Promise<Metadata[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Metadata> = {},
  ): Promise<Metadata> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

  async findManyByDocument(
    item: Document,
    queryOptions: RequestHelper.QueryOptions<Metadata> = {},
  ): Promise<Metadata[]> {
    if (!item) {
      this.databaseHelper.invalidQueryWhere('document')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        documentId: item.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }
}
