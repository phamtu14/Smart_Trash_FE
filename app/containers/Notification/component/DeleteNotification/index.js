import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  ContainerLoading,
  Icon,
} from '../../../Garage/component/DeleteGarage/style';
import CustomModal from '../../../../res/components/CustomModal';
import iconAlert from '../../../../images/icon/iconAlert.svg';
import Notice from '../../../../res/components/Notice';
const DeleteNotification = ({ data, visible, onClose, refreshT }) => {
  const onSubmit = async () => {
    const res = await axios.delete(
      `https://localhost:7145/api/v1/Notification/${data.notificationID}`,
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
      title="Xóa Thông báo"
      width={550}
      visible={visible}
      onClickCancel={() => {
        onClose();
      }}
      onSave={() => {
        onSubmit();
        onClose();
      }}
      nameSave="Xóa"
    >
      <ContainerLoading style={{ paddingTop: 35 }}>
        <Icon src={iconAlert} alt="" />
        <div>
          Bạn có muốn xóa Thông báo{' '}
          <span style={{ fontWeight: 600 }}>{data.notificationID}</span> không?
        </div>
      </ContainerLoading>
    </CustomModal>
  );
};

DeleteNotification.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  refreshT: PropTypes.func,
};

export default DeleteNotification;
