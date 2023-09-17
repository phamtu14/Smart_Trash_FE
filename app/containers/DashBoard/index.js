import React, { useEffect, useState } from 'react';
import {
  DirectionsRenderer,
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import axios from 'axios';
import { Content, ContentWrapper } from '../../res/commonStyles';
import IconDustbinGreen from '../../images/icon/dustbin/dustbingreen.svg';
import Parking from '../../images/icon/dustbin/parking.svg';
import { statusToColor, statusToText } from '../../res/commonFunction';
import IconDustbinYellow from '../../images/icon/dustbin/dustbinorange.svg';
import IconDustbinRed from '../../images/icon/dustbin/dustbinred.svg';
import IconDustbinGray from '../../images/icon/dustbin/dustbinblue.svg';

import IconGreenTruck from '../../images/icon/truck/greenTRuck.svg';
// eslint-disable-next-line import/no-unresolved
import IconYellowTruck from '../../images/icon/truck/YellowTruck.svg';
import IconRedTruck from '../../images/icon/truck/redTruck.svg';
import IconGrayTruck from '../../images/icon/truck/grayTruck.svg';

// import IconGreenGara from '../../images/icon/garage/greenGarage.svg';
// import IconYellowGara from '../../images/icon/garage/yellowGarage.svg';
// import IconRedGara from '../../images/icon/garage/redGarage.svg';
// import IconGrayGara from '../../images/icon/garage/grayGarage.svg';

const center = {
  lat: 21.036891,
  lng: 105.781659,
};
const DashBoard = () => {
  // eslint-disable-next-line no-unused-vars
  const [distance, setDistance] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [duration, setDuration] = useState([]);
  const [listRecycleBin, setListRecycleBin] = useState([]);
  const [listGara, setListGara] = useState([]);
  const [listTruck, setListTruck] = useState([]);

  const [activeBin, setNumberActiveBin] = useState(0);
  const [noActiveBin, setNumberNoActiveBin] = useState(0);

  const [activeTruck, setNumberActiveTruck] = useState(0);
  const [noActiveTruck, setNumberNoActiveTruck] = useState(0);

  const [directionResponse, setDirectionsResponse] = useState();
  const [directionResponse1, setDirectionsResponse1] = useState();
  const [directionResponse2, setDirectionsResponse2] = useState();
  const [directionResponse3, setDirectionsResponse3] = useState();

  useEffect(() => {
    console.log(directionResponse);
  }, [directionResponse]);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBMu-Uj56MpFtE9TPmwrsgMCIv6xx44q8o',
  });

  useEffect(() => {
    loadData();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const [mapA, setMap] = React.useState(null);

  // lấy danh sách thùng rác
  const loadData = async () => {
    const res = await axios.get('https://localhost:7145/api/v1/RecycleBin');
    const listGaraA = await axios.get('https://localhost:7145/api/v1/Garage');
    const listTruckA = await axios.get(
      'https://localhost:7145/api/v1/Garbagetruck',
    );
    setListGara(listGaraA.data);
    setListRecycleBin(res.data);
    setListTruck(listTruckA.data);
  };
  // Với mỗi xe có trạng thái đang di chuyển, sẽ có 1 list các thùng rác để thu gom, objectID -> chuyển về mảng location

  // lấy traạng thái của thùng rác và xe
  useEffect(() => {
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    if (listTruck.length > 0 && listRecycleBin.length > 0) {
      // eslint-disable-next-line array-callback-return
      listTruck.map(item => {
        if (item.status === 0) {
          a += 1;
        } else {
          b += 1;
        }
      });

      // eslint-disable-next-line array-callback-return
      listRecycleBin.map(item => {
        if (item.recyclebinStatus === 0) {
          c += 1;
        } else {
          d += 1;
        }
      });
      setNumberActiveBin(c);
      setNumberActiveTruck(a);
      setNumberNoActiveTruck(b);
      setNumberNoActiveBin(d);
    }
  }, [listRecycleBin, listTruck]);

  const getListLocation = listID => {
    let res = [];
    if (listID) {
      // eslint-disable-next-line array-callback-return
      listID.map(item => {
        if (item.length > 0) {
          // eslint-disable-next-line array-callback-return
          listRecycleBin.map(item2 => {
            if (item === item2.recycleBinID) {
              res = [...res, item2.location];
            }
          });
        }
      });
    }
    return res;
  };

  const [waypoint, setWaypoint] = useState([]);

  // Khi list xe thay doi, update lai danh sach
  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    listTruck.map(item => {
      if (item.status === 1) {
        if (item.recycleBinIDList) {
          // Lay duoc mang toa do
          console.log(getListLocation(item.recycleBinIDList.split(';')));
          setWaypoint([
            ...waypoint,
            getListLocation(item.recycleBinIDList.split(';')),
          ]);
        }
      }
    });
  }, [listTruck]);

  useEffect(() => {
    calculateRoute();
  }, []);

  // 30s load api 1 lan
  setInterval(() => {
    loadData();
    calculateRoute();
  }, 30000);

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

  const statusToIconTruck = idStatus => {
    let iCon = null;
    switch (idStatus) {
      case 0:
        iCon = IconGreenTruck;
        break;
      case 2:
        iCon = IconGrayTruck;
        break;
      case 1:
        iCon = IconRedTruck;
        break;
      case 3:
        iCon = IconYellowTruck;
        break;
      default:
        iCon = IconGrayTruck;
        break;
    }
    return iCon;
  };

  const calculateRoute = async () => {
    // eslint-disable-next-line no-undef
    const directonService = new google.maps.DirectionsService();
    const results = await directonService.route({
      waypoints: [
        {
          // eslint-disable-next-line no-undef
          location: new google.maps.LatLng(21.039824, 105.766436),
        },
      ],
      // vị trí thùng rác cuối cùng
      origin: {
        lat: 21.030424,
        lng: 105.801075,
      },
      destination: { lat: 21.030324, lng: 105.787992 },
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);

    // eslint-disable-next-line no-undef
    const directonService1 = new google.maps.DirectionsService();
    const results1 = await directonService1.route({
      waypoints: [
        {
          // eslint-disable-next-line no-undef
          location: new google.maps.LatLng(21.033071, 105.780287),
        },
      ],
      origin: {
        lat: 21.033071,
        lng: 105.780287,
      },
      destination: { lat: 21.041756, lng: 105.787076 },
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING,
    });
    setDirectionsResponse1(results1);

    // eslint-disable-next-line no-undef
    const directonService2 = new google.maps.DirectionsService();
    const results2 = await directonService2.route({
      waypoints: [
        {
          // eslint-disable-next-line no-undef
          location: new google.maps.LatLng(21.037652, 105.773704),
        },
        {
          // eslint-disable-next-line no-undef
          location: new google.maps.LatLng(21.034797, 105.7659),
        },
      ],
      origin: {
        lat: 21.034045,
        lng: 105.797448,
      },
      destination: { lat: 21.036419, lng: 105.779883 },
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING,
    });
    setDirectionsResponse2(results2);

    // eslint-disable-next-line no-undef
    const directonService3 = new google.maps.DirectionsService();
    const results3 = await directonService3.route({
      waypoints: [
        {
          // eslint-disable-next-line no-undef
          location: new google.maps.LatLng(21.034638, 105.772792),
        },
      ],
      origin: {
        lat: 21.030906,
        lng: 105.796175,
      },
      destination: { lat: 21.041756, lng: 105.760932 },
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.WALKING,
    });
    setDirectionsResponse3(results3);
  };

  const [idSelected, setIdSelected] = useState(0);
  return (
    <Content>
      <ContentWrapper showAdvanceSearch={false}>
        <div>Số xe di chuyển: {noActiveTruck}</div>
        <div>Số xe đang trống: {activeTruck}</div>
        <div>Số thùng rác trống: {activeBin}</div>
        <div>Số thùng rác đã đầy: {noActiveBin}</div>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* eslint-disable-next-line no-shadow */}
            {listRecycleBin.map(items => (
              <>
                {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
                <Marker
                  position={{
                    lat: parseFloat(items.location.split(',')[0]),
                    lng: parseFloat(items.location.split(',')[1]),
                  }}
                  onMouseOver={e => {
                    console.log(e);
                    setIdSelected(items.recycleBinID);
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
                  >
                    <div style={{ width: '200px' }}>
                      <div>Thùng rác: {items.name}</div>
                      <div>Tọa độ: {items.location}</div>
                      <div
                        style={{ color: statusToColor(items.recyclebinStatus) }}
                      >
                        Trạng thái: {statusToText(items.recyclebinStatus)}
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </>
            ))}
            {listTruck.map(items => (
              <>
                {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
                <Marker
                  position={{
                    lat: parseFloat(items.location.split(',')[0]),
                    lng: parseFloat(items.location.split(',')[1]),
                  }}
                  onMouseOver={e => {
                    console.log(e);
                    setIdSelected(items.garbageTruckID);
                  }}
                  icon={statusToIconTruck(items.status)}
                />
                {idSelected === items.garbageTruckID && (
                  <InfoWindow
                    position={{
                      lat: parseFloat(items.location.split(',')[0]),
                      lng: parseFloat(items.location.split(',')[1]),
                    }}
                    zIndex={1000}
                  >
                    <div style={{ width: '200px' }}>
                      <div>Tên xe: {items.name}</div>
                      <div>Tọa độ: {items.location}</div>
                      <div
                        style={{
                          color: items.status === 0 ? '#00FF00' : '#FFFF00',
                        }}
                      >
                        Trạng thái:{' '}
                        {items.status === 0 ? 'Đang chờ' : 'Đang đi đổ rác'}
                      </div>
                    </div>
                  </InfoWindow>
                )}
              </>
            ))}
            {listGara.map(items => (
              <>
                <Marker
                  title={`Tram dung ${items.recycleBinID}.Tình trạng${
                    items.recyclebinStatus
                  }`}
                  position={{
                    lat: parseFloat(items.location.split(',')[0]),
                    lng: parseFloat(items.location.split(',')[1]),
                  }}
                  icon={Parking}
                />
              </>
              // eslint-disable-next-line react/jsx-no-comment-textnodes
            ))}
            {directionResponse && (
              <DirectionsRenderer
                options={{
                  suppressMarkers: true,
                  polylineOptions: { strokeColor: 'red' },
                }}
                directions={directionResponse}
              />
            )}

            {directionResponse1 && (
              <DirectionsRenderer
                directions={directionResponse1}
                options={{
                  suppressMarkers: true,
                  polylineOptions: { strokeColor: 'blue' },
                }}
              />
            )}
            {directionResponse2 && (
              <DirectionsRenderer
                directions={directionResponse2}
                options={{
                  suppressMarkers: true,
                  polylineOptions: { strokeColor: 'green' },
                }}
              />
            )}
            {directionResponse3 && (
              <DirectionsRenderer
                directions={directionResponse3}
                options={{
                  suppressMarkers: true,
                  polylineOptions: { strokeColor: 'white' },
                }}
              />
            )}
          </GoogleMap>
        )}
      </ContentWrapper>
    </Content>
  );
};
DashBoard.propTypes = {};
export default DashBoard;
