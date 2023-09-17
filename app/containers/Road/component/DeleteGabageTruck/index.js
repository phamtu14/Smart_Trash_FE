import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  ContainerLoading,
  Icon,
} from '../../../Garage/component/DeleteGarage/style';
import { useInjectReducer } from '../../../../utils/injectReducer';
import { useInjectSaga } from '../../../../utils/injectSaga';
import CustomModal from '../../../../res/components/CustomModal';
import reducer from '../../reducer';
import saga from '../../saga';
import { REDUX_KEY } from '../../../../utils/constants';
import iconAlert from '../../../../images/icon/iconAlert.svg';
import Notice from '../../../../res/components/Notice';

const key = REDUX_KEY.garbageTruck;
const DeleteGarbageTruck = ({ data, visible, onClose, refreshT }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const onSubmit = async () => {
    const res = await axios.delete(
      `https://localhost:7145/api/v1/Garbagetruck/${data.garbageTruckID}`,
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
  };

  return (
    <CustomModal
      title="Xóa Bãi đỗ xe"
      width={550}
      visible={visible}
      onClickCancel={() => {
        onClose();
      }}
      onSave={() => {
        onSubmit();
        onClose();
      }}
    >
      <ContainerLoading style={{ paddingTop: 35 }}>
        <Icon src={iconAlert} alt="" />
        <div>
          Bạn có muốn xóa Xe{' '}
          <span style={{ fontWeight: 600 }}>{data.garbageTruckID}</span> không?
        </div>
      </ContainerLoading>
    </CustomModal>
  );
};

DeleteGarbageTruck.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  refreshT: PropTypes.func,
};

export default DeleteGarbageTruck;
