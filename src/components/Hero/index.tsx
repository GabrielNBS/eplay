import { Banner, Infos } from './styles'

import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>Acao</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          <span>De R$ 250,00</span>
          Por R$ 190,00
        </p>
        <Button
          type="button"
          title="Clique aqui para adiconar este jogo ao carrinho"
          variant="primary"
        >
          Adicionar ao Carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero