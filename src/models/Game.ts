class Game {
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string,
    id: number
  ) {
    this.id = id
    this.title = title
    this.system = system
    this.infos = infos
    this.image = image
    this.description = description
    this.category = category
  }
}

export default Game
