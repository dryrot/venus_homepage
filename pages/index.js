import React, { useEffect } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import VenusTitle from "../components/VenusTitle";
import Map2 from "../components/Map_v2";
import ReviewPreview from "../components/ReviewPreview";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const Section = styled.div`
    width: 100%;
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

    ${({ theme }) => theme.mobile`
        padding: ${(props) => props.padding};
    `}
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

    &.diff {
      ${({ theme }) => theme.mobile`
        display: none;
    `}
    }
  `;

  const Contents = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    width: calc(100% - 500px);
    //height: 620px;
    height: calc(100vh - 240px);

    &.imageBox {
      overflow: hidden;
      box-shadow: -1px 1px 4px #51515157;
      height: calc(100vh - 265px);
    }

    ${({ theme }) => theme.desktop`
        width: calc(100vw - 2000px);
        height: auto;
    `}

    ${({ theme }) => theme.mobile`
        width: 100%;
        // height: calc(100vh - 365px);
    `}
    
    &.m_img1 {
      justify-content: center;
    }
    &.m_img2 {
      justify-content: left;
    }
    &.m_img3 {
      justify-content: right;
    }
    &.m_img4 {
      justify-content: center;
    }
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
    ${({ theme }) => theme.mobile`
        font-size: ${theme.mFontSize.default};
        height: 100px;
    `}
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

  const MobileBox = styled.div`
    display: none;
    ${Contents} {
      ${({ theme }) => theme.mobile`
        width: 100%;
        height: 100%;
        overflow: hidden;
      `}
    }

    ${({ theme }) => theme.mobile`
      display: block;
      height: 100%;
      position: relative;
    `}
  `;

  const MImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 500px;
    text-align: center;
    overflow: hidden;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    img {
      height: 500px;
      margin: 0 -100%;
    }
    span {
      position: sticky;
      bottom: 50%;
      //right: 50%;
      left: 0;
      color: #fff;
      font-size: ${(props) => props.theme.mFontSize.bold};
      text-shadow: 1px 1px 2px #0000005e;
    }
    background-image: url(${(props) => props.imgSrc});
    margin: 30px 0px;
  `;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <Head>
        <title>초기화면 | Venuss</title>
        <meta
          content="initial-scale=1, maximum-scale=1, user-scalable=0"
          name="viewport"
        />
      </Head>
      <AppLayout>
        <div>
          <Section>
            <Title>자연스럽게 아름다워지는 치과, 비너스</Title>
            <ContentsBox violet>
              <Contents className="imageBox">
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
          <Section padding="30px 0px 0px 0px">
            <VenusTitle text="치료 분야" underline={true} />
            <ContentsBox className="diff">
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

            <MobileBox>
              <Contents className="m_img1">
                <MImgBox
                  imgSrc="/image/home_profession_5.jpg"
                  data-aos="fade-right"
                >
                  {/* <img src="/image/about_1.jpg" /> */}
                  <span>앞니 심미보철</span>
                </MImgBox>
              </Contents>
            </MobileBox>
            <MobileBox>
              <Contents className="m_img2">
                <MImgBox imgSrc="/image/home_profession_2.jpg" data-aos="fade-left">
                  {/* <img src="/image/home_profession_2.jpg" /> */}
                  <span>앞니 잇몸치료</span>
                </MImgBox>
              </Contents>
            </MobileBox>
            <MobileBox>
              <Contents className="m_img3">
                <MImgBox imgSrc="/image/home_profession_3.jpg" data-aos="fade-right">
                  {/* <img src="/image/home_profession_3.jpg" /> */}
                  <span>임플란트</span>
                </MImgBox>
              </Contents>
            </MobileBox>
            <MobileBox>
              <Contents className="m_img4">
                <MImgBox imgSrc="/image/home_profession_4.jpg" data-aos="fade-left">
                  {/* <img src="/image/home_profession_4.jpg" /> */}
                  <span>앞니교정</span>
                </MImgBox>
              </Contents>
            </MobileBox>
          </Section>

          {/* End of Section2 */}

          <Section padding="30px 0px 0px 0px">
            <VenusTitle text="후기" underline={true} />
            {/* <Section beige> */}
            <ContentsBox>
              <Contents>
                <ReviewPreview />
              </Contents>
            </ContentsBox>
            {/* </Section> */}
          </Section>
          <Section padding="30px 0px 0px 0px" beige>
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
