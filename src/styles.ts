import { createGlobalStyle } from 'styled-components'

import background from './assets/images/background.png'

export const colors = {
  whiteBg: '#FFFEFE',
  yellowBg: '#F6E07D',
  blueBg: '#594EF4',
  primaryText: '#252525',
  secondaryText: '#545454'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    list-style: none;
  }

  body {
    background-image: url(${background});
  }

  .container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }
`
