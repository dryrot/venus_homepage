import React, { useEffect } from "react";
import styled from "styled-components";

const Map = (props) => {
  const MapBox = styled.div`
    width: 50%;
    height: 100%;
    margin-right: 12px;
    //border-radius: 5px;
    box-shadow: 0px 1px 2px #00000030;
    #map_container {
      width: 100%;
      height: 400px;
      border-bottom: 1px solid #ddd;
    }
  `;

  const AdressBox = styled.div`
    width: 100%;
    height: calc(100% - 400px);
    background-color: #f5f2f0;
    //border-radius: 0 0 5px 5px;
    box-sizing: border-box;
    padding: 30px 20px;

    div {
      width: 100%;
      color: ${(props) => props.theme.darkestSpace};
      font-size: ${(props) => props.theme.fontSize.title};
    }

    .l3_icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      margin: -1px 4px 0px 10px;
      padding-top: 2px;
      font-size: 13px;
      text-align: center;
      background-color: #fff;
      border: 2px solid #f57b47;
      font-weight: 400;
      color: #f57b47;
      border-radius: 50%;
    }
  `;

  const AdressList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #fff;
    box-shadow: 0px 1px 1px #00000017;

    &:last-child {
      padding-top: 5px;
      font-size: 20px;
      //font-weight: 400;
      border-bottom: 0;
      box-shadow: none;
    }
  `;

  useEffect(() => {
    const mapCenter = new kakao.maps.LatLng(
      37.525111197891455,
      127.02800845792338
    );

    const clinicCoor = new kakao.maps.LatLng(
      37.524060723212266,
      127.02799512416581
    );
    const mapContainer = document.getElementById("map_container");
    const markers = [
      {
        position: clinicCoor,
        text: "비너스 치과",
      },
    ];
    const mapOptions = {
      center: mapCenter,
      level: 3,
      marker: markers,
    };
    const map = new kakao.maps.StaticMap(mapContainer, mapOptions);
  }, []);

  return (
    <MapBox>
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cc7bff6a5ee2158886afc9a17f94239d"
      />
      <div id="map_container" />
      <AdressBox>
        <AdressList>
          강남구 논현로 841, JB미소빌딩 B105호, 비너스치과{" "}
          <div className="l3_icon">3</div>
          압구정역 4번출구
          <br />
        </AdressList>
        <AdressList>
          평일 AM 10:00 - PM 06:00
          <br />
          수요일 (야간진료) AM 10:00 - PM 08:00
          <br />
          토요일 AM 10:00 - PM 02:00
        </AdressList>
        <AdressList>02-3445-9716</AdressList>
      </AdressBox>
    </MapBox>
  );
};

export default Map;
