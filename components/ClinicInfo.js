import React, { useEffect } from "react";
import styled from "styled-components";

const ClinicInfo = (props) => {
  const InfoBox = styled.div`
    width: 100%;
    height: 100%;
    //border: 1px solid red;
  `;

  const ImgBox = styled.div`
    //    display: flex;
    //align-items: center;
    //justify-content: center;
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    background-size: cover;
    background-image: url("image/info_image.JPG");
    background-position: center;
    //img {
    //width: 100%;
    //height: 100%;
    //}
  `;

  const AddressBox = styled.div``;

  const AdressList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    // padding-bottom: 15px;
    // margin-bottom: 15px;
    //border-bottom: 1px solid #fff;
    //box-shadow: 0px 1px 1px #00000017;

    &:last-child {
      padding-top: 5px;
      font-size: ${(props) => props.theme.fontSize.default}
      //font-weight: 400;
      border-bottom: 0;
      box-shadow: none;
    }
  `;
  return (
    <InfoBox>
      <ImgBox>
        <AddressBox>
          <AdressList>
            강남구 논현로 841, JB미소빌딩 B105호, 비너스치과
            <div className="l3_icon">3</div>
            압구정역 4번출구
            <br />
          </AdressList>
          <AdressList>
            평일 AM 10:30 - PM 06:00
            <br />
            토요일 AM 10:30 - PM 02:00
            <br />
            목요일 / 공휴일 / 일요일 휴무
          </AdressList>
          <AdressList>02-3445-9716</AdressList>
        </AddressBox>
      </ImgBox>
    </InfoBox>
  );
};

export default ClinicInfo;
