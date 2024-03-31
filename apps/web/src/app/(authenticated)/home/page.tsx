'use client'

import { useState } from 'react'
import { Flex } from 'antd'
import { Typography } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'
const { Title } = Typography
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function HomePage() {
  const authentication = useAuthentication()
  const router = useRouter()

  return (
    <PageLayout layout="super-narrow">
      <Flex align="center" vertical>
        <FileTextOutlined style={{ fontSize: '24px', color: '#08c' }} />
        <Title level={2}>Welcome to Document Management System</Title>
      </Flex>
    </PageLayout>
  )
}