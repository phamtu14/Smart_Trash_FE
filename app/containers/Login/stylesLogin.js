/**
 * ...
 */

import styled from 'styled-components';

export const LoginStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;

  .forgot-pass {
    text-align: center;
    margin-top: 20px;
    color: #08b7dd;
    cursor: pointer;
  }
  .ant-form-item-explain-error {
    margin-bottom: 0 !important;
  }
  .input-helper {
    display: flex;
    position: relative;
  }
  .icon-helper {
    position: absolute;
    right: -30px;
    top: 12px;
  }
  .not-acc {
    text-align: center;
    //color: #626262;
    margin-top: 20px;
  }

  .ant-menu-submenu-popup {
    left: 606px !important;
  }

  .login-wrapper {
    width: 100%;
    height: 100%;
    padding: 20px 60px 20px 60px;
    display: flex;
    flex-direction: column;
  }
  .header-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .btn {
    color: #ffffff;
  }

  .body-content {
    display: flex;
    flex: 1 1 auto;
    justify-content: flex-end;
    color: white;
  }
  .font-tahoma {
  }
  .content-center {
    display: flex;
    align-items: center;
    margin-top: 160px;
    flex-direction: column;
  }
  .form-login {
    background: white;
    padding: 80px 50px;
    border-radius: 12px;
  }

  .login-text {
    text-align: center;
    color: #08b7dd;
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 50px;
  }
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(9, 44, 52, 0.4);
  padding: 20px 60px 20px 60px;
  display: flex;
  flex-direction: column;
`;
