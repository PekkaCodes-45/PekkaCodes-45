'use client'

import React, { useEffect, useState } from 'react'
import { Typography, Descriptions, Card, Row, Col, Space, Button } from 'antd'
import {
  FileOutlined,
  UserOutlined,
  QuestionOutlined,
  LockOutlined,
  FilePdfOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function DocumentDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const [document, setDocument] = useState<any>(null)

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const documentFound = await Api.Document.findOne(params.id, {
          includes: ['author', 'versions', 'metadatas', 'permissions'],
        })
        setDocument(documentFound)
      } catch (error) {
        console.error('Failed to fetch document details', error)
      }
    }

    fetchDocument()
  }, [params.id])

  const handlePreviewClick = () => {
    if (document?.storagePathUrl) {
      window.open(document.storagePathUrl, '_blank')
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Document Details</Title>
          <Text>
            This page displays the details of a specific document, including its
            metadata, versions, and permissions.
          </Text>
          <Card bordered={false} style={{ marginTop: 24 }}>
            {document ? (
              <Descriptions bordered>
                <Descriptions.Item label="Title" span={3}>
                  <FileOutlined /> {document.title}
                </Descriptions.Item>
                <Descriptions.Item label="Description" span={3}>
                  {document.description}
                </Descriptions.Item>
                <Descriptions.Item label="Author" span={3}>
                  <UserOutlined /> {document.author?.name}
                </Descriptions.Item>
                <Descriptions.Item label="Created At" span={3}>
                  {dayjs(document.dateCreated).format('YYYY-MM-DD HH:mm')}
                </Descriptions.Item>
                <Descriptions.Item label="Versions" span={3}>
                  <Space direction="vertical">
                    {document.versions?.map((version: any) => (
                      <Text key={version.id}>
                        <QuestionOutlined /> Version {version.versionNumber} -{' '}
                        {dayjs(version.updateDate).format('YYYY-MM-DD')}
                      </Text>
                    ))}
                  </Space>
                </Descriptions.Item>
                <Descriptions.Item label="Permissions" span={3}>
                  <Space direction="vertical">
                    {document.permissions?.map((permission: any) => (
                      <Text key={permission.id}>
                        <LockOutlined /> {permission.accessLevel} -{' '}
                        {permission.user?.name}
                      </Text>
                    ))}
                  </Space>
                </Descriptions.Item>
              </Descriptions>
            ) : (
              <Text>Loading...</Text>
            )}
          </Card>
          <Row justify="end" style={{ marginTop: 24 }}>
            <Space>
              <Button
                onClick={() => router.push(`/documents/${params.id}/edit`)}
              >
                Edit Document
              </Button>
              <Button
                onClick={() => router.push(`/documents/${params.id}/versions`)}
              >
                View Versions
              </Button>
              <Button
                onClick={() =>
                  router.push(`/documents/${params.id}/permissions`)
                }
              >
                Manage Permissions
              </Button>
              {document?.format === 'pdf' && (
                <Button
                  icon={<FilePdfOutlined />}
                  onClick={handlePreviewClick}
                >
                  Preview
                </Button>
              )}
            </Space>
          </Row>
        </Col>
      </Row>
    </PageLayout>
  )
}