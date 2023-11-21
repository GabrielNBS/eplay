import Button from '../Button'
import {
  CardItem,
  CartContainer,
  Overlay,
  Prices,
  Quantity,
  Sidebar
} from './styles'

import starWars from '../../assets/images/star_wars.png'
import Tag from '../Tag'

function Cart() {
  return (
    <CartContainer>
      <Overlay />
      <Sidebar>
        <ul>
          <CardItem>
            <img src={starWars} alt="" />
            <div>
              <h3>Nome do Jogo</h3>
              <Tag>Rpg</Tag>
              <Tag>PS5</Tag>
              <span>R$ 150,00</span>
            </div>
            <button type="button" />
          </CardItem>
        </ul>
        <Quantity>2 jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ 250,00
          <span>Em ate 6x sem juros</span>
        </Prices>
        <Button type="button" title="Clique aqui para continuar com a compra">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
