/* eslint-disable import/prefer-default-export */

import { css } from 'styled-components';

export const media = {
  mobile: (...args) => css`
    @media (max-width: 479px) {
      ${css(...args)};
    }
  `,

  phablet: (...args) => css`
    @media (max-width: 599px) {
      ${css(...args)};
    }
  `,

  tablet: (...args) => css`
    @media (max-width: 1023px) {
      ${css(...args)};
    }
  `,
};
