import styled from 'styled-components';
import { theme, mixins } from '../../style';
const { colors } = theme;

const ChartsStyles = styled.div`
  margin-top: -8rem !important;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  justify-content: center;
  /* justify-items: center; */

  .chart {
    background-color: ${colors.white};
    max-width: 500px;
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);

    header {
      ${mixins.flexBetween};
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

export default ChartsStyles;
