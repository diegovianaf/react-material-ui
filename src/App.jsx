import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Customers from './pages/Customers'
import Home from './pages/Home'
import TemplateDefault from './templates/TemplateDefault'

function App() {
  return (
    <TemplateDefault>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customers' element={<Customers />} />
        </Routes>
      </BrowserRouter>
    </TemplateDefault>
  )
}

export default App
