import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UsersEdit from './pages/users/Edit'
import UsersList from './pages/users/List'
import UsersRegister from './pages/users/Register'
import TemplatePage from './templates/TemplatePage'

function App() {
  return (
    <BrowserRouter>
      <TemplatePage>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UsersList />} />
          <Route path='/users/add' element={<UsersRegister />} />
          <Route path='/users/edit/:id' element={<UsersEdit />} />
        </Routes>
      </TemplatePage>
    </BrowserRouter>
  )
}

export default App
