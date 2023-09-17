import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import { FormCustom } from './style';
import { useInjectReducer } from '../../../../utils/injectReducer';
import { useInjectSaga } from '../../../../utils/injectSaga';
// import * as actions from '../../actions';
import CustomModal from '../../../../res/components/CustomModal';
import FloatingLabel from '../../../../res/components/FloatingLabel/Input';
import reducer from '../../reducer';
import saga from '../../saga';
import { REDUX_KEY } from '../../../../utils/constants';
import Notice from '../../../../res/components/Notice';

const key = REDUX_KEY.garage;
const AddAndEditGarage = ({ data, visible, onClose, refreshT }) => {
  const [form] = Form.useForm();
  // const dispatch = useDispatch();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const clearForm = () => {
    form.resetFields();
  };

  useEffect(() => {
    if (JSON.stringify(data) !== '{}') {
      const body = {
        garageID: data,
        lon: data.location.toString().split(',')[0],
        lat: data.location.toString().split(',')[1],
      };
      form.setFieldsValue(body);
    }
  }, [data]);

  const onSubmit = () => {
    form.validateFields().then(async value => {
      if (JSON.stringify(data) === '{}') {
        const res = await axios.post(`https://localhost:7145/api/v1/Garage`, {
          garageID: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          location: `${value.lon},${value.lat}`,
          GarageName: value.name || 'abc',
        });
        if (res.data === 1) {
          Notice({
            msg: 'Thao tác thành công !',
            isSuccess: true,
          });
          refreshT();
          onClose();
        } else {
          Notice({
            msg: 'Đã có lỗi xả ra. Bạn vui lòng thử lại',
            isSuccess: false,
          });
        }
      } else {
        const res = await axios.put(
          `https://localhost:7145/api/v1/Garage/${data.garageID}`,
          {
            garageID: data.garageID,
            location: `${value.lon},${value.lat}`,
            GarageName: value.name,
          },
        );
        if (res.data === 1) {
          Notice({
            msg: 'Thao tác thành công !',
            isSuccess: true,
          });
          refreshT();
          onClose();
        } else {
          Notice({
            msg: 'Đã có lỗi xả ra. Bạn vui lòng thử lại',
            isSuccess: false,
          });
        }
      }
    });
    // refreshT();
    onClose();
  };

  return (
    <CustomModal
      title={
        JSON.stringify(data) === '{}'
          ? 'Thêm Bãi đỗ xe'
          : 'Sửa thông tin Bãi đỗ xe'
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
        <Form.Item name="name">
          <FloatingLabel label="Tên Bãi đỗ xe" isRequired />
        </Form.Item>
        {/* <div>Vị trí</div> */}
        <Row style={{ marginBottom: '10px' }}>
          <div>Vị trí</div>
        </Row>
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
        {/* <RadioGroup> */}
        {/*  <Radio value={1}>Hoạt động</Radio> */}
        {/*  <Radio value={2}>Không hoạt động</Radio> */}
        {/* </RadioGroup> */}
      </FormCustom>
    </CustomModal>
  );
};

AddAndEditGarage.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  refreshT: PropTypes.func,
};

export default AddAndEditGarage;
