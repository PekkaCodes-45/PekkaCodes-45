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

import { User } from '../../../modules/user/domain'

@Entity()
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ nullable: true })
  accessLevel?: string

  @Column({})
  documentId: string

  @ManyToOne(() => Document, parent => parent.permissions)
  @JoinColumn({ name: 'documentId' })
  document?: Document

  @Column({})
  userId: string

  @ManyToOne(() => User, parent => parent.permissions)
  @JoinColumn({ name: 'userId' })
  user?: User

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
