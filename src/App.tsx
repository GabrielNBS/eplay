import { GlobalStyle } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
