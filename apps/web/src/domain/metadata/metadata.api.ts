import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Metadata } from './metadata.model'

export class MetadataApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Metadata>,
  ): Promise<Metadata[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/metadatas${buildOptions}`)
  }

  static findOne(
    metadataId: string,
    queryOptions?: ApiHelper.QueryOptions<Metadata>,
  ): Promise<Metadata> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/metadatas/${metadataId}${buildOptions}`)
  }

  static createOne(values: Partial<Metadata>): Promise<Metadata> {
    return HttpService.api.post(`/v1/metadatas`, values)
  }

  static updateOne(
    metadataId: string,
    values: Partial<Metadata>,
  ): Promise<Metadata> {
    return HttpService.api.patch(`/v1/metadatas/${metadataId}`, values)
  }

  static deleteOne(metadataId: string): Promise<void> {
    return HttpService.api.delete(`/v1/metadatas/${metadataId}`)
  }

  static findManyByDocumentId(
    documentId: string,
    queryOptions?: ApiHelper.QueryOptions<Metadata>,
  ): Promise<Metadata[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/documents/document/${documentId}/metadatas${buildOptions}`,
    )
  }

  static createOneByDocumentId(
    documentId: string,
    values: Partial<Metadata>,
  ): Promise<Metadata> {
    return HttpService.api.post(
      `/v1/documents/document/${documentId}/metadatas`,
      values,
    )
  }
}
