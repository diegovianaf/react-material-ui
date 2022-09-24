import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomersList from './pages/customers/List'
import CustomersRegister from './pages/customers/Register'
import Home from './pages/Home'
import TemplateDefault from './templates/TemplateDefault'

function App() {
  return (
    <BrowserRouter>
     <TemplateDefault>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/customers' element={<CustomersList />} />
          <Route path='/customers/add' element={<CustomersRegister />} />
        </Routes>
      </TemplateDefault>
    </BrowserRouter>
  )
}

export default App
