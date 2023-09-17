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
import BoldItaly from '../../res/components/TableOtherView/BoldItaly';
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
import AddAndEditGarbageTruck from './component/AddAndEditGarbageTruck';
import DeleteGarbageTruck from './component/DeleteGabageTruck';
import { REDUX_KEY } from '../../utils/constants';

const key = REDUX_KEY.garbageTruck;

const GarbageTruck = ({ showAdvanceSearch, onCloseAdvanceSearch }) => {
  const [showAddAndEdit, setShowAddAndEdit] = useState(false);
  const [garbageTruckSelected, setGarbageTruckSelected] = useState({});
  const [showDelete, setShowDelete] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showInformation, setShowInformation] = useState(false);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getListGarbageTruck({}));
  }, []);
  const onClickRow = data => {
    console.log('data', data);
    setGarbageTruckSelected(data);
    setShowInformation(true);
  };
  const listPartner = useSelector(selectors.selectListGarageTruck());
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
      title: 'Tên xe đổ rác',
      dataIndex: 'garbageTruckName',
      key: 'garbageTruckName',
      width: '400px',
    },
    {
      title: 'Vị trí',
      dataIndex: 'location',
      key: 'location',
      render: (text, record) => (
        <BoldItaly
          name1={record.location.toString().split(',')[0]}
          name2={record.location.toString().split(',')[1]}
        />
      ),
    },
    {
      title: 'Tên Bãi đỗ xe',
      dataIndex: 'garbageTruckName',
      key: 'garbageTruckName',
      render: text => <BoldItaly name1={text || 'Chưa xác định'} />,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: '150px',
      render: (text, record) => (
        <TableFunction
          type="truck"
          text={text}
          record={record}
          titleEdit="Sửa Bãi đỗ xe"
          onClickEdit={() => {
            setShowAddAndEdit(true);
            setGarbageTruckSelected(record);
          }}
          titleDelete="Xóa Bãi đõ xe"
          onClickDelete={() => {
            setShowDelete(true);
            setGarbageTruckSelected(record);
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
              Danh sách Xe rác: {listPartner ? listPartner.length : 0}
            </ContentTitle>
          </HeaderLeft>
          <HeaderRight>
            <Button
              iconName="add"
              type="primary"
              onClick={() => {
                setShowAddAndEdit(true);
                setGarbageTruckSelected({});
              }}
            >
              Thêm mới
            </Button>
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
      <AddAndEditGarbageTruck
        visible={showAddAndEdit}
        onClose={() => {
          setShowAddAndEdit(false);
        }}
        data={garbageTruckSelected}
        refreshT={() => {
          dispatch(actions.getListGarbageTruck());
        }}
      />

      <DeleteGarbageTruck
        onClose={() => {
          setShowDelete(false);
        }}
        data={garbageTruckSelected}
        visible={showDelete}
        refreshT={() => {
          dispatch(actions.getListGarbageTruck());
        }}
      />
    </Content>
  );
};

GarbageTruck.propTypes = {
  showAdvanceSearch: PropTypes.bool,
  onCloseAdvanceSearch: PropTypes.func,
};

export default GarbageTruck;
