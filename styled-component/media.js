import { css } from "styled-components";

const deviceSizes = {
  mobile: [0, 375],
  tablet: [376, 768],
  laptop: [769, 1024],
  retina: [1025, 1920],
  desktop: [1921, 10000],
};

export default Object.keys(deviceSizes).reduce((acc, label) => {
  console.log(acc, label, deviceSizes[label])
  acc[label] = (...args) => css`
    @media (min-width: ${deviceSizes[label][0]}px) and (max-width: ${deviceSizes[label][1]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
