import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";

const Gyojung = () => {
  const Section = styled.div`
    width: 100%;
    display: inline-block;
    align-items: baseline;
    justify-content: center;
    padding: 60px 0;
    
       &:last-child {
      padding: 0px 0px 200px 0px;
    }
    
    ${(props) => {
      if (props.beige) {
        return `background-color: ${(props) => props.theme.lightBeige};`;
      }

      if (props.white) {
        return "background-color: #fff;";
      }
    }}
 
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

    ${(props) => {
      if (props.whiteContents) {
        return "background-color: #fff;";
      }
    }}
  `;

  const TextBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${(props) => {
      if (props.vertical) {
        return `padding: 90px;`;
      }
      if (props.horizontal) {
        return `width: 700px;`;
      }

      if (props.whiteText) {
        return "background-color: #fff; margin:0px 45px; padding: 7px 30px;";
      }

      if (props.beigeText) {
        return `background-color: ${props.theme.lightBeige}; margin:0px 45px; padding: 7px 30px;`;
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

    ._list {
      padding: 50px 30px;
      margin: 50px 0px;
      border-top: 1px solid ${(props) => props.theme.middleSpace};
      border-bottom: 1px solid ${(props) => props.theme.middleSpace};

      ul {
        list-style: circle;
      }
    }

    ._ul_underline {
      border-bottom: 1px solid ${(props) => props.theme.darkSpace};
      padding-bottom: 20px;
    }

    ._bold {
      font-weight: 400;
    }
    li {
      width: 100%;
    }

    em {
      font-style: normal;
      font-weight: 600;
    }

    ${(props) => {
      if (props.bigger) {
        return `text-align: center; ul:first-child { font-size: ${props.theme.fontSize.semiBold}; }`;
      }
    }}
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
      width: 600px;
      ${(props) => {
        if (props.size) {
          if (props.size[0] && props.size[1] !== null) {
            return `width: ${props.size[0]}; height: ${props.size[1]};`;
          } else if (props.size[0] !== null && props.size[1] === null) {
            return `width: ${props.size[0]};`;
          } else if (props.size[1] !== null && props.size[0] === null) {
            return `height: ${props.size[1]};`;
          }
        }
      }}
    }

    ._div_vertical img {
      margin: 5px 0px;
    }

    ._div_horizontal {
      display: flex;
      overflow: hidden;
      img {
        margin-right: 5px;
      }
    }

    ._div_grid {
      margin: 5px 0px 5px 0px;
      //display: flex;
      img {
        margin: 0px 5px 50px 5px;
      }
    }
  `;

  const ImageGrid = styled.div`
    ${(props) => {
      if (props.white) {
        return "background-color: #fff;";
      }
      if (props.beige) {
        return `background-color: ${(props) => props.theme.lightBeige};`;
      }
    }}

    ${Section} {
      padding: 0;
      padding-top: 15px;
      //padding-bottom: 60px;
    }

    ${Section}:first-child {
      padding: 0;
      padding-top: 200px;
      //background-color: red;
    }

    ${Section}:last-child {
      padding: 0px;
      padding-bottom: 200px;
    }
  `;

  return (
    <>
      <Head>
        <title>앞니교정 | Venuss</title>
      </Head>
      <AppLayout>
        <div>
          <Section>
            <ContentsBox>
              <Contents>
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        앞니는 크게, <em>교정</em>해야 할 환자와 <em>보철</em>해야 할 환자로
                        나뉘고 이 결정을 잘 하는 것이 중요합니다. 앞니 비극의
                        대부분은 교정할 환자를 보철했을 때 발생합니다.
                      </li>
                      <li>
                        <em>‘그 때 교정을 할 것을!’</em> 이라며 평생 후회합니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section beige>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <img src="/image/gyojung/gyojung_1.jpg" />
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section beige>
            <ContentsBox>
              <Contents beigeContents>
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        교정은 모든 앞니 치료에서 <em>보철보다 우선</em>이 되는
                        치료입니다. 저는 결코 교정 장치가 불편하고 치료의 기간이
                        길다는 단점을 내세우며 교정할 환자에게 보철을 권하지
                        않습니다. 다행스럽게도 요즈음엔 부분 교정도 있고 기간이
                        짧아지기도 했고 장치도 많이 좋아졌습니다.
                      </li>
                    </ul>
                    <div className="_list">
                      <ul>
                        <li>
                          망쳐진 케이스를 살리기 위해 교정이 필요하다면 저는
                          재보철 환자에게도 교정을 권하는 것을 망설이지
                          않습니다.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          저는 또한 안전하고 부작용 없는 교정을 하기 위해
                          노력합니다.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          저는 건강한 자연치아에 대해서 교정만으로 끝내는
                          치료계획을 세웁니다. 교정 후 보철을 추가하는
                          이중치료는 별로 계획하지 않습니다.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          진단만 정확하다면 발치, 비발치, 부분교정을 마다하지
                          않습니다. 각 환자마다 가장 정확한 치료가 정해져 있으며
                          저는 그것을 발견하고 그에 맞는 정확한 치료를 합니다.
                        </li>
                      </ul>
                    </div>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox>
                  <Text bigger>
                    <ul>
                      <li>
                        <em>짧은 교정</em>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        필요한 부분만 단기간에 부분적으로 교정합니다. 가능하다면
                        아랫니만 또는 윗니만 교정합니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/1.jpg" />
                    <img src="/image/gyojung/3.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/2.jpg" />
                    <img src="/image/gyojung/4.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox>
                  <Text bigger>
                    <ul>
                      <li>틈이 있는 앞니들(10개월)</li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <ImageBox vertical size={[null, "350px"]}>
                  <div className="_div_grid">
                    <img src="/image/gyojung/5.jpg" />
                    <img src="/image/gyojung/7.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical size={[null, "350px"]}>
                  <div className="_div_grid">
                    <img src="/image/gyojung/6.jpg" />
                    <img src="/image/gyojung/8.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox>
                  <Text bigger>
                    <ul>
                      <li>아랫니 부분교정 3~6개월</li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/9.jpg" />
                    <img src="/image/gyojung/11.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/10.jpg" />
                    <img src="/image/gyojung/12.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox>
                  <Text bigger>
                    <ul>
                      <li>
                        <em>비발치 교정(10~18개월)</em>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        대부분의 성인 교정은 발치 없이 할 방법을 늘 찾습니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/13.jpg" />
                    <img src="/image/gyojung/15.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/14.jpg" />
                    <img src="/image/gyojung/16.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/17.jpg" />
                    <img src="/image/gyojung/19.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/18.jpg" />
                    <img src="/image/gyojung/20.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_horizontal">
                    <img src="/image/gyojung/21.jpg" />
                    <img src="/image/gyojung/22.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section beige>
            <ContentsBox>
              <Contents>
                <TextBox>
                  <Text bigger>
                    <ul>
                      <li>
                        <em>발치 교정(18~24개월)</em>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        발치 교정은 골격에 문제가 있거나 입이 너무 튀어나왔을
                        때, 발치를 하지 않으면 답이 없을 때 합니다. 무분별한
                        발치 교정을 하지 않는 것도 중요하지만 발치 교정이 필요할
                        때는 발치교정을 꼭 하는 것도 중요합니다. 이 때 부작용
                        없는 교정이 무엇보다도 중요합니다. 발치 할 때는 마음이
                        아프지만 교정 후 치열뿐만 아니라 얼굴형도 드라마틱하게
                        좋아지는 것을 봅니다. 특히 옆 얼굴에서 드라마틱한 효과가
                        드러납니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section beige>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_horizontal">
                    <img src="/image/gyojung/23.jpg" />
                    <img src="/image/gyojung/24.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section>
            <ContentsBox>
              <Contents>
                <ImageBox vertical size="100%">
                  <div className="_div_grid">
                    <img src="/image/gyojung/25.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox>
                  <Text bigger>
                    <ul>
                      <li>
                        <em>중년 발치 교정 (45~55세)</em>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        50대인데 비발치 교정이라면 몰라도 치아 4개를 발치 한다면
                        후유증을 걱정하지만 발치를 해도 안전하게 교정할 수 있는
                        여러가지 방법이 있습니다. 울퉁불퉁한 치열에 한이 맺힌
                        분들은 더 이상 그대로 늙지 않아도 됩니다. 만약 안되는
                        케이스는 사전에 하지 말라고 합니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_horizontal">
                    <img src="/image/gyojung/26.jpg" />
                    <img src="/image/gyojung/27.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <ImageBox vertical size={["100%", null]}>
                  <div className="_div_grid">
                    <img src="/image/gyojung/28.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section white>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_horizontal">
                    <img src="/image/gyojung/29.jpg" />
                    <img src="/image/gyojung/30.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <ImageBox vertical size={["100%", null]}>
                  <div className="_div_grid">
                    <img src="/image/gyojung/31.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section beige>
            <ContentsBox>
              <Contents>
                <TextBox>
                  <Text bigger>
                    <ul>
                      <li>
                        <em>교정 + 보철</em>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        재보철 환자 중에 교정을 먼저 해야 케이스를 망치지 않는
                        환자가 의외로 많습니다. 저는 그럴 때 교정을 권하기를
                        주저하지 않습니다. 이번에 교통정리가 잘 되어야 한이 남는
                        치료가 되지 않고 계속 아름다우며 언젠가 보철을 다시 할
                        때는 간단히 보철만 바꾸면 됩니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section beige>
            <ContentsBox>
              <Contents>
                <TextBox>
                  <Text>
                    <ul>
                      <li>
                        중앙선이 치우쳐 있어서 앞니가 이상해 보이므로 중앙선
                        문제를 교정으로 잡은 후 재보철
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section beige>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/32.jpg" />
                    <img src="/image/gyojung/34.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/33.jpg" />
                    <img src="/image/gyojung/35.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section beige>
            <ContentsBox>
              <Contents>
                <TextBox>
                  <Text>
                    <ul>
                      <li>
                        역시 중앙선 문제가 심했습니다. (교정+오른쪽 앞니 3개
                        재보철)
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section beige>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/36.jpg" />
                    <img src="/image/gyojung/38.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/gyojung/37.jpg" />
                    <img src="/image/gyojung/39.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
        </div>
      </AppLayout>
    </>
  );
};

export default Gyojung;
