import { createGlobalStyle } from 'styled-components'

export const BreakPoint = {
  desktop: '1024px',
  tablet: '768px'
}

export const colors = {
  white: '#eeeeee',
  black: '#111',
  gray: '#333',
  green: '#10ac84',
  lightGray: '#A3A3A3'
}

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  scroll-behavior: smooth;
  font-family: 'Roboto Mono', sans-serif;

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${BreakPoint.desktop}) {
      max-width: 80%;
    }
  }
}

body {
  background-color: ${colors.black};
  color: ${colors.white};
  padding-top: 40px;
}
`
