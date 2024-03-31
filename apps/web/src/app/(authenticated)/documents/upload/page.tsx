'use client'

import React, { useState } from 'react';
import { Form, Button, Row, Col, Typography, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Title, Paragraph } = Typography;
import { useAuthentication } from '@web/modules/authentication'
import dayjs from 'dayjs'
import { useSnackbar } from 'notistack'
import { useRouter, useParams } from 'next/navigation'
import { Api, Model } from '@web/domain'
import { PageLayout } from '@web/layouts/Page.layout'

export default function UploadDocumentPage() {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const authentication = useAuthentication();
  const userId = authentication.user?.id;

  const handleUpload = async options => {
    const { file } = options;
    const url = await Api.Upload.upload(file);
    setFileList([{ url: url, status: 'done', name: file.name, type: file.type }]);
  };

  const onFinish = async values => {
    try {
      if (fileList.length === 0) {
        enqueueSnackbar('Please upload a document.', { variant: 'error' });
        return;
      }

      const document = await Api.Document.createOneByAuthorId(userId, {
        title: values.title, // Assuming there's a title field in the form
        format: fileList[0].type,
        storagePathUrl: fileList[0].url,
        authorId: userId,
        dateCreated: dayjs().toISOString(),
        dateUpdated: dayjs().toISOString(),
      });

      enqueueSnackbar('Document uploaded successfully!', { variant: 'success' });
      router.push(`/documents/${document.id}`);
    } catch (error) {
      enqueueSnackbar('Failed to upload document.', { variant: 'error' });
    }
  };

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Title level={2}>Upload Document</Title>
          <Paragraph>
            Fill in the details and upload your document to the system.
          </Paragraph>
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Paragraph>
              {`Uploaded files: ${fileList.length}`}
            </Paragraph>
            <Form.Item label="Document">
              <Upload
                fileList={fileList}
                customRequest={handleUpload}
                accept="*"
                onChange={({ fileList: newFileList }) => setFileList(newFileList)}
                maxCount={1} // Updated as per customer request
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  );
}