import styled from 'styled-components';
import { theme, mixins } from '../style';
const { colors } = theme;

const StyledFooter = styled.footer`
  ${mixins.flexCenter};
  padding: 2rem;
  text-align: center;
  color: ${colors.blue};
`;

const Footer = () => <StyledFooter>Footer that links to GitHub repo</StyledFooter>;

export default Footer;
