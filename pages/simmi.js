import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import VenusTitle from "../components/VenusTitle";

const Simmi = () => {
  const Section = styled.div`
    width: 100%;
    display: inline-block;
    align-items: baseline;
    justify-content: center;
    padding: 60px 0;
    ${(props) => {
      if (props.beige) {
        return `background-color: ${(props) => props.theme.lightBeige};`;
      }

      if (props.white) {
        return "background-color: #fff;";
      }
    }}

    &:nth-child(3) {
      padding: 250px 0;
    }

    &:last-child {
      padding: 0px 0px 400px 0px;
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
        return `width: 700px; text-align:center;`;
      }

      if (props.whiteText) {
        return "background-color: #fff; margin:0px 45px; padding: 7px 30px;";
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
      font-weight: 400;
    }

    ${(props) => {
      if (props.bigger) {
        return `text-align: center; ul:first-child { font-size: 22px; }`;
      }

      if (props.end) {
        return "text-align: center; font-size: 22px;";
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
      width: 700px;
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
        <title>앞니 심미보철 | Venuss</title>
      </Head>
      <AppLayout>
        <div>
          <Section beige>
            <VenusTitle text="앞니 심미보철" underline={false} />
          </Section>
          {/* End of Section1 */}
          <Section beige>
            <ContentsBox>
              <Contents whiteContents>
                <ImageBox vertical>
                  <img src="/image/simmi/simmi_1.jpg" />
                </ImageBox>
                <TextBox vertical>
                  <Text>
                    <ul>
                      <li>앞니 보철에서 비너스가 제안하는 목표는</li>
                    </ul>
                    <ul>
                      <li>
                        <em>없던 일로 돌아가자</em>입니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          {/* End of Section2 */}
          <Section beige>
            <ContentsBox>
              <TextBox horizontal>
                <Text bigger>
                  <ul>
                    <li>
                      이를 씌우지도, 뽑지도, 신경이 죽지도, 비인간적인 보철을 한
                      적 없는,
                    </li>
                    <li> 아무 일도 없어서 걱정도 없던 시절로 돌아가는 것.</li>
                  </ul>
                  <ul>
                    <li>그러기 위해 두가지 노력을 하는데,</li>
                  </ul>
                  <ul>
                    <li>
                      <em>자연보호</em>와 <em>자연의 지극한 모방</em>입니다.
                    </li>
                  </ul>
                </Text>
              </TextBox>
            </ContentsBox>
          </Section>
          {/* End of Section3 */}
          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox vertical>
                  <Text>
                    <ul>
                      <li>
                        <em>자연보호</em>
                      </li>
                    </ul>
                    <ul className="_ul_underline">
                      <li>
                        수단과 방법을 가리지 않고 자연치아를 갈거나 덮지 말자.
                      </li>
                      <li>
                        원래 그대로의 자연은 한 번 사라지면 아무리 노력을 해도
                        원래대로 돌이키기 어렵다.
                      </li>
                      <li>
                        자연은 인간의 어마어마한 노력이 우스울 정도로 대단하기
                        때문이다.
                      </li>
                      <li>
                        그래서 저는 헛된 라미네이트가 없고 한 톨의 보철도 이유가
                        있어야 합니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <em>자연의 지극한 모방</em>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        앞니 보철의 자연미는 속에 피가 흐르는 것과 같은 생생함이
                        기본이 되어야 합니다.
                      </li>
                      <li>
                        오직 생명력이 있는 앞니만이 얼굴의 생생함을 더할 수
                        있습니다.
                      </li>
                      <li>
                        요즈음 사방에 널려 있는 살아 있는 것 같지 않은 회색빛의
                        보철은 당신 얼굴의 생기를 얼마나 빼앗아가고 있는지!
                      </li>
                    </ul>
                    <ul>
                      <li>
                        치료가 끝났을 때 당신은
                        <em>앞니를 한 적 없는 사람이 되어야 합니다.</em> 제가 늘
                        그렇게 합니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section beige>
            <VenusTitle text="심미보철의 외형적 특징" underline={false} />
          </Section>
          {/* End of Section5 */}
          <Section beige>
            <ContentsBox>
              <Contents>
                <ImageBox>
                  <img src="/image/simmi/1.jpg" />
                </ImageBox>
                <TextBox whiteText>
                  <Text>
                    <ul>
                      <li>
                        <em>붙이기 전 비너스의 라미네이트</em>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        비너스의 보철은 단순히 희지 않고 알록달록,
                        오돌토돌합니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        자연치아는 세포단위 발생의 결과이기 때문에 이러한 자연의
                        무늬와 질감은 당연한 것이지만 이것을 사람의 손으로
                        재현하려면 지극히 노력해야 합니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        비너스 보철의 무늬와 질감은 지극히 자연스러운 보철을
                        위한 노력과 실력의 결과물입니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
          {/* End of Section6 */}
          <ImageGrid white>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/2.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            {/* End of Section7 */}
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/3.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            {/* End of Section8 */}
            <Section white>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text>
                      <ul>
                        <li>
                          <em>
                            자연치아의 무늬와 표면 질감 (여기에도 내셔녈
                            지오그래피가.)
                          </em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                </Contents>
              </ContentsBox>
            </Section>
            {/* End of Section9 */}
          </ImageGrid>
          <ImageGrid beige>
            <Section beige>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/4.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section beige>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/5.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section beige>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/6.jpg" />
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
                          <em>
                            비너스의 무늬와 표면 질감(역시 자꾸 만져 보고싶은
                            표면 질감)
                          </em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                </Contents>
              </ContentsBox>
            </Section>
          </ImageGrid>
          <ImageGrid white>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/7.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/8.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text>
                      <ul>
                        <li>
                          <em>
                            일반 보철의 무늬와 표면 질감(아무것도 없습니다.)
                          </em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                </Contents>
              </ContentsBox>
            </Section>
          </ImageGrid>
          <ImageGrid beige>
            <Section>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text bigger>
                      <ul>
                        <li>
                          <em>자연보호</em>
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
                  <ImageBox vertical image4>
                    <img src="/image/simmi/9.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section beige>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/10.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section beige>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/11.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section beige>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/12.jpg" />
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
                          <em>
                            녹았으면(구토 부식) 녹은만큼만 더하고 아름다운
                            앞면은 그대로 두자.
                          </em>
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
                  <ImageBox vertical image4>
                    <img src="/image/simmi/13.jpg" />
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
                          <em>(녹은 뒷면에 붙이는 라미네이트)</em>
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
                  <ImageBox vertical image4>
                    <img src="/image/simmi/14.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section beige>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/15.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section beige>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/16.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section beige>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/17.jpg" />
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
                          <em>
                            앞면은 자연치아 그대로, 뒷면은 삭제 없이 덧대는
                            라미네이트
                          </em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                </Contents>
              </ContentsBox>
            </Section>
          </ImageGrid>
          <ImageGrid white>
            <Section>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text bigger>
                      <ul>
                        <li>
                          <em>자연의 모방</em>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <em>보철한 이를 알아 볼 수 없는 자연스러움</em>
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
                  <ImageBox vertical image4>
                    <img src="/image/simmi/18.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/19.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text>
                      <ul>
                        <li>
                          <em>1개</em>
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
                  <ImageBox vertical image4>
                    <img src="/image/simmi/20.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/21.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text>
                      <ul>
                        <li>
                          <em>1개</em>
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
                  <ImageBox vertical image4>
                    <img src="/image/simmi/22.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/23.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text>
                      <ul>
                        <li>
                          <em>2개</em>
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
                  <ImageBox vertical image4>
                    <img src="/image/simmi/24.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/25.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text>
                      <ul>
                        <li>
                          {" "}
                          <em>3개</em>
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
                  <ImageBox vertical image4>
                    <img src="/image/simmi/26.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/27.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/28.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/29.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text>
                      <ul>
                        <li>
                          <em>4개</em>
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
                  <ImageBox vertical image4>
                    <img src="/image/simmi/30.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/31.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/32.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/33.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/34.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/35.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text>
                      <ul>
                        <li>
                          <em>6개</em>
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
                  <ImageBox vertical image4>
                    <img src="/image/simmi/36.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/37.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/38.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/39.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/40.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/41.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/42.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section white>
              <ContentsBox>
                <Contents>
                  <ImageBox vertical image4>
                    <img src="/image/simmi/43.jpg" />
                  </ImageBox>
                </Contents>
              </ContentsBox>
            </Section>
            <Section>
              <ContentsBox>
                <Contents>
                  <TextBox>
                    <Text>
                      <ul>
                        <li><em>6개 이상(전악재건)</em></li>
                      </ul>
                    </Text>
                  </TextBox>
                </Contents>
              </ContentsBox>
            </Section>
          </ImageGrid>
          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox>
                  <Text end>
                    <ul>
                      <li>
                        아무도 당신이 앞니를 한 것을 모르기를 원하며 앞니
                        심미보철을 합니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <em>당신은 반드시 돌아갈 수 있습니다.</em>
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>
        </div>
      </AppLayout>
    </>
  );
};

export default Simmi;
