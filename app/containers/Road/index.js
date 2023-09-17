import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import {
  Content,
  ContentHeader,
  ContentTitle,
  ContentWrapper,
  HeaderLeft,
} from '../../res/commonStyles';

import Table from '../../res/components/Table';
import { REDUX_KEY } from '../../utils/constants';

const key = REDUX_KEY.garbageTruck;

const Road = ({ showAdvanceSearch }) => {
  // eslint-disable-next-line no-unused-vars
  const [showInformation, setShowInformation] = useState(false);
  const [listRecycleBin, setListRecycleBin] = useState([]);
  const [listTruck, setListTruck] = useState([]);
  const [shortestDistances, setShortestDistances] = useState([]);

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    loadData();
  }, []);

  function calculateHaversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Độ chênh lệch vĩ độ
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Độ chênh lệch kinh độ
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2); // Công thức Haversine
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); // Tính khoảng cách
    const distance = R * c; // Khoảng cách cuối cùng
    return distance; // Trả về khoảng cách tính bằng đơn vị "km"
  }
  const loadData = async () => {
    // Gửi GET request đến API để lấy dữ liệu về thùng rác
    const res = await axios.get('https://localhost:7145/api/v1/RecycleBin');
    // Gửi GET request đến API để lấy dữ liệu về xe đổ rác
    const listTruckA = await axios.get(
      'https://localhost:7145/api/v1/Garbagetruck',
    );
    const allRecycleBins = res.data; // Dữ liệu về thùng rác
    const allGarbageTrucks = listTruckA.data; // Dữ liệu về xe đổ rác
    // Lọc danh sách recycleBins có recyclebinStatus là 1
    const recycleBins = allRecycleBins.filter(
      bin => bin.recyclebinStatus === 1,
    );

    const resp = await axios.get('https://localhost:7145/api/v1/User');

    const allUser = resp.data;
    console.log(allUser);

    const garbageTrucks = allGarbageTrucks.filter(
      garbage => garbage.status === 1,
    );

    console.log(allGarbageTrucks);

    // Tính toán khoảng cách ngắn nhất từ mỗi xe đổ rác đến thùng rác và sắp xếp theo thứ tự tăng dần
    // eslint-disable-next-line no-shadow
    const shortestDistances = garbageTrucks.map(garbageTruck => {
      let shortestDistance = Number.MAX_VALUE;
      let closestRecycleBin = null;
      // Duyệt qua danh sách thùng rác
      // eslint-disable-next-line no-restricted-syntax
      for (const recycleBin of recycleBins) {
        // Tính khoảng cách Haversine
        const distance = calculateHaversineDistance(
          parseFloat(garbageTruck.location.split(',')[0]),
          parseFloat(garbageTruck.location.split(',')[1]),
          parseFloat(recycleBin.location.split(',')[0]),
          parseFloat(recycleBin.location.split(',')[1]),
        );
        // So sánh với khoảng cách ngắn nhất hiện tại
        if (distance < shortestDistance) {
          shortestDistance = distance;
          closestRecycleBin = recycleBin;
        }
      }
      // Trả về thông tin về xe đổ rác, thùng rác gần nhất, và khoảng cách ngắn nhất
      return {
        garbageTruck,
        closestRecycleBin,
        shortestDistance: shortestDistance.toFixed(2), // Làm tròn khoảng cách đến 2 chữ số thập phân
      };
    });
    // Sắp xếp danh sách theo khoảng cách ngắn nhất tăng dần
    shortestDistances.sort(
      (a, b) => parseFloat(a.shortestDistance) - parseFloat(b.shortestDistance),
    );
    console.log(shortestDistances); // In ra danh sách với khoảng cách đã được sắp xếp
    // Cập nhật state với danh sách thùng rác, xe đổ rác và khoảng cách ngắn nhất
    setListRecycleBin(recycleBins);
    setListTruck(garbageTrucks);
    setShortestDistances(shortestDistances);
  };

  const onClickRow = record => {
    // Lấy thông tin vị trí từ record
    const truckLocation = record.garbageTruck.location;
    const recycleBinLocation = record.closestRecycleBin.location;

    // Tạo URL đến Google Maps với các tọa độ đã biết
    const googleMapsURL = `https://www.google.com/maps/dir/${truckLocation}/${recycleBinLocation}`;

    // Mở Google Maps trong cửa sổ mới hoặc tab mới
    window.open(googleMapsURL, '_blank');
  };

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
      dataIndex: 'garbageTruck.garbageTruckName',
      key: 'garbageTruckName',
      width: '400px',
      render: (text, record) => record.garbageTruck.garbageTruckName,
    },
    {
      title: 'Tên thùng rác',
      dataIndex: 'closestRecycleBin',
      key: 'closestRecycleBin',
      width: '400px',
      render: (text, record) => record.closestRecycleBin.recycleBinName,
    },
    {
      title: 'Trạng thái',
      dataIndex: 'closestRecycleBin',
      key: 'closestRecycleBin',
      width: '400px',
      render: (text, record) => (
        <p
          style={{
            color:
              record.closestRecycleBin.recyclebinStatus === 1
                ? 'red'
                : 'inherit',
          }}
        >
          {record.closestRecycleBin.recyclebinStatus === 1
            ? 'Đã đầy'
            : 'Chưa đầy'}
        </p>
      ),
    },
    {
      title: 'Quãng đường',
      dataIndex: 'shortestDistance',
      key: 'shortestDistance',
      width: '400px',
      render: text => `${text} km`,
    },
  ];

  return (
    <Content>
      <ContentWrapper showAdvanceSearch={showAdvanceSearch}>
        <ContentHeader>
          <HeaderLeft>
            <ContentTitle>
              Danh sách xe gần thùng rác nhất:{' '}
              {listTruck ? listTruck.length : 0}
            </ContentTitle>
          </HeaderLeft>
        </ContentHeader>
        <Table
          columns={TABLE_ACCOUNT}
          data={shortestDistances}
          minWidth={1100}
          isLoading={false}
          disableClickRowExpand
          onClickRow={onClickRow}
        />
      </ContentWrapper>
    </Content>
  );
};

Road.propTypes = {
  showAdvanceSearch: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  onCloseAdvanceSearch: PropTypes.func,
};

export default Road;
