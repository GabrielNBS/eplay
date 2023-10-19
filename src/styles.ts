import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#eeeeee',
  preto: '#111',
  cinza: '#333',
  verde: '#10ac84',
  cinzaclaro: '#A3A3A3'
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
  }
}

body {
  background-color: ${cores.preto};
  color: ${cores.branco};
  padding-top: 40px;
}
`
