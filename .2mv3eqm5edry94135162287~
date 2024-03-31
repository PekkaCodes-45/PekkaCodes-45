import { HttpService } from '../../core/http'
import { ApiHelper } from '../helpers/api.helper'
import { Version } from './version.model'

export class VersionApi {
  static findMany(
    queryOptions?: ApiHelper.QueryOptions<Version>,
  ): Promise<Version[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/versions${buildOptions}`)
  }

  static findOne(
    versionId: string,
    queryOptions?: ApiHelper.QueryOptions<Version>,
  ): Promise<Version> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(`/v1/versions/${versionId}${buildOptions}`)
  }

  static createOne(values: Partial<Version>): Promise<Version> {
    return HttpService.api.post(`/v1/versions`, values)
  }

  static updateOne(
    versionId: string,
    values: Partial<Version>,
  ): Promise<Version> {
    return HttpService.api.patch(`/v1/versions/${versionId}`, values)
  }

  static deleteOne(versionId: string): Promise<void> {
    return HttpService.api.delete(`/v1/versions/${versionId}`)
  }

  static findManyByDocumentId(
    documentId: string,
    queryOptions?: ApiHelper.QueryOptions<Version>,
  ): Promise<Version[]> {
    const buildOptions = ApiHelper.buildQueryOptions(queryOptions)

    return HttpService.api.get(
      `/v1/documents/document/${documentId}/versions${buildOptions}`,
    )
  }

  static createOneByDocumentId(
    documentId: string,
    values: Partial<Version>,
  ): Promise<Version> {
    return HttpService.api.post(
      `/v1/documents/document/${documentId}/versions`,
      values,
    )
  }
}
