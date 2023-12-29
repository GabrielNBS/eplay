import * as S from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Container>
    <div className="container">
      <S.FooterSection>
        <S.SectionTitle>Categorias</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Ação"
              to="/categories#action"
            >
              AÇÃO
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Esportes"
              to="/categories#sports"
            >
              ESPORTES
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de Simulação"
              to="/categories#simulation"
            >
              SIMULAÇÃO
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#fight"
            >
              LUTA
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <S.FooterSection>
        <S.SectionTitle>Acesso rapido</S.SectionTitle>
        <S.Links>
          <li>
            <S.Link
              title="Clique aqui para acessar a sessão de promoções"
              to="/#on-sale"
            >
              PROMOÇÕES
            </S.Link>
          </li>
          <li>
            <S.Link
              title="Clique aqui para acessar a sessão de em breve"
              to="/#coming-soon"
            >
              EM BREVE
            </S.Link>
          </li>
        </S.Links>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.Container>
)

export default Footer
