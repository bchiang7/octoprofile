import styled from 'styled-components';
import { theme, mixins } from '../../style';
const { colors, fonts } = theme;

const UserInfoStyles = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  margin-bottom: 30px;
  text-align: center;

  .avatar {
    ${mixins.flexCenter};
    margin-bottom: 1.5rem;
    border: 0.5rem solid ${colors.blue};
    border-radius: 100%;
    width: 150px;
    height: 150px;
    img {
      border-radius: 100%;
    }
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: ${colors.offWhite};
  }
  h2 {
    font-family: ${fonts.mono};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    a {
      color: ${colors.blue};
    }
  }
  h3 {
    color: ${colors.lightblue};
  }

  a {
    color: ${colors.lightestBlue};
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  .info {
    ${mixins.flexCenter};

    &__item {
      ${mixins.flexCenter};
      margin: 0 1rem;

      svg {
        margin-right: 10px;
      }
    }
  }

  .stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 150px));
    grid-gap: 0.5rem;
    justify-content: center;
    margin-top: 2rem;

    h4 {
      color: ${colors.offWhite};
      font-size: 1rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 20px;
    }

    &__item {
      ${mixins.flexCenter};
      flex-direction: column;
      background-color: ${colors.darkGrey};
      padding: 1rem;
      border-radius: 0.25rem;
      text-align: center;

      .num {
        color: ${colors.offWhite};
        font-size: 1.5rem;
      }
      .num-label {
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 1px;
        margin-top: 0.75rem;
        color: rgba(200, 225, 255, 0.7);
      }
    }
  }
`;

export default UserInfoStyles;
