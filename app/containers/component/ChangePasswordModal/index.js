import React from 'react';
import { Button, Form, Input, Modal } from 'antd';

// eslint-disable-next-line react/prop-types
const ChangePasswordModal = ({ onClose }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      title="Doi mat khau"
      visible
      width={550}
      footer={null}
      onCancel={onClose}
    >
      <Form form={form}>
        <Form.Item name="oldPassword">
          <Input placeholder="Nhap mat cu" />
        </Form.Item>

        <Form.Item name="newPassword">
          <Input placeholder="Nhap mat moi" />
        </Form.Item>

        <Form.Item name="confirmPassword">
          <Input placeholder="Nhap lai mat moi" />
        </Form.Item>
      </Form>

      <Button style={{ width: '100%' }}>Submit</Button>
    </Modal>
  );
};

export default ChangePasswordModal;
