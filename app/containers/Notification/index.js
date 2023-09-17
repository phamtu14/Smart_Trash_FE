import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import * as actions from './actions';
import * as selectors from './selector';
import TableFunction from '../../res/components/TableOtherView/TableFunction';
import {
  AdvanceSearchWrapper,
  CloseAdvanceView,
  Content,
  ContentAdvanceView,
  ContentHeader,
  ContentTitle,
  ContentWrapper,
  HeaderAdvanceView,
  HeaderLeft,
  HeaderRight,
  TitleAdvance,
} from '../../res/commonStyles';
import Button from '../../res/components/Button';
import Table from '../../res/components/Table';
import advanceIcon from '../../images/iconAdvance.svg';
import refreshAdvanceIcon from '../../images/iconRefeshAdvance.svg';
import closeAdvanceIcon from '../../images/iconCloseAdvance.svg';
import AddAndEditNotification from './component/AddAndEditNotification';
import DeleteNotification from './component/DeleteNotification';
import { REDUX_KEY } from '../../utils/constants';

const key = REDUX_KEY.notification;

const Notification = ({ showAdvanceSearch, onCloseAdvanceSearch }) => {
  const [showAddAndEdit, setShowAddAndEdit] = useState(false);
  const [notificationSelected, setNotificationSelected] = useState('');
  const [showDelete, setShowDelete] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showInformation, setShowInformation] = useState(false);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getListNotification({}));
  }, []);
  const onClickRow = data => {
    setNotificationSelected(data);
    setShowInformation(true);
  };
  const listPartner = useSelector(selectors.selectListNotification());
  const TABLE_ACCOUNT = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      width: '50px',
      align: 'center',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Mã Thông báo',
      dataIndex: 'notificationID',
      key: 'notificationID',
    },
    {
      title: 'Mã Thùng rác',
      dataIndex: 'recycleBinID',
      key: 'recycleBinID',
    },
    {
      title: 'Tên thông báo',
      dataIndex: 'notificationName',
      key: 'notificationName',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'notificationType',
      width: '150px',
      render: (text, record) => (
        <TableFunction
          type="noti"
          text={text}
          record={record}
          // titleEdit="Sửa Bãi đỗ xe"
          // onClickEdit={() => {
          //   setShowAddAndEdit(true);
          //   setNotificationSelected(record);
          // }}
          titleDelete="Xóa Thông báo"
          onClickDelete={() => {
            setShowDelete(true);
            setNotificationSelected(record);
          }}
        />
      ),
    },
  ];
  const handleCloseAdvanceSearch = () => {
    onCloseAdvanceSearch();
  };
  return (
    <Content>
      <ContentWrapper showAdvanceSearch={showAdvanceSearch}>
        <ContentHeader>
          <HeaderLeft>
            <ContentTitle>
              Danh sách Thông báo: {listPartner ? listPartner.length : 0}
            </ContentTitle>
          </HeaderLeft>
          <HeaderRight>
            <Tooltip title="Không hỗ trợ thêm mới thông báo" placement="left">
              <Button
                disabled
                iconName="add"
                type="primary"
                onClick={() => {
                  setShowAddAndEdit(true);
                  setNotificationSelected({});
                }}
              >
                Thêm mới
              </Button>
            </Tooltip>
          </HeaderRight>
        </ContentHeader>
        <Table
          columns={TABLE_ACCOUNT}
          data={listPartner}
          minWidth={1100}
          isLoading={false}
          disableClickRowExpand
          onClickRow={onClickRow}
        />
      </ContentWrapper>
      {showAdvanceSearch && (
        <AdvanceSearchWrapper>
          <HeaderAdvanceView>
            <img alt="" src={advanceIcon} />
            <TitleAdvance>Lọc nâng cao</TitleAdvance>
            <Tooltip title="Đặt lại">
              <img
                style={{ cursor: 'pointer', marginLeft: '5px' }}
                alt=""
                src={refreshAdvanceIcon}
              />
            </Tooltip>
            <CloseAdvanceView>
              <Tooltip title="Đóng" onClick={handleCloseAdvanceSearch}>
                <img
                  style={{ cursor: 'pointer' }}
                  alt=""
                  src={closeAdvanceIcon}
                />
              </Tooltip>
            </CloseAdvanceView>
          </HeaderAdvanceView>
          <ContentAdvanceView />
        </AdvanceSearchWrapper>
      )}
      <AddAndEditNotification
        visible={showAddAndEdit}
        onClose={() => {
          setShowAddAndEdit(false);
        }}
        data={notificationSelected}
      />

      <DeleteNotification
        onClose={() => {
          setShowDelete(false);
        }}
        data={notificationSelected}
        visible={showDelete}
        refreshT={() => {
          dispatch(actions.getListNotification());
        }}
      />
    </Content>
  );
};
Notification.propTypes = {
  showAdvanceSearch: PropTypes.bool,
  onCloseAdvanceSearch: PropTypes.func,
};
export default Notification;
