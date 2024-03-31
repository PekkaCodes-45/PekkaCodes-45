'use client'

import React, { useEffect, useState } from 'react'
import { Button, Form, Select, Typography, Row, Col, Card } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
const { Option } = Select
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function ManagePermissionsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const authentication = useAuthentication()
  const { enqueueSnackbar } = useSnackbar()
  const [document, setDocument] = useState(null)
  const [users, setUsers] = useState([])
  const [permissions, setPermissions] = useState([])
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const doc = await Api.Document.findOne(params.id, {
          includes: ['permissions', 'permissions.user'],
        })
        setDocument(doc)
        setPermissions(doc.permissions || [])
      } catch (error) {
        enqueueSnackbar('Failed to fetch document details', {
          variant: 'error',
        })
      }
    }

    const fetchUsers = async () => {
      try {
        const usersFound = await Api.User.findMany()
        setUsers(usersFound)
      } catch (error) {
        enqueueSnackbar('Failed to fetch users', { variant: 'error' })
      }
    }

    fetchDocument()
    fetchUsers()
  }, [params.id])

  const handleAddPermission = async values => {
    try {
      const newPermission = await Api.Permission.createOneByDocumentId(
        document.id,
        {
          userId: values.user,
          accessLevel: values.accessLevel,
        },
      )
      setPermissions([...permissions, newPermission])
      form.resetFields()
      enqueueSnackbar('Permission added successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to add permission', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col span={24}>
          <Title level={2}>Manage Document Permissions</Title>
          <Text>
            Here you can manage who has access to view or edit this document.
          </Text>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Card
            title="Add Permission"
            bordered={false}
            style={{ marginTop: 24 }}
          >
            <Form form={form} layout="vertical" onFinish={handleAddPermission}>
              <Form.Item
                name="user"
                label="User"
                rules={[{ required: true, message: 'Please select a user' }]}
              >
                <Select placeholder="Select a user">
                  {users.map(user => (
                    <Option key={user.id} value={user.id}>
                      {user.name || user.email}
                    </Option>
                  ))}
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
                  <Option value="view">View</Option>
                  <Option value="edit">Edit</Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  icon={<UserAddOutlined />}
                >
                  Add Permission
                </Button>
              </Form.Item>
            </Form>
          </Card>
          <Card
            title="Current Permissions"
            bordered={false}
            style={{ marginTop: 24 }}
          >
            {permissions.map(permission => (
              <p key={permission.id}>
                {permission.user?.name || permission.user?.email}:{' '}
                {permission.accessLevel}
              </p>
            ))}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
