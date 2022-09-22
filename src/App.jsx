import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TemplateDefault from './templates/TemplateDefault'

function App() {
  return (
    <TemplateDefault>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </TemplateDefault>
  )
}

export default App
