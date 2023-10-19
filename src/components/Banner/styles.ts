import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Titulo = styled.h2`
  font-size: 32px;
  max-width: 450px;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`