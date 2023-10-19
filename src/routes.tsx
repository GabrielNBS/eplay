import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Cateegories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
