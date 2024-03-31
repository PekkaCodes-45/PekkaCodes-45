import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class VersionCreateDto {
  @IsNumber()
  @IsNotEmpty()
  versionNumber: number

  @IsString()
  @IsOptional()
  updateDate?: string

  @IsString()
  @IsOptional()
  documentId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class VersionUpdateDto {
  @IsNumber()
  @IsOptional()
  versionNumber?: number

  @IsString()
  @IsOptional()
  updateDate?: string

  @IsString()
  @IsOptional()
  documentId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
