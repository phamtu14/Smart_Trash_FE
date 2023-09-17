/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { LoginStyled, LoginWrapper } from './stylesLogin';
import ChangePasswordModal from '../component/ChangePasswordModal';

const Login = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');
  // Xu ly call api login
  const setCookie = (name, value) => {
    document.cookie = `${name}=${value}`;
  };

  const handleNameChange = e => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const submit = async () => {
    const res = await axios.get('https://localhost:7145/api/v1/User');

    const allUser = res.data;

    // eslint-disable-next-line array-callback-return
    allUser.map(user => {
      if (user.userName === userName && user.password === password) {
        setCookie('accessTokenTest', 123);
        history.push('./dashboard');
        document.location.reload();
        setName('');
        setPassword('');
      } else {
        console.log('Invalid');
      }
    });
  };

  const clickRegister = () => {
    history.push('./register');
    console.log('dang ky');
  };

  const clickForgetPassword = () => {
    history.push('./forgot-password');
  };

  return (
    <LoginStyled>
      <LoginWrapper style={{ backgroundColor: 'white' }}>
        <Row gutter={24} style={{ height: '100%' }}>
          <Col span={6} />
          <Col span={12}>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                margin: 'auto',
                textAlign: 'center',
                marginBottom: 20,
                color: '#219653',
                marginTop: '15%',
              }}
            >
              Đăng nhập
            </div>
            <Form form={form}>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    User Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={e => handleNameChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={e => handlePasswordChange(e)}
                  />
                </div>
              </form>

              <Button
                style={{
                  height: '40px',
                  width: '100%',
                  borderRadius: '8px',
                  backgroundColor: '#219653',
                  color: 'white',
                }}
                onClick={submit}
              >
                Đăng nhập
              </Button>

              <div
                style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}
              >
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <span onClick={clickForgetPassword}>Quên mật khẩu?</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                Bạn chưa có tài khoản?{' '}
                <span
                  onClick={clickRegister}
                  style={{
                    cursor: 'pointer',
                    color: 'blue',
                    fontWeight: 'bold',
                  }}
                >
                  &nbsp; Đăng ký{' '}
                </span>
              </div>
            </Form>
          </Col>
          <Col span={6} />
        </Row>

        {openModal && (
          <ChangePasswordModal
            onClose={() => {
              setOpenModal(false);
            }}
          />
        )}
      </LoginWrapper>
    </LoginStyled>
  );
};

export default Login;
