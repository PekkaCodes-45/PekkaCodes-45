import { ColumnNumeric } from '@server/core/database'
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Document } from '../../../modules/document/domain'

@Entity()
export class Metadata {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  keyword?: string

  @Column({})
  documentId: string

  @ManyToOne(() => Document, parent => parent.metadatas)
  @JoinColumn({ name: 'documentId' })
  document?: Document

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
