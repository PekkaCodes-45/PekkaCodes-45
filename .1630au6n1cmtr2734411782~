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
export class Version {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ColumnNumeric({ type: 'numeric' })
  versionNumber: number

  @Column({ nullable: true })
  updateDate?: string

  @Column({})
  documentId: string

  @ManyToOne(() => Document, parent => parent.versions)
  @JoinColumn({ name: 'documentId' })
  document?: Document

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
