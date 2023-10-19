import Banner from '../../components/Banner'
import ProductList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images//diablo.png'
import starWars from '../../assets/images//star_wars.png'
import zelda from '../../assets/images//zelda.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'acao',
    description:
      'Resident Evil 4, conhecido no Japao como Biohazard 4, e um jogo eletronico survival horrory',
    image: resident,
    infos: ['-10%', 'R$ 250,00'],
    system: 'Xbox Series S|X',
    title: 'Resident Evil 4'
  },
  {
    id: 2,
    category: 'rpg',
    description:
      'Resident Evil 4, conhecido no Japao como Biohazard 4, e um jogo eletronico survival horrory',
    image: diablo,
    infos: ['-10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4'
  },
  {
    id: 3,
    category: 'acao',
    description:
      'Resident Evil 4, conhecido no Japao como Biohazard 4, e um jogo eletronico survival horrory',
    image: resident,
    infos: ['-10%', 'R$ 250,00'],
    system: 'Xbox Series S|X',
    title: 'Resident Evil 4'
  },
  {
    id: 4,
    category: 'acao',
    description:
      'Resident Evil 4, conhecido no Japao como Biohazard 4, e um jogo eletronico survival horrory',
    image: resident,
    infos: ['-10%', 'R$ 250,00'],
    system: 'Xbox Series S|X',
    title: 'Resident Evil 4'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'acao',
    description:
      'Resident Evil 4, conhecido no Japao como Biohazard 4, e um jogo eletronico survival horrory',
    image: zelda,
    infos: ['-10%', 'R$ 250,00'],
    system: 'nintendo',
    title: 'Zelda'
  },
  {
    id: 6,
    category: 'acao',
    description:
      'Zelda, conhecido no Japao como Biohazard 4, e um jogo eletronico survival horrory',
    image: zelda,
    infos: ['-10%', 'R$ 250,00'],
    system: 'nintendo',
    title: 'Zelda'
  },
  {
    id: 7,
    category: 'acao',
    description:
      'Zelda, conhecido no Japao como Biohazard 4, e um jogo eletronico survival horrory',
    image: zelda,
    infos: ['-10%', 'R$ 250,00'],
    system: 'nintendo',
    title: 'Zelda'
  },
  {
    id: 8,
    category: 'acao',
    description:
      'Zelda, conhecido no Japao como Biohazard 4, e um jogo eletronico survival horrory',
    image: zelda,
    infos: ['-10%', 'R$ 250,00'],
    system: 'nintendo',
    title: 'Zelda'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductList games={promocoes} title="Promoções" background="gray" />
    <ProductList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
