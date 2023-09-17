import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Register.scss';
import { LoginStyled, LoginWrapper } from '../Login/stylesLogin';

const Register = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = e => {
    setUserName(e.target.value);
    console.log(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const body = {
    userID: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    userName,
    password,
    email,
    userType: 1,
  };

  const submit = () => {
    axios.post('https://localhost:7145/api/v1/User/signup', body);
    history.push('/login');
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
              Đăng ký
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
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={e => handleEmailChange(e)}
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
                Đăng ký
              </Button>
            </Form>
          </Col>
          <Col span={6} />
        </Row>
      </LoginWrapper>
    </LoginStyled>
  );
};

export default Register;
