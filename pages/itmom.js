import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import BeforeAfter from "../components/BeforeAfter";
import { VDiv, Section } from "../components/VDiv";

const Part = styled.div`
  ${Section}:first-child {
    padding-top: 100px;
    ${({ theme }) => theme.mobile`
     padding: 0;
  `}
  }
  ${Section}:last-child {
    padding-bottom: 200px;
    ${({ theme }) => theme.mobile`
     padding-bottom: 100px;
  `}
  }
`;

const Itmom = () => {
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

      &.center {
        ${({ theme }) => theme.mobile`
       text-align: center;
       font-size: ${theme.mFontSize.semiBold} !important;
  `}
      }
    }

    ._ul_underline {
      border-bottom: 1px solid ${(props) => props.theme.darkSpace};
      padding-bottom: 20px;
    }

    ._bold {
      font-weight: 400;
      ${({ theme }) => theme.mobile`
          font-weight: 600;
  `}
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

      if (props.end) {
        return `text-align: center; font-size: ${props.theme.fontSize.semiBold};`;
      }
    }}

    ${({ theme }) => theme.mobile`
     text-align: left;
     width: calc(100% - 50px);
         word-break: normal;
     font-size: ${theme.mFontSize.default};
  `}
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

    ${({ theme }) => theme.mobile`
      img {
        width: 100%;
      }
  `}
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
            <VDiv
              element={
                <ImageBox size="800px">
                  <img
                    src="/image/itmom/itmom_1.jpg"
                    alt="이미지를 불러올 수 없습니다."
                  />
                </ImageBox>
              }
              color="beige"
              padding="50px 0px 0px 0px !important"
            />

            <VDiv
              element={
                <TextBox horizontal>
                  <Text end>
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
              }
              color="beige"
              padding="20px 0px !important"
            />
          </Part>

          <Part>
            <VDiv
              element={
                <TextBox>
                  <Text bigger>
                    <ul className="center">
                      <li>
                        <em>잇몸 선</em>
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="white"
              padding="0px"
            />

            <VDiv
              element={
                <>
                  <BeforeAfter
                    imgSrc={["/image/itmom/1.jpg", "/image/itmom/2.jpg"]}
                    imgHeight="600px"
                  />
                </>
              }
              color="white"
              padding="0px"
            />

            <VDiv
              element={
                <TextBox>
                  <Text>
                    <ul>
                      <li>
                        이 분은 <em>앞니 4개</em>가 크라운입니다.
                      </li>
                      <li>이들의 길이가 다르고 대칭이 맞지 않습니다.</li>
                    </ul>
                    <ul>
                      <ul>
                        <li>원래 교정을 했으면 좋았을 것을,</li>
                        <li>
                          보철로 억지로 맞추면 치열의 문제는 잇몸문제로
                          바뀝니다.
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
              }
              color="white"
              padding="0px"
            />

            <VDiv
              element={
                <>
                  <BeforeAfter
                    imgSrc={["/image/itmom/3.jpg", "/image/itmom/4.jpg"]}
                    imgHeight="600px"
                  />
                </>
              }
              color="white"
              padding="0px"
            />

            <VDiv
              element={
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
              }
              color="white"
              padding="0px"
            />

            <VDiv
              element={
                <>
                  <BeforeAfter
                    imgSrc={["/image/itmom/5.jpg", "/image/itmom/6.jpg"]}
                    imgHeight="600px"
                  />
                </>
              }
              color="white"
              padding="0px"
            />

            <VDiv
              element={
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
              }
              color="white"
              padding="20px 0px 30px 0px !important"
            />
          </Part>

          <Part>
            <VDiv
              element={
                <TextBox>
                  <Text bigger>
                    <ul className="center">
                      <li>
                        <em>잇몸 색</em>
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="beige"
              padding="10px 0px 0px 0px !important"
            />

            <VDiv
              element={
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
              }
              color="beige"
              padding="0px"
            />

            <VDiv
              element={
                <>
                  <BeforeAfter
                    imgSrc={["/image/itmom/7.jpg", "/image/itmom/8.jpg"]}
                    imgHeight="600px"
                  />
                </>
              }
              color="beige"
              padding="0px"
            />

            <VDiv
              element={
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
              }
              color="beige"
              padding="0px"
            />

            <VDiv
              element={
                <>
                  <BeforeAfter
                    imgSrc={["/image/itmom/9.jpg", "/image/itmom/10.jpg"]}
                    imgHeight="600px"
                  />
                </>
              }
              color="beige"
              padding="0px"
            />

            <VDiv
              element={
                <>
                  <BeforeAfter
                    imgSrc={["/image/itmom/11.jpg", "/image/itmom/12.jpg"]}
                    imgHeight="600px"
                  />
                </>
              }
              color="beige"
              padding="0px 0"
            />

            <VDiv
              element={
                <>
                  <BeforeAfter
                    imgSrc={["/image/itmom/13.jpg", "/image/itmom/14.jpg"]}
                    imgHeight="600px"
                  />
                </>
              }
              color="beige"
              padding="0px 0"
            />

            <VDiv
              element={
                <TextBox>
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
              }
              color="beige"
              padding="10px 0px 20px 0px !important"
            />
          </Part>

          <Part>
            <VDiv
              element={
                <TextBox>
                  <Text bigger>
                    <ul className="center">
                      <li>
                        <em>블랙 트라이앵글</em>
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="white"
              padding="10px 0px 0px 0px !important"
            />

            <VDiv
              element={
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
              }
              color="white"
              padding="0px"
            />
            <VDiv
              element={
                <TextBox>
                  <Text bigger>
                    <ul className="center">
                      <li>부분 교정으로 없애기</li>
                      <li>(5개월)</li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="white"
              padding="0px !important"
            />
            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/itmom/15.jpg", "/image/itmom/16.jpg"]}
                  imgHeight="600px"
                />
              }
              color="white"
              padding="0px !important"
            />

            <VDiv
              element={
                <TextBox>
                  <Text bigger>
                    <ul className="center">
                      <li>라미네이트로 없애기</li>
                      <li>(너무 심하면)</li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="white"
              padding="0px"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/itmom/17.jpg", "/image/itmom/18.jpg"]}
                  imgHeight="600px"
                />
              }
              color="white"
              padding="0px !important"
            />

            <VDiv
              element={
                <TextBox horizontal>
                  <Text bigger>
                    <ul className="center">
                      <li>
                        아무리 커도 없어지지 않는 블랙트라이앵글은 없습니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="white"
              padding="0px !important"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/itmom/19.jpg", "/image/itmom/20.jpg"]}
                  imgHeight="600px"
                />
              }
              color="white"
              padding="0px !important"
            />
            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/itmom/21.jpg", "/image/itmom/22.jpg"]}
                  imgHeight="600px"
                />
              }
              color="white"
              padding="0px !important"
            />
          </Part>

          <Part>
            <VDiv
              element={
                <TextBox>
                  <Text bigger>
                    <ul className="center">
                      <li>
                        <em>잇몸 성형</em>
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="beige"
              padding="10px 0px 0px 0px !important"
            />

            <VDiv
              element={
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        잇몸이 너무 긴 분은 잇몸을 성형하는 것만으로도 놀랄 만큼
                        좋아집니다. 제대로 한 잇몸 성형은{" "}
                        <em>열 교정 부럽지 않습니다.</em>
                      </li>
                      <li />
                    </ul>
                    <ul>
                      <li>
                        비너스는 필요하다면 아무 두려움 없이 잇몸 성형을
                        권합니다.
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
                  imgSrc={["/image/itmom/23.jpg", "/image/itmom/24.jpg"]}
                  imgHeight="600px"
                />
              }
              color="beige"
              padding="0px"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/itmom/25_re.jpg", "/image/itmom/26_re.jpg"]}
                  imgHeight="600px"
                />
              }
              color="beige"
              padding="0px"
            />
          </Part>

          <Part>
            <VDiv
              element={
                <TextBox>
                  <Text bigger>
                    <ul className="center">
                      <li>
                        <em>도자기 잇몸</em>
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="white"
              padding="10px 0px 0px 0px !important"
            />

            <VDiv
              element={
                <ImageBox vertical image4 size="800px">
                  <img
                    src="/image/itmom/27.jpg"
                    alt="이미지를 불러올 수 없습니다."
                  />
                </ImageBox>
              }
              color="white"
              padding="0px"
            />

            <VDiv
              element={
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        잇몸과 <em>똑 같은,</em> 피가 흐르는 듯한 도자기로 만든
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
              }
              color="white"
              padding="0px"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/itmom/28.jpg", "/image/itmom/29.jpg"]}
                  imgHeight="600px"
                />
              }
              color="white"
              padding="0px"
            />
            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/itmom/30.jpg", "/image/itmom/31.jpg"]}
                  imgHeight="600px"
                />
              }
              color="white"
              padding="0px"
            />
          </Part>
        </div>
      </AppLayout>
    </>
  );
};

export default Itmom;
