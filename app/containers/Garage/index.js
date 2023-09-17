import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Tooltip } from 'antd';
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
// import BoldItalyHeader from '../../res/components/TableOtherView/BoldItalyHeader';
// import BoldItaly from '../../res/components/TableOtherView/BoldItaly';
import TableFunction from '../../res/components/TableOtherView/TableFunction';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import * as actions from './actions';
import * as selectors from './selector';
import reducer from './reducer';
import saga from './saga';
import { REDUX_KEY } from '../../utils/constants';
import BoldItaly from '../../res/components/TableOtherView/BoldItaly';
import refreshAdvanceIcon from '../../images/iconRefeshAdvance.svg';
import advanceIcon from '../../images/iconAdvance.svg';
import closeAdvanceIcon from '../../images/iconCloseAdvance.svg';
import AddAndEditGarage from './component/AddEndEditGarage';
import DeleteGarage from './component/DeleteGarage';

const key = REDUX_KEY.garage;

const Garage = ({ showAdvanceSearch, onCloseAdvanceSearch }) => {
  const [showAddAndEdit, setShowAddAndEdit] = useState(false);
  const [garageSelected, setgarageSelected] = useState({});
  const [showDelete, setShowDelete] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [showInformation, setShowInformation] = useState(false);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getListGarage({}));
  }, []);
  const onClickRow = data => {
    setgarageSelected(data);
    setShowInformation(true);
  };
  const listPartner = useSelector(selectors.selectListGarage());
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
      title: 'Mã Bãi đỗ xe',
      dataIndex: 'garageID',
      key: 'garageID',
    },
    {
      title: 'Tên Bãi đỗ xe',
      dataIndex: 'garageName',
      key: 'garageName',
      render: text => <BoldItaly name1={text || 'Chưa xác định'} />,
    },
    {
      title: 'Vị trí',
      dataIndex: 'code',
      key: 'code',
      width: '150px',
      render: (text, record) => (
        <BoldItaly
          name1={record.location.toString().split(',')[0]}
          name2={record.location.toString().split(',')[1]}
        />
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'garageIDDD',
      width: '150px',
      render: (text, record) => (
        <TableFunction
          type="normal"
          text={text}
          record={record}
          titleEdit="Sửa Bãi đỗ xe"
          onClickEdit={() => {
            setShowAddAndEdit({});
            setgarageSelected(record);
          }}
          titleDelete="Xóa Bãi đõ xe"
          onClickDelete={() => {
            setShowDelete(true);
            setgarageSelected(record);
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
              Danh sách Bãi để xe: {listPartner ? listPartner.length : 0}
            </ContentTitle>
          </HeaderLeft>
          <HeaderRight>
            <Button
              iconName="add"
              type="primary"
              onClick={() => {
                setShowAddAndEdit(true);
                setgarageSelected({});
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
      <AddAndEditGarage
        visible={showAddAndEdit}
        onClose={() => {
          setShowAddAndEdit(false);
        }}
        data={garageSelected}
        refreshT={() => {
          dispatch(actions.getListGarage());
        }}
      />

      <DeleteGarage
        onClose={() => {
          setShowDelete(false);
        }}
        data={garageSelected}
        visible={showDelete}
        refreshT={() => {
          dispatch(actions.getListGarage());
        }}
      />
    </Content>
  );
};

Garage.propTypes = {
  showAdvanceSearch: PropTypes.bool,
  onCloseAdvanceSearch: PropTypes.func,
};

export default Garage;
