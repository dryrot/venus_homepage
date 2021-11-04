import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import styled from "styled-components";
import { VDiv, Section } from "../components/VDiv";

const Part = styled.div`
  ${Section}:first-child {
    ${({ theme }) => theme.mobile`
      height: 100%;                   
    `}
  }
  ${Section}:last-child {
    padding-bottom: 200px;
    ${({ theme }) => theme.mobile`
      padding-bottom: 100px;
      padding-top: 100px !important;                   
    `}
  }
`;

const About = () => {
  const ImageBox = styled.div`
    width: 100%;
    ${(props) => {
      if (props.vertical) {
        return (
          "display: flex;\n" +
          "    align-items: center;\n" +
          "    justify-content: center;"
        );
      }
    }}

    img {
      ${(props) => {
        if (props.image4) {
          return "width: 500px;";
        }

        if (props.size !== undefined) {
          return `width: ${props.size};`;
        }
      }}

      ${({ theme }) => theme.mobile`
        width: calc(100vw + 200px);
    `}
    }
  `;

  const TextBox = styled.div`
    width: 100%;
    ${(props) => {
      if (props.vertical) {
        return `padding: 90px;`;
      }
      if (props.horizontal) {
        return `width: 600px;`;
      }
      if (props.size !== undefined) {
        return `width: ${props.size};`;
      }
    }}

    ${({ theme }) => theme.mobile`
     width: calc(100% - 50px);
  `}
  `;

  const Text = styled.div`
    display: block;
    font-size: ${(props) => props.theme.fontSize.default};
    word-break: keep-all;
    ul {
      width: 100%;
      list-style: none;
      padding-left: 0;
      padding-bottom: 10px;
    }
    ._bold {
      font-weight: 600;
    }

    li {
      width: 100%;
      ${(props) => {
        if (props.discography) {
          return "line-height: 1.5;";
        }
      }}

      ${({ theme }) => theme.mobile`
     margin-bottom: 10px;
    
  `}
    }

    ${(props) => {
      if (props.discography) {
        return `border-left: 1px solid ${props.theme.darkSpace}; padding-left: 30px; font-size: ${props.theme.fontSize.default};`;
      }

      if (props.bigger) {
        return `margin-top: 180px; ul:first-child { font-size: ${props.theme.fontSize.semiBold}; }`;
      }
    }}

    ${({ theme }) => theme.mobile`
        word-break: normal;
     font-size: ${theme.mFontSize.default};
     ul._m { font-size: ${theme.mFontSize.bold} };
       ${(props) => {
         if (props.bigger) {
           return `margin-top: 0`;
         }
       }}
  `}
  `;

  return (
    <>
      <Head>
        <title>원장 인사말 | Venuss</title>
        <meta
          content="initial-scale=1, maximum-scale=1, user-scalable=0"
          name="viewport"
        />
      </Head>
      <AppLayout>
        <div>
          <Part>
            <VDiv
              element={
                <TextBox size="700px">
                  <Text bigger>
                    <ul className="_bold _m">
                      <li>
                        저는 앞니만 치료하는 고도로 특화된 치과의사입니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="beige"
            />

            <VDiv
              element={
                <ImageBox vertical size="800px">
                  <img
                    src="/image/about_5.png"
                    alt="이미지를 불러올 수 없습니다."
                  />
                </ImageBox>
              }
              color="beige"
              padding="0px"
            />

            <VDiv
              element={
                <TextBox horizontal>
                  <Text bigger>
                    <ul className="_bold _m">
                      <li>
                        저는 지나 온 긴 임상기간동안 앞니의 문제로 고통받는 많은
                        환자들을 맞이하였습니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="beige"
              padding="30px 0px 0px 0px"
            />

            <VDiv
              element={
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        그들의 대부분은 치료를 반복할수록 문제가 해결되지 않고
                        더욱 절망하였던 분들이었습니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        저도 충분히 이해하다시피, 비너스에 오는 환자분들은 그런
                        세월을 너무 오래 겪은 나머지 마지막 순간까지 불안합니다.
                      </li>
                      <li>
                        오로지 저 하나만을 믿고 버텨야만 하는 치료의 시간들. 이
                        의사가 나의 아픔을 해결해 줄 사람인가? 또다시 망치지는
                        않을까?
                      </li>
                    </ul>
                    <ul>
                      <li>
                        결국은 스스로의 몸으로 겪는 터널을 통과해야만 알 수 있는
                        최종 결과를 불안해하는 환자의 마음을 저는 알고 있습니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        환자의 마음 속 어딘가에 있다고 하는 전설 속의 앞니를
                        구현해내는 것은, 깊은 호수 바닥 어딘가에 꽂혀 있다고
                        하는 전설의 명검을 뽑아내는 것과 같은 일이기는 하지만,
                        저는 늘 호수에 몸을 던지고 결국 오랜 시간 동안의
                        불만족과 우울에서 환자를 구해냅니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        환자는 치료를 시작하면서 저에게 입학하고 치료를 끝내면서
                        저를 졸업합니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="beige"
              padding="0px"
            />

            <VDiv
              element={
                <TextBox horizontal>
                  <Text bigger>
                    <ul className="_bold">
                      <li>환자 여러분!</li>
                    </ul>
                    <ul>
                      <li>
                        꽉 붙잡고 포기하지 않으면 반드시 자신보다 더 지독하게
                        노력하는 누군가를 만나 원하던 바를 얻으며 결국 행복해질
                        것입니다.
                      </li>
                    </ul>
                    <ul className="_bold">
                      <li>힘을 내세요! 제가 바로 그 지독한 ‘누군가’입니다.</li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="beige"
              padding="0px"
            />

            <VDiv
              element={
                <TextBox horizontal>
                  <Text discography>
                    <ul className="_bold">
                      <li>약력</li>
                    </ul>
                    <ul>
                      <li>1992년 경희대학교 치과대학 졸업</li>
                      <li>2004년 경희대학교 치의학 박사</li>
                      <li>경희대학교 외래 교수</li>
                      <li>대한 심미치과학회 정회원</li>
                    </ul>
                    <ul className="_bold">
                      <li>저서</li>
                    </ul>
                    <ul>
                      <li>웃지 않는 미녀(2004)</li>
                    </ul>
                    <ul className="_bold">
                      <li>기고</li>
                    </ul>
                    <ul>
                      <li>월간 치과계 (2007~2009) 30회 기고</li>
                      <li>월간 퀸테센스 (2009, 2013, 2020년) 32회 기고</li>
                      <li>주간 덴탈 아리랑(2020) 15회 기고</li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="beige"
            />
          </Part>
        </div>
      </AppLayout>
    </>
  );
};

export default About;
