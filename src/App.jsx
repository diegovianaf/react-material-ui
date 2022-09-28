import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import UsersEdit from './pages/users/Edit'
import UsersList from './pages/users/List'
import UsersRegister from './pages/users/Register'
import Clean from './templates/Clean'
import TemplatePage from './templates/TemplatePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <TemplatePage>
              <Home />
            </TemplatePage>
          }
        />
        <Route
          path='/users'
          element={
            <TemplatePage>
              <UsersList />
            </TemplatePage>
          }
        />
        <Route
          path='/users/add'
          element={
            <TemplatePage>
              <UsersRegister />
            </TemplatePage>
          }
        />
        <Route
          path='/users/edit/:id'
          element={
            <TemplatePage>
              <UsersEdit />
            </TemplatePage>
          }
        />
        <Route
          path='/login'
          element={
            <Clean>
              <Login />
            </Clean>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
