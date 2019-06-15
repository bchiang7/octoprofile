import styled from 'styled-components';
import { theme, mixins, media } from '../../style';
const { colors } = theme;

const ChartsStyles = styled.div`
  max-width: 1200px !important;
  margin-top: -8rem !important;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  ${media.bp900`
    justify-items: center;
  `};

  .chart {
    background-color: ${colors.white};
    max-width: 500px;
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);
    ${media.bp400`
      padding: 2rem 1rem;
    `};

    header {
      ${mixins.flexBetween};
      h2 {
        font-size: 1.5rem;
      }
    }
    p {
      color: ${colors.grey2};
    }
  }
`;

export default ChartsStyles;
