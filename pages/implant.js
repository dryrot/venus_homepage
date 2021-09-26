import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import styled from "styled-components";
import BeforeAfter from "../components/BeforeAfter";
import { VDiv, Section } from "../components/VDiv";

const Part = styled.div`
  ${Section}:first-child {
    padding-top: 100px;
  }
  ${Section}:last-child {
    padding-bottom: 200px;
  }
`;

const Implant = () => {
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

      if (props.padding) {
        return `padding: ${props.padding};`;
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
      font-weight: 600;
    }

    ${(props) => {
      if (props.bigger) {
        return `ul { font-size: ${props.theme.fontSize.semiBold}; }`;
      }

      if (props.end) {
        return `text-align: center; font-size: ${props.theme.fontSize.semiBold};`;
      }
    }}
  `;

  const ImageBox = styled.div`
    //width: 100%;

    ${(props) => {
      if (props.vertical) {
        return (
          "display: flex;\n" +
          "    align-items: center;\n" +
          "    justify-content: center; img { height: 350px; }"
        );
      }
    }}

    img {
      width: 700px;
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

  return (
    <>
      <Head>
        <title>Implant | Venuss</title>
      </Head>
      <AppLayout>
        <div>
          <Part>
            <VDiv
              element={
                <>
                  <ImageBox size={["500px", null]}>
                    <img src="/image/implant/implant_2.jpg" />
                  </ImageBox>
                  <TextBox padding="50px">
                    <Text>
                      <ul>
                        <li>
                          불가항력적으로 앞니가 빠졌을 때는 임플란트를 해야 하지만
                          앞니 임플란트는 생각보다 못생겨서 깜짝 놀라는 분들이
                          많습니다.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <em>‘빼도 박도 못하는 상황’</em>이라고 해야 할까요? 한
                          번 심은 임플란트는 빼고 다시 심을 수도 없으니 그냥
                          살아야 하는 분들이 많습니다.
                        </li>
                      </ul>
                    </Text>
                  </TextBox>
                </>
              }
              color="beige"
            />

            <VDiv
              element={
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        <em>앞니 임플란트</em>는 어금니 임플란트와 다릅니다.
                      </li>
                      <li>
                        어금니 임플란트는 그냥 잘 씹히면 되지만 앞니는 잘 씹힐
                        뿐만 아니라 예쁘기까지 해야 합니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        이는 어머니가 낳을 때 '인간'으로 낳으면 되는 것이 아니라
                        <em>'원빈(전지현)'</em>으로 낳는 것과 같습니다.
                      </li>
                      <li>
                        앞니 임플란트는 쉽지 않다는 점을 미리 알면 대비를 잘 하여
                        실패도 피하고 실망도 덜 합니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="beige"
            />
          </Part>

          <Part>
            <VDiv
              element={
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        오른쪽 대문니가 임플란트, 짝짝으로 길어진
                        대문니(임플란트)가 환자에게는 트라우마일 것입니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        임플란트를 다시 심지 않아도 잇몸을 이식하고 크라운을 다시
                        하면 많이 좋아집니다. 의지를 갖고 치료하면 없던 일이 될
                        수도 있습니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="white"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/implant/1.jpg", "/image/implant/2.jpg"]}
                  imgHeight="600px"
                />
              }
              color="white"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/implant/3.jpg", "/image/implant/4.jpg"]}
                  imgHeight="600px"
                />
              }
              color="white"
            />
          </Part>

          <Part>
            <VDiv
              element={
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        왼쪽 대문니가 임플란트. 일반적으로 이 정도면 잘 심긴
                        것이지만 이질적인 모습에 환자는 상실감으로 슬퍼합니다.
                      </li>
                      <li>
                        좀 더 좋아지게 할 수 있습니다. 잇몸을 이식하고 크라운을
                        다시 합니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="beige"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/implant/5.jpg", "/image/implant/6.jpg"]}
                  imgHeight="600px"
                />
              }
              color="beige"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/implant/7.jpg", "/image/implant/8.jpg"]}
                  imgHeight="600px"
                />
              }
              color="beige"
            />
          </Part>

          <Part>
            <VDiv
              element={
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        그러나 처음부터 임플란트를 잘 심는 것이 가장 중요하겠지요.
                      </li>
                      <li>
                        왼쪽 앞니에 임플란트를 심을 것입니다. 없던 일이 될 정도로
                        잘 심어야 합니다.
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="white"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/implant/9.jpg", "/image/implant/10.jpg"]}
                  imgHeight="600px"
                />
              }
              color="white"
            />
          </Part>

          <Part>
            <VDiv
              element={
                <TextBox horizontal>
                  <Text>
                    <ul>
                      <li>
                        앞니가 여러 개 없어지면 환자는 절망적이겠지만 여러 개의
                        임플란트가 의외로 어렵지 않습니다.
                      </li>
                    </ul>
                    <ul>
                      <li>
                        원래대로 돌아 갈 의지만 있다면 원래대로 돌아갈 수
                        있습니다.
                      </li>
                      <li>
                        <em> 꽉 붙잡고 놓치지 마세요.</em>
                      </li>
                    </ul>
                  </Text>
                </TextBox>
              }
              color="beige"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/implant/11.jpg", "/image/implant/12.jpg"]}
                  imgHeight="600px"
                />
              }
              color="beige"
            />

            <VDiv
              element={
                <BeforeAfter
                  imgSrc={["/image/implant/13.jpg", "/image/implant/14.jpg"]}
                  imgHeight="600px"
                />
              }
              color="beige"
            />
          </Part>
        </div>
      </AppLayout>
    </>
  );
};

export default Implant;
