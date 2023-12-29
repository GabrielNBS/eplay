import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: solid 2px
    ${(props) => (props.variant === 'primary' ? colors.green : colors.white)};
  color: ${colors.white};
  background-color: ${(props) =>
    props.variant === 'primary' ? colors.green : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  cursor: pointer;
`
export const ButtonLink = styled(Link)`
  border: solid 2px ${colors.white};
  color: ${colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
`
