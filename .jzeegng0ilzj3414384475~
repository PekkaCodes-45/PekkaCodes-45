'use client'

import React, { useState, useEffect } from 'react'
import { Input, Button, Card, Row, Col, Typography, Space } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function SearchDocumentsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [searchTerm, setSearchTerm] = useState('')
  const [documents, setDocuments] = useState([])

  useEffect(() => {
    if (!userId) {
      enqueueSnackbar('Please log in to search documents', { variant: 'info' })
      router.push('/')
    }
  }, [userId, router])

  const handleSearch = async () => {
    try {
      const documentsFound = await Api.Document.findMany({
        filters: { title: { like: searchTerm } },
        includes: ['author'],
      })
      setDocuments(documentsFound)
    } catch (error) {
      enqueueSnackbar('Failed to search documents', { variant: 'error' })
    }
  }

  const navigateToDocument = (documentId: string) => {
    router.push(`/documents/${documentId}`)
  }

  return (
    <PageLayout layout="full-width">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Search Documents</Title>
        <Text>Enter a document title to search in our database.</Text>
        <Input
          placeholder="Search by document title"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          suffix={
            <Button
              icon={<SearchOutlined />}
              onClick={handleSearch}
              disabled={!searchTerm}
            >
              Search
            </Button>
          }
        />
        <Row gutter={[16, 16]}>
          {documents?.map(document => (
            <Col key={document.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                title={document.title}
                onClick={() => navigateToDocument(document.id)}
                hoverable
              >
                <Text>
                  {document.description || 'No description available'}
                </Text>
                <br />
                <Text type="secondary">
                  Author: {document.author?.name || 'Unknown'}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </PageLayout>
  )
}
