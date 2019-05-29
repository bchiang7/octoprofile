import { createGlobalStyle } from 'styled-components';
import theme from './theme';
const { colors, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/Inter-Medium.woff2') format('woff2'),
        url('../static/assets/Inter-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/Inter-Bold.woff2') format('woff2'),
        url('../static/assets/Inter-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/Inter-Regular.woff2') format('woff2'),
        url('../static/assets/Inter-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/Inter-SemiBold.woff2') format('woff2'),
        url('../static/assets/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/Inter-BoldItalic.woff2') format('woff2'),
        url('../static/assets/Inter-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/Inter-Italic.woff2') format('woff2'),
        url('../static/assets/Inter-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/Inter-MediumItalic.woff2') format('woff2'),
        url('../static/assets/Inter-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/Inter-SemiBoldItalic.woff2') format('woff2'),
        url('../static/assets/Inter-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${fonts.primary};
    color: ${colors.black};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${theme.transition};
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    fill: currentColor;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    &:focus,
    &:active {
      outline: 0;
    }
  }

  input {
    border-radius: 0;
    outline: 0;
    &:focus {
      outline: 0;
    }
    &::placeholder {
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

`;

export default GlobalStyle;
