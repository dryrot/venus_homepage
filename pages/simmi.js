import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import VenusTitle from "../components/VenusTitle";
import BeforeAfter from "../components/BeforeAfter";
import { VDiv, Section } from "../components/VDiv";

const Part = styled.div`
  ${Section}:first-child {
    //padding-top: 100px;
  }
  ${({ theme }) => theme.mobile`
      padding: 50px 0px 0px 0px;
   `}
  ${Section}:last-child {
    padding-bottom: 200px;
    ${({ theme }) => theme.mobile`
     padding-bottom: 100px;
  `}
  }

  ${({ theme }) => theme.mobile`
      padding: 0;
   `}
`;

const Simmi = () => {
  const TextBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0px 70px;
    width: 100%;
    ${(props) => {
      if (props.vertical) {
        return `padding: 90px;`;
      }
      if (props.horizontal) {
        return `width: 700px; text-align:center;`;
      }
    }}

    ${({ theme }) => theme.mobile`
     padding: 0;
  `}
  `;

  const Text = styled.div`
    display: block;
    font-size: ${(props) => props.theme.fontSize.default};
    word-break: keep-all;

    ${({ theme }) => theme.mobile`
     text-align: left;
     width: calc(100% - 50px);
         word-break: normal;
     font-size: ${theme.mFontSize.default};
  `}

    ul {
      width: 100%;
      list-style: none;
      padding-left: 0;

      &.center {
        ${({ theme }) => theme.mobile`
     text-align: center;
     font-size: ${theme.mFontSize.bold} !important;
  `}
      }
    }

    ._ul_underline {
      border-bottom: 1px solid ${(props) => props.theme.darkSpace};
      padding-bottom: 40px;
    }

    em {
      font-style: normal;
      font-weight: 600;
    }

    .bigger {
      font-size: ${(props) => props.theme.fontSize.semiBold};
      ${({ theme }) => theme.mobile`
      font-size: ${(props) => props.theme.mFontSize.semiBold};
  `}
    }

    ${(props) => {
      if (props.bigger) {
        return `text-align: center; ul:first-child { font-size: ${props.theme.fontSize.semiBold}; }`;
      }

      if (props.end) {
        return `text-align: center; font-size: ${props.theme.fontSize.semiBold};`;
      }
    }}
  `;

  const ImageBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      width: 700px;
      ${(props) => {
        if (props.wider) {
          return "width: 900px; margin-bottom: 10px;";
        }
      }}

      ${({ theme }) => theme.mobile`
        width: 100vw;
      `}
    }

    ._div_vertical {
      img {
        margin: 5px 0px;
      }
    }

    ._div_horizontal {
      display: flex;
      img {
        margin-right: 5px;
      }
    }

    ._div_grid {
      margin: 5px 0px 5px 0px;
      img {
        margin: 0px 5px 50px 5px;
      }
    }

    ${({ theme }) => theme.laptop`
     img {
     ${(props) => {
       if (props.img1) {
         return "width: 100%; margin-left: 45px;";
       }
     }}}
     
  `}
  `;

  const MBox = styled.div`
    display: none;

    ${({ theme }) => theme.mobile`
     display: block;
  `}
  `;
  const MImageBox = styled.div`
    align-items: center;
    background-image: url(${(props) => props.imgSrc});
    background-position: ${(props) => props.pos};
    background-size: cover;
    display: flex;
    height: 470px;
    justify-content: center;
    overflow: hidden;
  `;
  const MTextBox = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    ${TextBox} {
      padding: 0;
    }

    ${Text} {
      margin: 30px 0px;
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
  `;

  return (
    <>
      <Head>
        <title>앞니 심미보철 | Venuss</title>
        <meta
          content="initial-scale=1, maximum-scale=1, user-scalable=0"
          name="viewport"
        />
      </Head>
      <AppLayout>
        <div>
          <Part>
            <Section color="beige">
              <VenusTitle text="앞니 심미보철" underline={false} />
            </Section>

            <VDiv
              element={
                <>
                  <ImageBox>
                    <img
                      src="/image/simmi/simmi_1.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
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
                </>
              }
              color="beige"
              contColor="white"
              disYn="n"
            />

            {/* Mobile */}
            <MBox>
              <MImageBox imgSrc="/image/simmi/simmi_1.jpg" pos="right">
                {/* <img src="/image/simmi/simmi_1.jpg" /> */}
              </MImageBox>
              <MTextBox bigger>
                <Text>
                  <ul>
                    <li>
                      앞니 보철에서 비너스가 제안하는 목표는{" "}
                      <em>없던 일로 돌아가자</em>입니다.
                    </li>
                  </ul>
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
              </MTextBox>
            </MBox>

            <VDiv
              element={
                <TextBox>
                  <Text end>
                    <ul>
                      <li>
                        이를 씌우지도, 뽑지도, 신경이 죽지도, 비인간적인 보철을
                        한 적 없는,
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
              }
              color="beige"
              disYn="n"
            />
          </Part>

          <Part>
            <VDiv
              element={
                <TextBox vertical>
                  <Text>
                    <ul>
                      <li>
                        <em className="bigger">자연보호</em>
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
                        <em className="bigger">자연의 지극한 모방</em>
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
                        치료가 끝났을 때 당신은{" "}
                        <em> 앞니를 한 적 없는 사람이 되어야 합니다.</em>
                      </li>
                      <li>제가 늘 그렇게 합니다.</li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="white"
            />
          </Part>

          <Part>
            <Section color="beige">
              <VenusTitle text="심미보철의 외형적 특징" underline={false} />
            </Section>

            <VDiv
              element={
                <>
                  <ImageBox img1>
                    <img
                      src="/image/simmi/1.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                  <TextBox>
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
                          자연치아는 세포단위 발생의 결과이기 때문에 이러한
                          자연의 무늬와 질감은 당연한 것이지만 이것을 사람의
                          손으로 재현하려면 지극히 노력해야 합니다.
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
                </>
              }
              color="beige"
              contColor="white"
              disYn="n"
            />
          </Part>

          {/* Mobile */}
          <MBox>
            <MImageBox imgSrc="/image/simmi/1.jpg" pos="center">
              {/* <img src="/image/simmi/simmi_1.jpg" /> */}
            </MImageBox>
            <MTextBox>
              <Text>
                <ul>
                  <li>
                    <em>붙이기 전 비너스의 라미네이트</em>
                  </li>
                </ul>
                <ul>
                  <li>
                    비너스의 보철은 단순히 희지 않고 알록달록, 오돌토돌합니다.
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
                    비너스 보철의 무늬와 질감은 지극히 자연스러운 보철을 위한
                    노력과 실력의 결과물입니다.
                  </li>
                </ul>
              </Text>
            </MTextBox>
          </MBox>

          <Part>
            <ImageGrid beige>
              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/2.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="beige"
                padding="0px"
              />
              <VDiv
                element={
                  <>
                    <ImageBox wider>
                      <img
                        src="/image/simmi/3.jpg"
                        alt="이미지를 불러올 수 없습니다."
                      />
                    </ImageBox>
                  </>
                }
                color="beige"
                padding="10px 0"
              />
              <VDiv
                element={
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
                }
                padding="10px 0"
                color="beige"
              />
              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/4.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="beige"
                padding="10px 0"
              />
              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/5.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="beige"
                padding="10px 0"
              />
              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/6.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="beige"
                padding="10px 0"
              />
              <VDiv
                element={
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
                }
                color="beige"
                padding="10px 0"
              />

              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/7.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="beige"
                padding="10px 0"
              />
              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/8.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="beige"
                padding="10px 0"
              />
              <VDiv
                element={
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
                }
                padding="10px 0px 30px 0px !important"
                color="beige"
              />
            </ImageGrid>
          </Part>

          <Part>
            <ImageGrid beige>
              <VDiv
                element={
                  <TextBox>
                    <Text bigger>
                      <ul className="center">
                        <li>
                          <em>자연보호</em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                }
                color="white"
                padding="30px 0"
              />
              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/9.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="white"
                padding="0px"
              />

              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/10.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="white"
                padding="10px 0"
              />

              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/11.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="white"
                padding="10px 0"
              />

              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/12.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="white"
                padding="10px 0"
              />

              <VDiv
                element={
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
                }
                color="white"
                padding="10px 0"
              />
              <VDiv
                element={
                  <ImageBox wider>
                    <img
                      src="/image/simmi/13.jpg"
                      alt="이미지를 불러올 수 없습니다."
                    />
                  </ImageBox>
                }
                color="white"
                padding="10px 0"
              />
              <VDiv
                element={
                  <TextBox>
                    <Text>
                      <ul>
                        <li>
                          <em>(녹은 뒷면에 붙이는 라미네이트)</em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                }
                padding="10px 0"
                color="white"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/14.jpg", "/image/simmi/15.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="white"
                padding="10px 0"
              />
              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/16.jpg", "/image/simmi/17.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="white"
                padding="10px 0"
              />

              <VDiv
                element={
                  <>
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
                  </>
                }
                color="white"
                padding="10px 0px 30px 0px !important"
              />
            </ImageGrid>
          </Part>

          <Part>
            <ImageGrid white>
              <VDiv
                element={
                  <TextBox>
                    <Text bigger>
                      <ul className="center">
                        <li>
                          <em>자연의 모방</em>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <em>보철한 이를 알아볼 수 없는 자연스러움</em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                }
                color="beige"
                padding="30px 0"
              />
              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/18.jpg", "/image/simmi/19.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="7px 0"
              />

              <VDiv
                element={
                  <TextBox>
                    <Text>
                      <ul className="center">
                        <li>
                          <em>1개</em>
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
                  <BeforeAfter
                    imgSrc={["/image/simmi/20.jpg", "/image/simmi/21.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <TextBox>
                    <Text>
                      <ul className="center">
                        <li>
                          <em>1개</em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/22.jpg", "/image/simmi/23.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <TextBox>
                    <Text>
                      <ul className="center">
                        <li>
                          <em>2개</em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/24.jpg", "/image/simmi/25.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <TextBox>
                    <Text>
                      <ul className="center">
                        <li>
                          <em>3개</em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/26.jpg", "/image/simmi/27.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/28.jpg", "/image/simmi/29.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <TextBox>
                    <Text>
                      <ul className="center">
                        <li>
                          <em>4개</em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/30.jpg", "/image/simmi/31.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/32.jpg", "/image/simmi/33.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/34.jpg", "/image/simmi/35.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <TextBox>
                    <Text>
                      <ul className="center">
                        <li>
                          <em>6개</em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/36.jpg", "/image/simmi/37.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/38.jpg", "/image/simmi/39.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/40.jpg", "/image/simmi/41.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <BeforeAfter
                    imgSrc={["/image/simmi/42.jpg", "/image/simmi/43.jpg"]}
                    imgHeight="600px"
                  />
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
                  <TextBox>
                    <Text>
                      <ul className="center">
                        <li>
                          <em>6개 이상(전악재건)</em>
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                }
                color="beige"
                padding="10px 0px"
              />

              <VDiv
                element={
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
                }
                color="beige"
                padding="10px 0px"
              />
            </ImageGrid>
          </Part>
        </div>
      </AppLayout>
    </>
  );
};

export default Simmi;
