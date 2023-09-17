import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Col, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import {
  GoogleMap,
  useJsApiLoader,
  DirectionsRenderer,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

import {
  ButtonLogin,
  DivIconSearch,
  HeaderLayout,
  MenuHomepage,
} from './styled';
import Banner from './component/Banner';

import IconSearch from '../../images/search2.svg';

import IconDustbinGreen from '../../images/icon/dustbin/dustbingreen.svg';
import IconDustbinRed from '../../images/icon/dustbin/dustbinred.svg';
import IconDustbinYellow from '../../images/icon/dustbin/dustbinorange.svg';
import IconDustbinGray from '../../images/icon/dustbin/dustbinblue.svg';
import Avatar from '../../images/avatarDefault.svg';

import { statusToColor, statusToText } from '../../res/commonFunction';

import ListInfor from './component/ListInfo';
import InfoDiv from './component/InforDiv';
import Options from './component/Options';
const center = {
  lat: 21.036891,
  lng: 105.781659,
};

const HomePage = () => {
  const history = useHistory();
  const [directionResponse, setDirectionsResponse] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [distance, setDistance] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [duration, setDuration] = useState('');
  const [geoLocation, setGeoLocation] = useState({});
  const clickLogin = () => {
    history.push('./login');
  };

  const [listRecycleBin] = useState([]);

  const calculateRoute = async (userPost, recycleBinPost) => {
    // eslint-disable-next-line no-undef
    const directonService = new google.maps.DirectionsService();
    const results = await directonService.route({
      origin: {
        lat: geoLocation.lat,
        lng: geoLocation.lng,
      },
      destination: {
        lat: parseFloat(recycleBinPost.toString().split(',')[0]),
        lng: parseFloat(recycleBinPost.toString().split(',')[1]),
      },

      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING,
    });
    setDirectionsResponse(results);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBhP-QUDjRJcOHhu5dzxSmXo3LR3nuxkAo',
  });

  // eslint-disable-next-line no-unused-vars
  const [mapA, setMap] = React.useState(null);

  // eslint-disable-next-line no-unused-vars
  const [showInfo, setShowInfor] = useState(false);

  // lấy danh sách thùng rác

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  // eslint-disable-next-line no-unused-vars
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const items = [
    {
      label: 'Intro',
      key: 'item1',
    },
    {
      label: 'Guide',
      key: 'item2',
    },
    {
      label: 'Contact',
      key: 'item3',
    },
  ];

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log(234);
    }
  };

  const showPosition = position => {
    setGeoLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const statusToIcon = idStatus => {
    let iCon = null;
    switch (idStatus) {
      case 0:
        iCon = IconDustbinGreen;
        break;
      case 2:
        iCon = IconDustbinYellow;
        break;
      case 1:
        iCon = IconDustbinRed;
        break;
      case 3:
        iCon = IconDustbinGray;
        break;
      default:
        iCon = IconDustbinGray;
        break;
    }
    return iCon;
  };

  const [idSelected, setIdSelected] = useState(0);

  return (
    <div>
      <HeaderLayout>
        <Row>
          <Col span={12}>
            <MenuHomepage mode="horizontal" items={items} />
          </Col>
          <Col span={2} push={10}>
            <div
              style={{ display: 'flex', flexDirection: 'row', height: '100%' }}
            >
              <DivIconSearch>
                <img src={IconSearch} alt="" width={30} height={30} />
              </DivIconSearch>
              <ButtonLogin onClick={clickLogin}>Login</ButtonLogin>
            </div>
          </Col>
        </Row>
      </HeaderLayout>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
          width: '100%',
        }}
      >
        <Banner />
        <ListInfor />
        <InfoDiv
          title="End-to-end smart waste management solutions"
          detail="Providing enterprise-gradesmart waste management solutions that support the digital transformation of waste management to achieve efficiency, transparency, and sustainability "
        />
        <Options />
      </Content>
      <div style={{ height: '100vh', width: '100%' }}>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Marker
              position={{ lat: geoLocation.lat, lng: geoLocation.lng }}
              icon={Avatar}
            />
            {/* eslint-disable-next-line no-shadow */}
            {listRecycleBin.map(items => (
              <>
                {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
                <Marker
                  // onLoad={onLoad}
                  // onUnmount={onUnmount}
                  position={{
                    lat: parseFloat(items.location.split(',')[0]),
                    lng: parseFloat(items.location.split(',')[1]),
                  }}
                  // options={options}
                  onMouseOver={e => {
                    console.log(e);
                    setShowInfor(true);
                    setIdSelected(items.recycleBinID);
                  }}
                  onClick={e => {
                    console.log(e);
                    setShowInfor(true);
                  }}
                  icon={statusToIcon(items.recyclebinStatus)}
                />
                {idSelected === items.recycleBinID && (
                  <InfoWindow
                    position={{
                      lat: parseFloat(items.location.split(',')[0]),
                      lng: parseFloat(items.location.split(',')[1]),
                    }}
                    zIndex={1000}
                    onCloseClick={() => {
                      setShowInfor(false);
                    }}
                  >
                    <div style={{ width: '200px' }}>
                      <div>Thùng rác: {items.name}</div>
                      <div>Tọa độ: {items.location}</div>
                      <div
                        style={{ color: statusToColor(items.recyclebinStatus) }}
                      >
                        Trạng thái: {statusToText(items.recyclebinStatus)}
                      </div>
                      {/* eslint-disable-next-line react/button-has-type */}
                      <button
                        style={{
                          height: '32px',
                          width: '80px',
                          borderRadius: '12px',
                        }}
                        onClick={() => {
                          calculateRoute(
                            '21.036891, 105.781659',
                            items.location,
                          );
                        }}
                      >
                        Chỉ đường
                      </button>
                    </div>
                  </InfoWindow>
                )}
              </>
            ))}
            {directionResponse && (
              <DirectionsRenderer directions={directionResponse} />
            )}
          </GoogleMap>
        )}
      </div>
    </div>
  );
};
export default HomePage;
