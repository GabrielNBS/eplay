import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Sistema</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quia expedita
      beatae laborum eos, necessitatibus reiciendis nostrum molestias corrupti
      voluptatem quidem consectetur distinctio eaque, quam ipsum ducimus
      reprehenderit error dolore.
    </Descricao>
  </Card>
)

export default Product
