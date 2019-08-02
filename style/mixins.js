import { css } from 'styled-components';
import { theme } from '../style';
const { colors } = theme;

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

  submitButton: css`
    color: #26303c;
    background-color: ${colors.white};
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    filter: contrast(1.25);
    transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.5px;

    &:hover,
    &:focus {
      background: #dfd6d6;
    }
  `,
};

export default mixins;
