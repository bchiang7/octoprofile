import styled from 'styled-components';
import { theme, mixins } from '../../style';
const { colors } = theme;

const LanguagesStyles = styled.div`
  ${mixins.flexBetween};

  .chart {
    background-color: ${colors.white};
    max-width: 500px;
    margin-top: -6rem;
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 30px -15px rgba(0, 0, 0, 0.2);

    header {
      ${mixins.flexBetween};
    }
  }
`;

export default LanguagesStyles;
