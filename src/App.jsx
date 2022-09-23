import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Customers from './pages/Customers'
import Home from './pages/Home'
import TemplateDefault from './templates/TemplateDefault'

function App() {
  return (
    <BrowserRouter>
     <TemplateDefault>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customers' element={<Customers />} />
        </Routes>
      </TemplateDefault>
    </BrowserRouter>
  )
}

export default App
