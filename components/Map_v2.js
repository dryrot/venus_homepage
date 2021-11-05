import React, { useEffect } from "react";
import styled from "styled-components";

const Map2 = (props) => {
  const MapBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-right: 12px;
    //border-radius: 5px;

    box-shadow: 0px 1px 2px #00000030;
    #map_container {
      //width: 100%;
      ////height: 400px;
      //    height: 60%;

      width: 50%;
      height: 100%;

      border-bottom: 1px solid #ddd;
    }

    ._desktop {
      ${({ theme }) => theme.mobile`
        display: none;
    `}
    }

    ._mobile {
      display: none;
      ${({ theme }) => theme.mobile`
        display: block;
    `}
    }
  `;

  const AddressBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #c9ada7;
    height: 100%;
    box-sizing: border-box;
    padding: 30px 50px;

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

    ${({ theme }) => theme.mobile`
       padding: 18px;
       & div:first-child {
        margin-top: 0;
       }
    `}
  `;

  const AddressList = styled.div`
     width: 100%;
      color: ${(props) => props.theme.darkestSpace};
      font-size: ${(props) => props.theme.fontSize.default};
      margin: 20px 0px;
    &:last-child {
      padding-top: 5px;
      font-size: ${(props) => props.theme.fontSize.default}
      //font-weight: 400;
      border-bottom: 0;
      box-shadow: none;
    }
    
    em {
      font-style: normal;
      font-weight: 600;
    }
    
    ${(props) => {
      if (props.phone) {
        return `font-size: ${props.theme.fontSize.semiBold}; font-weight: 600;`;
      }
    }}
     ${({ theme }) => theme.mobile`
        margin: 5px 0px;
        font-size: ${theme.mFontSize.reviewSmall};
            word-break: keep-all;
    `}
  `;

  const AddressTitle = styled.div`
    font-size: ${(props) => props.theme.fontSize.semiBold};
    color: ${(props) => props.theme.darkestSpace};
    //border-bottom: 1px solid;

    ${({ theme }) => theme.mobile`
        font-size: ${theme.mFontSize.review};
        font-weight: 600;
        margin-top: 15px;
        
    `}
  `;

  useEffect(() => {

    // const mapCenter = new window.kakao.maps.LatLng(
    //   37.525111197891455,
    //   127.02800845792338
    // );
    //
    // const clinicCoor = new window.kakao.maps.LatLng(
    //   37.524060723212266,
    //   127.02799512416581
    // );
    // const mapContainer = document.getElementById("map_container");
    // const markers = [
    //   {
    //     position: clinicCoor,
    //     text: "비너스 치과",
    //   },
    // ];
    // const mapOptions = {
    //   center: mapCenter,
    //   level: 3,
    //   marker: markers,
    // };
    // const map = new window.kakao.maps.StaticMap(mapContainer, mapOptions);
  }, []);

  return (
    <>
      <MapBox>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cc7bff6a5ee2158886afc9a17f94239d?autoload=false"
        />
        <div id="map_container" />
        <AddressBox>
          <div>
            <AddressTitle>주소</AddressTitle>
            <AddressList>
              강남구 논현로 841, JB미소빌딩 B105호, 비너스치과 (압구정역{" "}
              <em>4번</em>출구)
              <br />
            </AddressList>
            <AddressTitle>진료시간</AddressTitle>
            <AddressList>
              평일 <em>오전 10:30 - 오후 06:00</em>
              <br />
              토요일 오전 <em>10:30 - 오후 02:00</em>
              <br />
              목요일 / 일요일 / 공휴일 휴무
            </AddressList>
            <AddressTitle>문의전화</AddressTitle>
            <AddressList phone>02-3445-9716</AddressList>
          </div>
        </AddressBox>
      </MapBox>
    </>
  );
};

export default Map2;
