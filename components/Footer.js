import styled from 'styled-components';
import { theme, mixins } from '../style';
const { colors } = theme;

const StyledFooter = styled.footer`
  ${mixins.flexCenter};
  padding: 2rem 5rem;
  color: ${colors.grey};
  text-align: center;
  font-weight: 500;
  font-size: 14px;

  p {
    margin: 0;
  }

  a {
    padding: 7px;
    border-radius: 5px;
    &:hover,
    &:focus {
      color: #0070f3;
      background: rgba(0, 118, 255, 0.1);
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div>
      <span>Built with</span>
      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        Next.js
      </a>
      &middot;
      <a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">
        Chart.js
      </a>
      &middot;
      <a
        href="https://github.com/IonicaBizau/node-gh-polyglot"
        target="_blank"
        rel="noopener noreferrer">
        GitHub Polyglot
      </a>
      &middot;
      <a href="https://octicons.github.com/" target="_blank" rel="noopener noreferrer">
        Octicons
      </a>
      &middot;
      <a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">
        Styled Components
      </a>
      &middot;
      <a
        href="https://github.com/joshwcomeau/react-flip-move"
        target="_blank"
        rel="noopener noreferrer">
        React Flip Move
      </a>
      and more!
    </div>
  </StyledFooter>
);

export default Footer;
