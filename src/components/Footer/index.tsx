import { Container, SectionTitle, FooterSection, Link, Links } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              AÇÃO
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sports"
            >
              ESPORTES
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              SIMULAÇÃO
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#fight"
            >
              LUTA
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso rapido</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar a sessão de promoções"
              to="/#on-sale"
            >
              PROMOÇÕES
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar a sessão de em breve"
              to="/#coming-soon"
            >
              EM BREVE
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
