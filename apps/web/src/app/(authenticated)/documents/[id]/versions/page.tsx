'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Table, Button, Space, Modal } from 'antd'
import {
  ExclamationCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  HistoryOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
const { confirm } = Modal
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function DocumentVersionsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { enqueueSnackbar } = useSnackbar()
  const [versions, setVersions] = useState([])

  useEffect(() => {
    const fetchVersions = async () => {
      try {
        const versionsFound = await Api.Version.findManyByDocumentId(
          params.id,
          { includes: ['document'] },
        )
        setVersions(versionsFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch document versions', {
          variant: 'error',
        })
      }
    }

    fetchVersions()
  }, [params.id])

  const handleDeleteVersion = (versionId: string) => {
    confirm({
      title: 'Do you want to delete this version?',
      icon: <ExclamationCircleOutlined />,
      async onOk() {
        try {
          await Api.Version.deleteOne(versionId)
          setVersions(versions.filter(version => version.id !== versionId))
          enqueueSnackbar('Version deleted successfully', {
            variant: 'success',
          })
        } catch (error) {
          enqueueSnackbar('Failed to delete version', { variant: 'error' })
        }
      },
    })
  }

  const columns = [
    {
      title: 'Version Number',
      dataIndex: 'versionNumber',
      key: 'versionNumber',
    },
    {
      title: 'Update Date',
      dataIndex: 'updateDate',
      key: 'updateDate',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() =>
              router.push(
                `/documents/${record.documentId}/versions/${record.id}/edit`,
              )
            }
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDeleteVersion(record.id)}
            danger
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title>Document Versions</Title>
      <Text>
        This page displays all the versions of a specific document, allowing
        users to view and manage the document's history.
      </Text>
      <Table columns={columns} dataSource={versions} rowKey="id" />
    </PageLayout>
  )
}
