import { Grid } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserCard from '../../components/UserCard'

const List = () => {
  const navigate = useNavigate()

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then((response) => {
        const { data } = response.data

        setUsers(data)
      })
  }, [])

  const handleDeleteUser = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        const newUsersState = users.filter(user => user.id !== id)

        setUsers(newUsersState)
      })
  }

  const handleEditUser = (id) => {
    navigate(`/users/edit/${id}`)
  }

  return (
    <>
      <h2>Users List</h2>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {
          users.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <UserCard
                id={item.id}
                firstName={item.first_name}
                lastName={item.last_name}
                email={item.email}
                avatar={item.avatar}
                onDeleteUser={handleDeleteUser}
                onEditUser={handleEditUser}
              />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default List
