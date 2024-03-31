'use client'

import React, { useEffect, useState } from 'react'
import { Button, Table, Modal, Form, Select, Typography } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function MyPermissionsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const userId = authentication.user?.id
  const { enqueueSnackbar } = useSnackbar()

  const [permissions, setPermissions] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchPermissions = async () => {
      if (userId) {
        try {
          const permissionsFound = await Api.Permission.findManyByUserId(
            userId,
            { includes: ['document'] },
          )
          setPermissions(permissionsFound)
        } catch (error) {
          enqueueSnackbar('Failed to fetch permissions', { variant: 'error' })
        }
      }
    }

    fetchPermissions()
  }, [userId])

  const handleDelete = async (permissionId: string) => {
    try {
      await Api.Permission.deleteOne(permissionId)
      setPermissions(
        permissions.filter(permission => permission.id !== permissionId),
      )
      enqueueSnackbar('Permission deleted successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to delete permission', { variant: 'error' })
    }
  }

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      const newPermission = await Api.Permission.createOneByUserId(
        userId,
        values,
      )
      setPermissions([...permissions, newPermission])
      enqueueSnackbar('Permission added successfully', { variant: 'success' })
      setIsModalVisible(false)
    } catch (error) {
      enqueueSnackbar('Failed to add permission', { variant: 'error' })
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const columns = [
    {
      title: 'Document Title',
      dataIndex: ['document', 'title'],
      key: 'documentTitle',
    },
    {
      title: 'Access Level',
      dataIndex: 'accessLevel',
      key: 'accessLevel',
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated',
      key: 'dateCreated',
      render: (text: string) => dayjs(text).format('YYYY-MM-DD HH:mm'),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div>
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
            danger
          />
        </div>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <Title>My Permissions</Title>
      <Text>Manage your document access permissions.</Text>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={showModal}
        style={{ marginBottom: 16 }}
      >
        Add Permission
      </Button>
      <Table dataSource={permissions} columns={columns} rowKey="id" />

      <Modal
        title="Add Permission"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="documentId"
            label="Document"
            rules={[{ required: true, message: 'Please select a document' }]}
          >
            <Select placeholder="Select a document">
              {/* This is a placeholder. You should fetch and list documents here. */}
            </Select>
          </Form.Item>
          <Form.Item
            name="accessLevel"
            label="Access Level"
            rules={[
              { required: true, message: 'Please select an access level' },
            ]}
          >
            <Select placeholder="Select an access level">
              <Option value="read">Read</Option>
              <Option value="write">Write</Option>
              <Option value="admin">Admin</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </PageLayout>
  )
}
