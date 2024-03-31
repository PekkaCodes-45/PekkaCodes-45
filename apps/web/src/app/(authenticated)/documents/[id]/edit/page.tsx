'use client'

import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Typography, Upload, Space } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function EditDocumentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()
  const [document, setDocument] = useState<any>(null)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const documentFound = await Api.Document.findOne(params.id, {
          includes: ['metadatas'],
        })
        setDocument(documentFound)
        form.setFieldsValue({
          title: documentFound.title,
          description: documentFound.description,
        })
      } catch (error) {
        enqueueSnackbar('Failed to fetch document details', {
          variant: 'error',
        })
      }
    }

    fetchDocument()
  }, [params.id, form])

  const handleUpdateDocument = async (values: any) => {
    try {
      await Api.Document.updateOne(params.id, {
        title: values.title,
        description: values.description,
      })
      enqueueSnackbar('Document updated successfully', { variant: 'success' })
      router.push(`/documents/${params.id}`)
    } catch (error) {
      enqueueSnackbar('Failed to update document', { variant: 'error' })
    }
  }

  const handleUpload = async (options: any) => {
    const { file } = options
    try {
      const url = await Api.Upload.upload(file)
      await Api.Document.updateOne(params.id, {
        storagePathUrl: url,
      })
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to upload file', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <Title>Edit Document</Title>
        <Paragraph>Update the details and metadata of your document.</Paragraph>
        <Form form={form} layout="vertical" onFinish={handleUpdateDocument}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Document
            </Button>
          </Form.Item>
        </Form>
        <Upload customRequest={handleUpload} maxCount={1}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Space>
    </PageLayout>
  )
}
