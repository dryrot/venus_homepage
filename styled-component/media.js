import { css } from "styled-components";

const deviceSizes = {
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  retina: 1440,
  desktop: 2000,
};

export default Object.keys(deviceSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${deviceSizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});