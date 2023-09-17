import React from 'react';
import { Button, Col, Form, Row } from 'antd';
import { LoginStyled, LoginWrapper } from '../Login/stylesLogin';
import FloatingLabel from '../../res/components/FloatingLabel/Input';

const ForgetPassword = () => {
  const [form] = Form.useForm();

  const submit = () => {
    form
      .validateFields()
      .then(value => {
        console.log('value', value);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <LoginStyled>
      <LoginWrapper style={{ backgroundColor: 'white' }}>
        <Row gutter={24} style={{ height: '100%' }}>
          <Col span={6} />
          <Col span={12}>
            <div style={{ height: '30%', marginTop: '30%' }}>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: '#219653',
                  margin: 'auto',
                  textAlign: 'center',
                  marginBottom: 20,
                }}
              >
                Quên mật khẩu
              </div>
              <Form form={form}>
                <Form.Item
                  placeholder="Your email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <FloatingLabel isRequired label="Tên đăng nhập" />
                </Form.Item>
                <Button
                  style={{
                    height: '40px',
                    width: '100%',
                    borderRadius: '8px',
                    backgroundColor: '#219653',
                    color: 'white',
                    border: 'none',
                  }}
                  onClick={submit}
                >
                  Ghi lại
                </Button>
              </Form>
            </div>
          </Col>
          <Col span={6} />
        </Row>
      </LoginWrapper>
    </LoginStyled>
  );
};

export default ForgetPassword;
