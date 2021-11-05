/* global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const MobileIndex = () => {
  const MobileIndexBox = styled.div`
    display: none;
    overflow: hidden;
    ${({ theme }) => theme.mobile`
   display: block;
    `}
  `;

  const InitSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.lightBeige};
    padding-left: 5px;
  `;

  const TextBox = styled.div`
    display: inline-block;
    align-items: baseline;
    justify-content: center;
    color: ${(props) => props.theme.darkSpace};
    //color: #707070;
  `;

  const TextLi = styled.div`
    font-size: ${(props) => props.theme.mFontSize.index};
    em._em1 {
      font-style: normal;
      font-weight: 700;
    }
    em._em2 {
      font-style: normal;
      font-weight: 600;
    }
  `;

  const ArrowBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
  `;

  const Arrow = styled.div`
    width: 60px;
    height: 100px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='레이어_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 283.5 481.9' style='enable-background:new 0 0 283.5 481.9;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%234A4E69;%7D%0A%3C/style%3E%3Cpath class='st0' d='M157.3,393c12.8-14.4,25.5-28.9,38.3-43.3c19.4-22,38.8-44,58.3-65.9c1.4-1.6,3-3.4,4.9-4.1 c3.7-1.5,7.4-0.8,9.8,2.7c2.5,3.6,2.2,7.3-0.7,10.6c-9.1,10.4-18.3,20.8-27.4,31.1c-36.3,41.1-72.6,82.2-108.8,123.3 c-2.8,3.2-4.4,7.5-7.1,10.7c-2.1,2.5-4.8,4.7-7.7,6.2c-2.9,1.5-6.3,2-9.6,2.6c-5.1,1.1-8-1.7-10.3-5.9c-12-22.1-24.1-44.1-36.2-66.2 c-13.8-25.1-27.5-50.2-41.3-75.3c-4.3-7.8-4.1-9.4,1.7-16c-1.9-3.6-3.8-7.2-5.7-10.9c-2.8-5.6-1.9-10.2,2.4-12.6 c4.5-2.5,9.3-0.7,12.2,4.9c18.6,35.4,37.1,70.7,55.7,106.1c0.7,1.4,1.5,2.8,3.3,4.1c0.3-5.2,0.7-10.4,0.7-15.7 c1-78.6,2.1-157.3,2.9-235.9c0.4-38.5,0.5-77,0.7-115.5c0-1.3,0-2.7,0.1-4c0.3-5.2,3.3-8.5,7.8-8.7c4.4-0.2,7.6,2.4,8.6,7.4 c2.4,12.9,5,25.8,6.8,38.8c1.1,7.7,1.6,15.5,1.3,23.3c-1.6,46-3.5,91.9-5.3,137.9c-0.2,6.2-0.6,12.3-0.1,18.5 c1.7-14.1,3.5-28.3,5.2-42.4c4.2-35.2,8.4-70.4,12.7-105.6c1.1-8.9,2.3-17.8,3.2-26.8c0.4-4.1,1.4-7.5,5.5-9.3 c4.3-1.8,7.4,0.3,10.8,3.5c0.7-2,1.3-3.6,1.8-5.3c2.9-9.4,5.8-18.8,8.8-28.1c1.9-5.9,5.9-8.3,10.8-6.8c4.7,1.4,6.6,6,4.8,11.9 c-1.7,5.7-3.3,11.5-5.4,17.1c-7.2,19.2-9,39.5-12,59.6c-6.3,41.5-12.7,82.9-18.3,124.5c-3.2,23.6-5.5,47.3-7.6,71 c-2.3,26.4-4,52.8-5.9,79.2c-0.1,1.7,0,3.5,0,6.7c1.2-2.3,1.8-3.5,2.3-4.6c13.1-29.1,26.2-58.3,39.3-87.4c0.8-1.9,2.3-3.8,3.9-4.9 c6.5-4.6,13.4-8.8,19.9-13.3c3.9-2.7,7.7-4,11.9-0.7c3.4,2.7,3.8,6.7,1.1,12.2c-15.6,32.2-31.3,64.4-46.9,96.5 c-0.7,1.4-1.3,2.9-2,4.4C156.8,392.7,157,392.9,157.3,393z'/%3E%3C/svg%3E%0A");
  `;

  const TitleBox = styled.div`
    //width: auto;
    display: inline-block;
    float: ${(props) => props.float};

    ${(props) => {
      if (props.float === "center") {
        return "display: flex; align-items: center; justify-content: center;";
      }
    }}
  `;

  const Title = styled.div`
    font-size: ${(props) => props.theme.mFontSize.indexTitle};
    padding: 0px 30px 5px 10px;
    margin: 20px 10px 20px 0px;
    color: ${(props) => props.theme.darkSpace};
    border-bottom: 1px solid ${(props) => props.theme.darkSpace};
    ${(props) => {
      console.log(props.float);
      if (props.dark) {
        return `color: ${props.theme.lightBeige}; border-bottom: 1px solid ${props.theme.lightBeige}`;
      }

      if (props.float === "center") {
        return "padding: 5px 20px;";
      }
    }};
  `;

  const ImageSection = styled.div``;

  const ImageBox = styled.div`
    float: ${(props) => props.float};
    width: 90%;
    height: 150px;
    //border: 1px solid red;

    ${(props) => {
      if (props.float === "center") {
        return "float: left; width: 100%";
      }
    }}
  `;

  const Image = styled.div`
    background-image: url(${(props) => props.imgSrc});
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  `;

  const ReviewSection = styled.div`
    display: inline-block;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 100px;
    background-color: ${(props) => props.theme.lightBeige};
  `;

  const ReviewBox = styled.div`
    //position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `;

  const ReviewFrame = styled.div`
    position: absolute;
    border: 7px solid white;
    width: calc(100% - 120px);
    height: 300px;
    margin: 0% 7%;
    margin-top: 35px;
    opacity: 0.8;
    z-index: 1;
  `;

  const ReviewListBox = styled.div`
    width: 100%;
    padding-top: 40px;
    margin: 0% 7%;
    z-index: 2;
  `;

  const ReviewList = styled.div`
    width: 100%;
    margin-bottom: 10px;
  `;

  const InfoSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  `;

  const InfoBox = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
    background-color: ${(props) => props.theme.darkSpace};
  `;

  const MapBox = styled.div`
    //width: 500px;
    //height: 500px;

    #map_container_mobile {
      width: 100%;
      height: 350px;
      margin-top: 10px;
    }
  `;

  const InfoList = styled.div`
    color: ${(props) => props.theme.lightBeige};
  `;

  const InfoUl = styled.ul`
    list-style: none;
    ${(props) => {
      if (props.title) {
        return `font-size: ${props.theme.mFontSize.semiBold};`;
      } else if (props.bold) {
        return `font-size: ${props.theme.mFontSize.bold}; font-weight: 600;`;
      } else {
        return `font-size: ${props.theme.mFontSize.default};`;
      }
    }}
  `;

  const InfoLine = styled.div`
    width: 50%;
    height: 1px;
    background-color: ${(props) => props.theme.lightBeige};
    margin-left: 42px;
  `;

  useEffect(() => {
    // const mapCenter = new kakao.maps.LatLng(
    //   37.525111197891455,
    //   127.02800845792338
    // );
    //
    // const clinicCoor = new kakao.maps.LatLng(
    //   37.524060723212266,
    //   127.02799512416581
    // );
    // const mapContainer = document.getElementById("map_container_mobile");
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
    // const map = new kakao.maps.StaticMap(mapContainer, mapOptions);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <MobileIndexBox>
      <InitSection>
        <TextBox
          className="fade-in-box"
          data-aos="fade-down"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <TextLi>
            <em className="_em2">자연</em>
          </TextLi>
          <TextLi>스럽게</TextLi>
          <TextLi>
            <em className="_em1">아름다워</em>지는
          </TextLi>
          <TextLi>
            <em className="_em2">치과</em>
          </TextLi>
          <ArrowBox>
            <Arrow />
          </ArrowBox>
        </TextBox>
      </InitSection>
      <ImageSection>
        <Link href="/simmi">
          <TitleBox float="left" data-aos="fade-right">
            <Title>앞니 심미보철</Title>
          </TitleBox>
        </Link>
        <Link href="/simmi">
          <ImageBox float="right" data-aos="fade-left">
            <Image imgSrc="/image/profession_2.jpg" />
          </ImageBox>
        </Link>

        <Link href="/itmom">
          <TitleBox float="right" data-aos="fade-left">
            <Title>앞니 잇몸치료</Title>
          </TitleBox>
        </Link>
        <Link href="/itmom">
          <ImageBox float="left" data-aos="fade-right">
            <Image imgSrc="/image/profession_4.jpg" />
          </ImageBox>
        </Link>

        <Link href="/implant">
          <TitleBox float="left" data-aos="fade-right">
            <Title>임플란트</Title>
          </TitleBox>
        </Link>
        <Link href="/implant">
          <ImageBox float="center" data-aos="fade-right">
            <Image imgSrc="/image/profession_1.jpg" />
          </ImageBox>
        </Link>

        <Link href="/gyojung">
          <TitleBox float="right" data-aos="fade-left">
            <Title>앞니 교정</Title>
          </TitleBox>
        </Link>
        <Link href="/gyojung">
          <ImageBox float="left" data-aos="fade-right">
            <Image imgSrc="/image/profession_3.jpg" />
          </ImageBox>
        </Link>
      </ImageSection>
      <ReviewSection>
        <TitleBox float="center">
          <Title float="center">치료 후기</Title>
        </TitleBox>

        <ReviewBox>
          <ReviewFrame />
          <ReviewListBox>
            <ReviewList>너무 떨렸는데 자고 일어나니 다 끝나있었어요</ReviewList>
            <ReviewList>강력 추천합니다!</ReviewList>
            <ReviewList>너무 감사하고 좋았습니다.</ReviewList>
            <ReviewList>두려움없이 편히 치료를 받을 수 있었어요</ReviewList>
            <ReviewList>원장님 믿고있었다구 </ReviewList>
          </ReviewListBox>
        </ReviewBox>
      </ReviewSection>
      <InfoSection>
        <InfoBox>
          <TitleBox float="right">
            <Title dark>오시는 길</Title>
          </TitleBox>
          <MapBox>
            <script
              type="text/javascript"
              src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cc7bff6a5ee2158886afc9a17f94239d"
            />
            <div id="map_container_mobile" />
          </MapBox>
          <InfoList>
            <InfoUl title>
              <li>주소</li>
            </InfoUl>
            <InfoUl>
              <li>
                강남구 논현로 841, JB미소빌딩 B105호, 비너스치과 (압구정역
                4번출구)
              </li>
            </InfoUl>

            <InfoLine />

            <InfoUl title>
              <li>진료시간</li>
            </InfoUl>
            <InfoUl>
              <li>평일 오전 10:30 - 오후 06:00</li>
              <li>토요일 오전 10:30 - 오후 02:00</li>
              <li>목요일 / 일요일 / 공휴일 휴무</li>
            </InfoUl>

            <InfoLine />

            <InfoUl title>
              <li>문의전화</li>
            </InfoUl>
            <InfoUl bold>
              <li>02-3445-9716</li>
            </InfoUl>
          </InfoList>
        </InfoBox>
      </InfoSection>
    </MobileIndexBox>
  );
};

export default MobileIndex;
