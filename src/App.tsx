import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'
import Product from './components/Product'
import ProductList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductList title="Promoções" background="gray" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
