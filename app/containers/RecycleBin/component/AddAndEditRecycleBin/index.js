import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { FormCustom } from './style';
import { useInjectReducer } from '../../../../utils/injectReducer';
import { useInjectSaga } from '../../../../utils/injectSaga';
import * as actions from '../../actions';
import CustomModal from '../../../../res/components/CustomModal';
import FloatingLabel from '../../../../res/components/FloatingLabel/Input';
import reducer from '../../reducer';
import saga from '../../saga';
import { REDUX_KEY } from '../../../../utils/constants';
import Notice from '../../../../res/components/Notice';

const key = REDUX_KEY.recycleBin;
const AddAndEditRecycleBin = ({ data, visible, onClose, refreshT }) => {
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
        recycleBinID: data.recycleBinID,
        lon: data.location.toString().split(',')[0],
        lat: data.location.toString().split(',')[1],
        recyclebinStatus: data.recyclebinStatus,
        daySinceLastCollection: data.daySinceLastCollection,
        usages: data.usages,
      };
      form.setFieldsValue(body);
    } else {
      const body = {
        recycleBinID: '',
        lon: '',
        lat: '',
        recyclebinStatus: 0,
        daySinceLastCollection: '0',
        usages: '0',
      };
      form.setFieldsValue(body);
    }
  }, [data]);

  const onSubmit = () => {
    form.validateFields().then(async value => {
      const body = {
        recycleBinID: value.name,
        location: `${value.lon},${value.lat}`,
        usages: 0,
        daySinceLastCollection: 0,
        recyclebinStatus: 0,
      };

      if (JSON.stringify(data) === '{}') {
        dispatch(actions.addrecycleBin(body));
      } else {
        const res = await axios.put(
          `https://localhost:7145/api/v1/RecycleBin/${data.recycleBinID}`,
          { garageID: data.garageID, location: `${value.lon},${value.lat}` },
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
    });
  };

  return (
    <CustomModal
      title={
        JSON.stringify(data) === '{}'
          ? 'Thêm Thùng rác'
          : 'Sửa thông tin Thùng rác'
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
        <Form.Item name="recycleBinID">
          <FloatingLabel label="Tên Thùng rác" isRequired />
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
        <Row gutter={18}>
          <Col span={12}>
            <Form.Item name="usages">
              <FloatingLabel label="usages" disabled isRequired />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="daySinceLastCollection">
              <FloatingLabel label="Ngày chưa đổ rác" disabled isRequired />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={18}>
          <Col span={24}>
            <Form.Item name="recyclebinStatus">
              <FloatingLabel label="Trạng thái" disabled isRequired />
            </Form.Item>
          </Col>
        </Row>
      </FormCustom>
    </CustomModal>
  );
};

AddAndEditRecycleBin.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  refreshT: PropTypes.func,
};

export default AddAndEditRecycleBin;
