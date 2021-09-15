import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import VenusTitle from "../components/VenusTitle";
import Map2 from "../components/Map_v2";
import ReviewPreview from "../components/ReviewPreview";
import MediaPreview from "../components/MediaPreview";
import ClinicInfo from "../components/ClinicInfo";

export default function Home() {
  const Section = styled.div`
    width: 100%;
    //height: 950px;
    display: inline-block;
    align-items: baseline;
    justify-content: center;
    padding-bottom: 90px;
    background-color: #fff;
    &:nth-child(odd) {
      background-color: ${(props) => props.theme.lightBeige};
    }

    &:last-child {
      padding-bottom: 100px;
    }

    ${(props) => {
      if (props.beige) {
        return `background-color: ${props.theme.lightBeige};`;
      }
    }}
  `;

  const ContentsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-shrink: 0;

    ${(props) => {
      if (props.violet) {
        return `background-color: ${props.theme.darkSpace};`;
      }
    }}
  `;

  const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    width: calc(100% - 500px);
    //height: 620px;
    height: calc(100vh - 240px);
    ${(props) => {
      if (props.imageBox) {
        return (
          "overflow: hidden;" +
          "box-shadow: -1px 1px 4px #51515157; " +
          "height: calc(100vh - 280px); "
        );
      }
    }}
  `;

  const TitleBox = styled.div`
    position: absolute;
    left: 0;
    top: 530px;
    display: block;
    width: 500px;
    height: 350px;
    background-color: ${(props) => props.theme.darkSpace};
    //border-radius: 0px 10px 10px 0px;
    font-size: ${(props) => props.theme.fontSize.default};
    padding: 0px 150px;
    box-shadow: ${(props) => props.theme.boxShadow};
  `;

  const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    font-weight: 600;
    font-size: 30px;
  `;

  const ImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 100%;
    box-sizing: border-box;
    margin-right: 30px;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    img {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      overflow: hidden;
      box-shadow: ${(props) => props.theme.boxShadow};
    }

    span {
      position: absolute;
      font-weight: 400;
      color: #fff;
      font-size: ${(props) => props.theme.fontSize.semiBold};
      text-shadow: 1px 1px 2px #0000005e;
    }
  `;

  return (
    <>
      <Head>
        <title>초기화면 | Venuss</title>
      </Head>
      <AppLayout>
        <div>
          <Section>
            <Title>자연스럽게 아름다워지는 치과, 비너스</Title>
            <ContentsBox violet>
              <Contents imageBox>
                <img
                  src="/image/main_image.jpg"
                  width="100%"
                  height="auto"
                  alt=""
                />
              </Contents>
            </ContentsBox>
          </Section>
          {/* End of Section1 */}
          <Section>
            <VenusTitle text="치료 분야" underline={true} />
            <ContentsBox>
              <Contents>
                <ImgBox>
                  <img src="/image/home_profession_1.jpg" />
                  <span>앞니 심미보철</span>
                </ImgBox>
                <ImgBox>
                  <img src="/image/home_profession_2.jpg" />
                  <span>앞니 잇몸치료</span>
                </ImgBox>
                <ImgBox>
                  <img src="/image/home_profession_3.jpg" />
                  <span>임플란트</span>
                </ImgBox>
                <ImgBox>
                  <img src="/image/home_profession_4.jpg" />
                  <span>앞니교정</span>
                </ImgBox>
              </Contents>
            </ContentsBox>
          </Section>
          {/* End of Section2 */}

          <Section>
            <VenusTitle text="후기" underline={true} />
            {/* <Section beige> */}
            <ContentsBox>
              <Contents>
                <ReviewPreview />
              </Contents>
            </ContentsBox>
            {/* </Section> */}
          </Section>
          <Section>
            <ContentsBox violet>
              <Contents>
                <Map2 />
                {/* <ClinicInfo /> */}
              </Contents>
            </ContentsBox>
          </Section>
        </div>
      </AppLayout>
    </>
  );
}
