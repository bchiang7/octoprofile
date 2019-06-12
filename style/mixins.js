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

  blueButton: css`
    color: ${colors.white};
    background-color: ${colors.blue};
    padding: 1rem 2rem;
    border-radius: 0.25rem;
    box-shadow: 0px 10px 30px -8px rgba(39, 88, 184, 0.5);
    filter: contrast(1.25);
    transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;

    &:hover,
    &:focus {
      box-shadow: 0px 6px 20px rgba(0, 118, 255, 0.23);
      background: rgba(0, 118, 255, 0.9);
    }
  `,
};

export default mixins;
