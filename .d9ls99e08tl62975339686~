'use client'

import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Typography, Modal, Form, Input, Select, Upload } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyDocumentsPage() {
  const router = useRouter()
  const { enqueueSnackbar } = useSnackbar()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const [documents, setDocuments] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [currentDocument, setCurrentDocument] = useState(null)

  useEffect(() => {
    async function fetchDocuments() {
      if (userId) {
        try {
          const documentsFound = await Api.Document.findManyByAuthorId(userId, {
            includes: ['author'],
          })
          setDocuments(documentsFound)
        } catch (error) {
          enqueueSnackbar('Failed to fetch documents', { variant: 'error' })
        }
      }
    }

    fetchDocuments()
  }, [userId])

  const handleUpload = async options => {
    const { file } = options
    try {
      const url = await Api.Upload.upload(file)
      const newDocument = await Api.Document.createOneByAuthorId(userId, {
        title: file.name,
        storagePathUrl: url,
      })
      setDocuments(prevDocuments => [...prevDocuments, newDocument])
      enqueueSnackbar('Document uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to upload document', { variant: 'error' })
    }
  }

  const handleDelete = async documentId => {
    try {
      await Api.Document.deleteOne(documentId)
      setDocuments(prevDocuments =>
        prevDocuments.filter(doc => doc.id !== documentId),
      )
      enqueueSnackbar('Document deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete document', { variant: 'error' })
    }
  }

  const showModal = async documentId => {
    const documentFound = await Api.Document.findOne(documentId, {
      includes: ['author'],
    })
    setCurrentDocument(documentFound)
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <PageLayout layout="full-width">
      <Title level={2}>My Documents</Title>
      <Text>Manage and interact with your uploaded documents.</Text>
      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col span={24}>
          <Upload customRequest={handleUpload} showUploadList={false}>
            <Button icon={<PlusOutlined />}>Upload Document</Button>
          </Upload>
        </Col>
        {documents?.map(document => (
          <Col key={document.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              actions={[
                <EyeOutlined
                  key="view"
                  onClick={() => showModal(document.id)}
                />,
                <EditOutlined
                  key="edit"
                  onClick={() => router.push(`/documents/${document.id}/edit`)}
                />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => handleDelete(document.id)}
                />,
              ]}
            >
              <Card.Meta
                title={document.title}
                description={`Created on ${dayjs(document.dateCreated).format('DD/MM/YYYY')}`}
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Modal title="Document Details" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {currentDocument && (
          <>
            <p><strong>Title:</strong> {currentDocument.title}</p>
            <p><strong>Description:</strong> {currentDocument.description}</p>
            <p><strong>Format:</strong> {currentDocument.format}</p>
            <p><strong>URL:</strong> <a href={currentDocument.storagePathUrl} target="_blank" rel="noopener noreferrer">Open Document</a></p>
          </>
        )}
      </Modal>
    </PageLayout>
  )
}