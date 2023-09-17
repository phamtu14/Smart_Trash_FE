import React, { useEffect } from 'react';
import { Col, Form, Radio, Row } from 'antd';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useInjectReducer } from '../../../../utils/injectReducer';
import reducer from '../../reducer';
import { useInjectSaga } from '../../../../utils/injectSaga';
import saga from '../../saga';
import { FormCustom } from '../../../RecycleBin/component/AddAndEditRecycleBin/style';
import FloatingLabel from '../../../../res/components/FloatingLabel/Input';
import CustomModal from '../../../../res/components/CustomModal';
import * as actions from '../../actions';
import Notice from '../../../../res/components/Notice';
import { REDUX_KEY } from '../../../../utils/constants';
import { RadioGroup } from '../../../../res/components/CopyPageSignModal/styled';
const key = REDUX_KEY.User;

const AddAndEditUser = ({ data, visible, onClose, refreshT }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const clearForm = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (JSON.stringify(data) !== '{}') {
      const body = {
        userID: data.userID,
        userName: data.userName,
        password: data.password,
        email: data.email,
        userType: data.userType,
      };
      form.setFieldsValue(body);
    } else {
      const body = {
        userID: '',
        userName: '',
        password: '',
        email: '',
        userType: 0,
      };
      form.setFieldsValue(body);
    }
  }, [data]);
  const onSubmit = () => {
    form.validateFields().then(async value => {
      if (JSON.stringify(data) === '{}') {
        dispatch(
          actions.addUser({
            ...value,
            userID: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          }),
        );
      } else {
        const res = await axios.put(
          `https://localhost:7145/api/v1/User/${data.userID}`,
          {
            userID: value.userID,
            userName: value.userName,
            password: value.password,
            email: value.email,
            userType: value.userType,
          },
        );
        if (res.data === 1) {
          refreshT();
          onClose();
        } else {
          Notice({
            msg: 'Đã có lỗi xả ra. Bạn vui lòng thử lại',
            isSuccess: false,
          });
        }
      }
      refreshT();
      onClose();
    });
  };
  return (
    <CustomModal
      title={
        JSON.stringify(data) === '{}'
          ? 'Thêm Người dùng'
          : 'Sửa thông tin người dùng'
      }
      width={850}
      visible={visible}
      onClickCancel={() => {
        onClose();
        clearForm();
      }}
      onSave={() => {
        onSubmit();
      }}
    >
      <FormCustom form={form}>
        <Form.Item name="userID">
          <FloatingLabel label="Mã người dùng" isRequired disabled />
        </Form.Item>
        {/* <div>Vị trí</div> */}
        <Row gutter={18}>
          <Col span={24}>
            <Form.Item name="userName">
              <FloatingLabel
                label="Tên đăng nhập"
                disabled={JSON.stringify(data) !== '{}'}
                isRequired
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={18}>
          <Col span={24}>
            <Form.Item name="password">
              <FloatingLabel label="Mật khẩu" isRequired />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={18}>
          <Col span={24}>
            <Form.Item name="email">
              <FloatingLabel label="Email" isRequired />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={18}>
          <Col span={24}>
            <Form.Item name="userType">
              <RadioGroup defaultValue={0}>
                <Radio value={1}>Admin</Radio>
                <Radio value={0}>Quản lý</Radio>
              </RadioGroup>
            </Form.Item>
          </Col>
        </Row>
      </FormCustom>
    </CustomModal>
  );
};

AddAndEditUser.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  refreshT: PropTypes.func,
};
export default AddAndEditUser;
