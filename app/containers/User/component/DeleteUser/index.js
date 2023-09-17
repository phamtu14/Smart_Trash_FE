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

const DeleteUser = ({ data, visible, onClose, refreshT }) => {
  const onSubmit = async () => {
    const res = await axios.delete(
      `https://localhost:7145/api/v1/User/${data.userID}`,
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
      title="Xóa Người dùng"
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
        <div>Bạn có muốn xóa người dùng {data.userName} không?</div>
      </ContainerLoading>
    </CustomModal>
  );
};

DeleteUser.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
  refreshT: PropTypes.func,
};

export default DeleteUser;
