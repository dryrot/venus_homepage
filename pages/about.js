import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import styled from "styled-components";

const About = () => {
  const Section = styled.div`
    width: 100%;
    display: inline-block;
    align-items: baseline;
    justify-content: center;
    background-color: ${(props) => props.theme.lightBeige};
    padding: 60px 0;

    // &:first-child {
    //   background-color: ${(props) => props.theme.lightBeige};
    // }
    //
    // &:nth-child(2) {
    //   background-color: ${(props) => props.theme.lightBeige};
    //   padding: 0px 0px 200px 0px;
    // }
    //
    &:last-child {
      padding: 130px 0px 400px 0px;
    }
  `;

  const ContentsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Contents = styled.div`
    width: calc(100% - 500px);
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
  `;

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
        if (props.image2) {
          return "width: 600px;";
        }

        if (props.image3) {
          return "width: 400px";
        }

        if (props.image4) {
          return "width: 500px;";
        }

        if (props.size !== undefined) {
          return `width: ${props.size};`;
        }
      }}
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
        console.log(props.size);
        return `width: ${props.size};`;
      }
    }}
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
    }

    ${(props) => {
      if (props.discography) {
        return `border-left: 1px solid ${props.theme.darkSpace}; padding-left: 30px; font-size: ${props.theme.fontSize.default};`;
      }

      if (props.bigger) {
        return `margin-top: 180px; ul:first-child { font-size: ${props.theme.fontSize.semiBold}; }`;
      }
    }}
  `;

  return (
    <>
      <Head>
        <title>원장 인사말 | Venuss</title>
      </Head>
      <AppLayout>
        <div>
          <Section>
            <ContentsBox>
              <Contents>
                <TextBox size="700px">
                  <Text bigger>
                    <ul className="_bold">
                      <li>
                        저는 앞니만 치료하는 고도로 특화된 치과의사입니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section>
            <ContentsBox>
              <Contents>
                <ImageBox vertical size="800px">
                  <img src="/image/about_5.png" />
                </ImageBox>
              </Contents>
            </ContentsBox>
            <ContentsBox>
              <Contents>
                <TextBox horizontal>
                  <Text bigger>
                    <ul className="_bold">
                      <li>
                        저는 지나 온 긴 임상기간동안 앞니의 문제로 고통받는 많은
                        환자들을 맞이하였습니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section>
            <ContentsBox>
              <Contents>
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
              </Contents>
            </ContentsBox>
          </Section>
          <Section>
            <ContentsBox>
              <Contents>
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
              </Contents>
            </ContentsBox>
          </Section>

          <Section>
            <ContentsBox>
              <Contents>
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
              </Contents>
            </ContentsBox>
          </Section>

          {/* <Section> */}
          {/*  <ContentsBox> */}
          {/*    <Contents> */}
          {/*      /!*<ImageBox size="700px">*!/ */}
          {/*      /!*  <img src="/image/about_0.jpg" />*!/ */}
          {/*      /!*</ImageBox>*!/ */}
          {/*      <TextBox horizonta size="700px"> */}
          {/*        <Text bigger> */}
          {/*          <ul className="_bold"> */}
          {/*            <li> */}
          {/*              저는 앞니만 치료하는 고도로 특화된 치과의사입니다. */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*          <ul> */}
          {/*            <li> */}
          {/*              저는 지나 온 긴 임상기간동안 앞니의 문제로 고통받는 많은 */}
          {/*              환자들을 맞이하였습니다. */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*          <ul> */}
          {/*            <li> */}
          {/*              그들의 대부분은 치료를 반복할수록 문제가 해결되지 않고 */}
          {/*              더욱 절망하였던 분들이었습니다. */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*        </Text> */}
          {/*      </TextBox> */}
          {/*    </Contents> */}
          {/*  </ContentsBox> */}
          {/* </Section> */}

          {/* <Section> */}
          {/*  <ContentsBox> */}
          {/*    <Contents> */}
          {/*      /!*<ImageBox image2>*!/ */}
          {/*      /!*  <img src="/image/about_2.jpg" />*!/ */}
          {/*      /!*</ImageBox>*!/ */}
          {/*      <TextBox vertical> */}
          {/*        <Text> */}
          {/*          <ul> */}
          {/*            <li> */}
          {/*              저도 충분히 이해하다시피, 비너스에 오는 환자분들은 그런 */}
          {/*              세월을 너무 오래 겪은 나머지 마지막 순간까지 불안합니다. */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*          <ul> */}
          {/*            <li> */}
          {/*              오로지 저 하나만을 믿고 버텨야만 하는 치료의 시간들. 이 */}
          {/*              의사가 나의 아픔을 해결해 줄 사람인가? */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*          <ul> */}
          {/*            <li>또다시 망치지는 않을까?</li> */}
          {/*          </ul> */}
          {/*          <ul> */}
          {/*            <li> */}
          {/*              결국은 스스로의 몸으로 겪는 터널을 통과해야만 알 수 있는 */}
          {/*              최종 결과를 불안해하는 환자의 마음을 저는 알고 있습니다. */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*        </Text> */}
          {/*      </TextBox> */}
          {/*    </Contents> */}
          {/*  </ContentsBox> */}
          {/* </Section> */}
          {/* <Section> */}
          {/*  <ContentsBox> */}
          {/*    <Contents> */}
          {/*      <TextBox vertical> */}
          {/*        <Text> */}
          {/*          <ul> */}
          {/*            <li> */}
          {/*              환자의 마음 속 어딘가에 있다고 하는 전설 속의 앞니를 */}
          {/*              구현해내는 것은, */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*          <ul> */}
          {/*            <li> */}
          {/*              깊은 호수 바닥 어딘가에 꽂혀 있다고 하는 전설의 명검을 */}
          {/*              뽑아내는 것과 같은 일이기는 하지만, */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*          <ul> */}
          {/*            <li> */}
          {/*              저는 늘 호수에 몸을 던지고 결국 오랜 시간 동안의 */}
          {/*              불만족과 우울에서 환자를 구해냅니다. */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*          <ul> */}
          {/*            <li> */}
          {/*              환자는 치료를 시작하면서 저에게 입학하고 치료를 끝내면서 */}
          {/*              저를 졸업합니다. */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*        </Text> */}
          {/*      </TextBox> */}
          {/*      /!*<ImageBox image3>*!/ */}
          {/*      /!*  <img src="/image/about_3.jpg" />*!/ */}
          {/*      /!*</ImageBox>*!/ */}
          {/*    </Contents> */}
          {/*  </ContentsBox> */}
          {/* </Section> */}
          {/* /!*<Section>*!/ */}
          {/* /!*  <ContentsBox>*!/ */}
          {/* /!*    <Contents>*!/ */}
          {/* /!*      <ImageBox vertical image4>*!/ */}
          {/* /!*        <img src="/image/about_4.jpg" />*!/ */}
          {/* /!*      </ImageBox>*!/ */}
          {/* /!*    </Contents>*!/ */}
          {/* /!*  </ContentsBox>*!/ */}
          {/* /!*</Section>*!/ */}
          {/* <Section> */}
          {/*  <ContentsBox> */}
          {/*    <Contents> */}
          {/*      <TextBox horizontal> */}
          {/*        <Text> */}
          {/*          <ul> */}
          {/*            <li>환자 여러분!</li> */}
          {/*          </ul> */}
          {/*          <ul> */}
          {/*            <li> */}
          {/*              꽉 붙잡고 포기하지 않으면 반드시 자신보다 더 지독하게 */}
          {/*              노력하는 누군가를 만나 원하던 바를 얻으며 결국 행복해질 */}
          {/*              것입니다. */}
          {/*            </li> */}
          {/*          </ul> */}
          {/*          <ul className="_bold"> */}
          {/*            <li>힘을 내세요! 제가 바로 그 지독한 ‘누군가’입니다.</li> */}
          {/*          </ul> */}
          {/*        </Text> */}
          {/*      </TextBox> */}
          {/*    </Contents> */}
          {/*  </ContentsBox> */}
          {/* </Section> */}
          {/* <Section> */}
          {/*  <ContentsBox> */}
          {/*    <Contents discography> */}
          {/*      /!*<ImageBox discography>*!/ */}
          {/*      /!*  <img src="/image/about_5.png" />*!/ */}
          {/*      /!*</ImageBox>*!/ */}
          {/*      <TextBox discography> */}
          {/*        <Text discography> */}
          {/*          <ul className="_bold"> */}
          {/*            <li>약력</li> */}
          {/*          </ul> */}
          {/*          <ul> */}
          {/*            <li>1992년 경희대학교 치과대학 졸업</li> */}
          {/*            <li>2004년 경희대학교 치의학 박사</li> */}
          {/*            <li>경희대학교 외래 교수</li> */}
          {/*            <li>대한 심미치과학회 정회원</li> */}
          {/*          </ul> */}
          {/*          <Text discography> */}
          {/*            <ul className="_bold"> */}
          {/*              <li>저서</li> */}
          {/*            </ul> */}
          {/*            <ul> */}
          {/*              <li>웃지 않는 미녀(2004)</li> */}
          {/*            </ul> */}
          {/*          </Text> */}
          {/*          <Text discography> */}
          {/*            <ul className="_bold"> */}
          {/*              <li>기고</li> */}
          {/*            </ul> */}
          {/*            <ul> */}
          {/*              <li>월간 치과계 (2007~2009) 30회 기고</li> */}
          {/*              <li>월간 퀸테센스 (2009, 2013, 2020년) 32회 기고</li> */}
          {/*              <li>주간 덴탈 아리랑(2020) 15회 기고</li> */}
          {/*            </ul> */}
          {/*          </Text> */}
          {/*        </Text> */}
          {/*      </TextBox> */}
          {/*    </Contents> */}
          {/*  </ContentsBox> */}
          {/* </Section> */}
        </div>
      </AppLayout>
    </>
  );
};

export default About;
