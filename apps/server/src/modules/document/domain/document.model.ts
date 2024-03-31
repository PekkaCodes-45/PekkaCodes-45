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

import { User } from '../../../modules/user/domain'

import { Version } from '../../../modules/version/domain'

import { Metadata } from '../../../modules/metadata/domain'

import { Permission } from '../../../modules/permission/domain'

@Entity()
export class Document {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({})
  title: string

  @Column({ nullable: true })
  description?: string

  @Column({ nullable: true })
  format?: string

  @Column({ nullable: true })
  storagePathUrl?: string

  @Column({})
  authorId: string

  @ManyToOne(() => User, parent => parent.documentsAsAuthor)
  @JoinColumn({ name: 'authorId' })
  author?: User

  @OneToMany(() => Version, child => child.document)
  versions?: Version[]

  @OneToMany(() => Metadata, child => child.document)
  metadatas?: Metadata[]

  @OneToMany(() => Permission, child => child.document)
  permissions?: Permission[]

  @CreateDateColumn()
  dateCreated: string

  @UpdateDateColumn()
  dateUpdated: string

  @DeleteDateColumn()
  dateDeleted: string
}
