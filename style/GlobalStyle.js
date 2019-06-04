import { createGlobalStyle } from 'styled-components';
import theme from './theme';
const { colors, fonts } = theme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-BlackItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-Bold.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-ExtraLightBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-ExtraLightBETA.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-SemiBoldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-ThinBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-ThinBETA.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-BoldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-ExtraBold.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-LightItalicBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-LightItalicBETA.woff') format('woff');
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-Italic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-ThinItalicBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-ThinItalicBETA.woff') format('woff');
    font-weight: 100;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-ExtraBoldItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-ExtraBoldItalic.woff') format('woff');
    font-weight: 800;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-MediumItalic.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-Regular.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-LightBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-LightBETA.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-Black.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-SemiBold.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-Medium.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../static/assets/fonts/Inter-ExtraLightItalicBETA.woff2') format('woff2'),
        url('../static/assets/fonts/Inter-ExtraLightItalicBETA.woff') format('woff');
    font-weight: 200;
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
    color: ${colors.white};
    background-color: ${colors.mirage};
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
