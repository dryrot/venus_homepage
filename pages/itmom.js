import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import VenusTitle from "../components/VenusTitle";

const Itmom = () => {
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

    //&:nth-child(3) {
    //  padding: 250px 0;
    //}

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
        if (props.size !== undefined) {
          return `width: ${props.size};`;
        }
      }}
    }

    ._div_vertical img {
      margin: 5px 0px;
    }

    ._div_horizontal {
      display: flex;
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
        <title>앞니 심미보철 | Venuss</title>
      </Head>
      <AppLayout>
        <div>
          <Section>
            <ContentsBox>
              <Contents>
                <ImageBox size="800px">
                  <img src="/image/itmom/itmom_1.jpg" />
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section>
            <ContentsBox>
              <Contents>
                <TextBox horizontal>
                  <Text>
                    <ul className="_bold">
                      <li>적절한 잇몸 없이 적절한 앞니 없습니다.</li>
                    </ul>
                    <ul>
                      <li>
                        성공적인 앞니 치료는 앞니만 보는 것이 아니라 잇몸부터
                        보는 것으로부터 시작됩니다.
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
                <TextBox>
                  <Text bigger>
                    <ul>
                      <li>
                        <em>잇몸 선</em>
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
                  <div className="_div_vertical">
                    <img src="/image/itmom/1.jpg" />
                    <img src="/image/itmom/2.jpg" />
                  </div>
                </ImageBox>
                <TextBox beigeText>
                  <Text>
                    <ul>
                      <li>
                        이 분은 <em>앞니 4개</em>가 크라운입니다.
                      </li>
                      <li>이들의 길이가 다르고 대칭이 맞지 않습니다.</li>
                    </ul>
                    <ul>
                      <ul>
                        <li>
                          원래 교정을 했으면 좋았을 것을, 보철로 억지로 맞추면
                          치열의 문제는 잇몸문제로 바뀝니다.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          잇몸의 문제가 있는 분은 단순 보철 교체만으로는 문제가
                          해결되지 않습니다.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          시간이 걸리더라도 잇몸선을 맞추는 과정을 거쳐야
                          합니다.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          그렇게 하지 않으면 다음 보철 때까지 두고두고 한으로
                          남을 것입니다.
                        </li>
                      </ul>
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
                    <img src="/image/itmom/3.jpg" />
                    <img src="/image/itmom/4.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>잇몸도 비대칭이고 비어 보입니다. </li>
                    </ul>
                    <ul>
                      <li>
                        재보철 할 때는 잇몸 대칭을 맞추고 잇몸을 꽉꽉
                        채워봅니다.
                      </li>
                    </ul>
                    <ul>
                      잇몸이 맞을 때 앞니가 얼마나 더 아름다워지는지 보세요.
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
                    <img src="/image/itmom/5.jpg" />
                    <img src="/image/itmom/6.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        좋은 발란스를 위한 잇몸 치료. (잇몸 성형 + 앞니 3개
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
                <TextBox>
                  <Text bigger>
                    <ul>
                      <li>
                        <em>잇몸 색</em>
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
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>추워 보이는 어두운 잇몸은 생명력을 앗아갑니다.</li>
                      <li>
                        생명력 있는 앞니는 생명력 있는 잇몸과 함께 합니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        비너스는 잇몸의 색을 되돌리는 모든 방법을 제시할 것이고
                        결국 치료 후 당신은 화사해지고 입안으로부터 뿌옇게 빛이
                        발산되는 듯 생생해질 것입니다.
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
                    <img src="/image/itmom/7.jpg" />
                    <img src="/image/itmom/8.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section beige>
            <ContentsBox>
              <Contents>
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        잇몸의 색이 돌아올 때 당신이 어렸을 때의 그토록 맑았던
                        시절의 생명력이 돌아옵니다.
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
                <TextBox whiteText>
                  <Text>
                    <ul>
                      <li>
                        잇몸의 색은 반드시 돌아와야 하며 다시는 검어지지 않고
                        오래오래 유지되어야 합니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        비너스는 잇몸 색을 화사하게 할 수 있는 검증된 여러가지
                        방법을 제시합니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
                <ImageBox vertical>
                  <div className="_div_vertical">
                    <img src="/image/itmom/9.jpg" />
                    <img src="/image/itmom/10.jpg" />
                  </div>
                </ImageBox>

              </Contents>
            </ContentsBox>
          </Section>

          <Section beige>
            <ContentsBox>
              <Contents>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/itmom/11.jpg" />
                    <img src="/image/itmom/14.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/itmom/12.jpg" />
                    <img src="/image/itmom/13.jpg" />
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
                        <em>블랙 트라이앵글</em>
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
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        블랙 트라이앵글은 비록 작지만 타인의 시선이 집중됩니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        블랙 트라이앵글 치료는 교정, 라미네이트, 도자기 잇몸
                        등이 있으며, 환자에게 가장 적절한 방법을 선택하여
                        제시합니다.
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
                  <div className="_div_vertical">
                    <img src="/image/itmom/15.jpg" />
                    <img src="/image/itmom/16.jpg" />
                  </div>
                </ImageBox>
                <TextBox beigeText>
                  <Text bigger>
                    <ul>
                      <li>부분 교정으로 없애기</li>
                    </ul>
                    <ul>
                      <li>(5개월)</li>
                    </ul>
                  </Text>
                </TextBox>
              </Contents>
            </ContentsBox>
          </Section>

          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox beigeText>
                  <Text bigger>
                    <ul>
                      <li>라미네이트로 없애기</li>
                    </ul>
                    <ul>
                      <li>(너무 심하면)</li>
                    </ul>
                  </Text>
                </TextBox>
                <ImageBox vertical>
                  <div className="_div_vertical">
                    <img src="/image/itmom/17.jpg" />
                    <img src="/image/itmom/18.jpg" />
                  </div>
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox horizontal>
                  <Text bigger>
                    <ul>
                      <li>
                        아무리 커도 없어지지 않는 블랙트라이앵글은 없습니다.
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
                    <img src="/image/itmom/19.jpg" />
                    <img src="/image/itmom/21.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/itmom/20.jpg" />
                    <img src="/image/itmom/22.jpg" />
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
                        <em>잇몸 성형</em>
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
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        잇몸이 너무 긴 분은 잇몸을 성형하는 것만으로도 놀랄 만큼
                        좋아집니다.
                      </li>
                    </ul>
                    <ul>
                      <li>제대로 한 잇몸 성형은 열 교정 부럽지 않습니다.</li>
                    </ul>
                    <ul>
                      <li>
                        비너스는 필요하다면 아무 두려움 없이 잇몸 성형을
                        권합니다.
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
                    <img src="/image/itmom/23.jpg" />
                    <img src="/image/itmom/25_re.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/itmom/24.jpg" />
                    <img src="/image/itmom/26_re.jpg" />
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
                        <em>도자기 잇몸</em>
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
                <ImageBox vertical image4 size="800px">
                  <img src="/image/itmom/27.jpg" />
                </ImageBox>
              </Contents>
            </ContentsBox>
          </Section>
          <Section white>
            <ContentsBox>
              <Contents>
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        잇몸과<em>똑 같은,</em> 피가 흐르는 듯한 도자기로 만든
                        잇몸은
                      </li>
                    </ul>
                    <ul>
                      <li>
                        잇몸은 해결 불가능해 보이는 잇몸의 문제를 마지막으로
                        해결해 줍니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <em>그것도 완벽하게!</em>
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
                    <img src="/image/itmom/28.jpg" />
                    <img src="/image/itmom/30.jpg" />
                  </div>
                </ImageBox>
                <ImageBox vertical>
                  <div className="_div_grid">
                    <img src="/image/itmom/29.jpg" />
                    <img src="/image/itmom/31.jpg" />
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

export default Itmom;

// TODO 요구사항
// 1. 이미지 가로 너비 수정하기
// 2. 비포 애프터 가운데에 하얀색 트라이앵글 넣기
// 3. 폰트크기 최대 5px 키우기
// 4. about 첫번째 이미지 삭제
// 5. about 이미지 삭제하고 한 페이지에 몰아넣고 약력 맨 첫번째 섹션으로 올리기.
// 6. 따옴표 제거
// E28413 로고 색상 변경 그리고 로고 더 크게
// 로고 하단에 '앞니전문 치과' 문구 넣기
// 사진 채도 안맞는거 보정하기
// 이빨 질감 옆에 하얀 박스 없애기
// 잇몸 섹션 첫번째 사진 어머니가 보내준 사진으로 변경하기
// 블로그, 유튜브 버튼 아이콘 키우고 초록/빨강으로 변경하기
// 타이틀이든 네비게이션이든 아무튼 폰트 키우기!!!!!!