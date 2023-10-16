import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#eeeeee',
  preto: '#111',
  cinza: '#333',
  verde: '#10ac84'
}

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  scroll-behavior: smooth;
  font-family: 'Roboto Mono', sans-serif;
}

body {
  background-color: ${cores.preto};
  color: ${cores.branco};
  padding-top: 40px;
}
`
