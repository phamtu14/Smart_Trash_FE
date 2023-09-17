import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { FormCustom } from './style';
import { useInjectReducer } from '../../../../utils/injectReducer';
import { useInjectSaga } from '../../../../utils/injectSaga';
import * as actions from '../../actions';
import CustomModal from '../../../../res/components/CustomModal';
import FloatingLabel from '../../../../res/components/FloatingLabel/Input';
import { RadioGroup } from '../../../../res/components/CopyPageSignModal/styled';
import reducer from '../../reducer';
import saga from '../../saga';
import { REDUX_KEY } from '../../../../utils/constants';

const key = REDUX_KEY.notification;
const AddAndEditNotification = ({ data, visible, onClose }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const clearForm = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (data.length > 0) {
      const body = {
        NotificationID: data,
        lon: 11,
        lat: 12,
      };
      form.setFieldsValue(body);
    }
  }, [data]);

  const onSubmit = () => {
    form.validateFields().then(value => {
      const body = {
        NotificationID: value.name,
        location: `${value.lon},${value.lat}`,
      };
      dispatch(actions.addNotification(body));
    });
  };

  return (
    <CustomModal
      title={data.length === 0 ? 'Thêm Bãi đỗ xe' : 'Sửa thông tin Bãi đỗ xe'}
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
        <Form.Item name="NotificationID">
          <FloatingLabel label="Tên Bãi đỗ xe" isRequired />
        </Form.Item>
        {/* <div>Vị trí</div> */}
        <Row gutter={18}>
          <Col span={12}>
            <Form.Item name="lon">
              <FloatingLabel label="Kinh độ" isRequired />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lat">
              <FloatingLabel label="Vĩ độ" isRequired />
            </Form.Item>
          </Col>
        </Row>
        <RadioGroup>
          <Radio value={1}>Hoạt động</Radio>
          <Radio value={2}>Không hoạt động</Radio>
        </RadioGroup>
      </FormCustom>
    </CustomModal>
  );
};

AddAndEditNotification.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
};

export default AddAndEditNotification;
