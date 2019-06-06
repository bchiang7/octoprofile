import { css } from 'styled-components';

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  ellipsis: css`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,
};

export default mixins;
