import { Grid } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CustomerCard from '../components/CustomerCard'

const Customers = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then((response) => {
        const { data } = response.data

        setCustomers(data)
      })
  }, [])

  const handleDeleteCustomer = (id) => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        const newCustomersState = customers.filter(customer => customer.id !== id)

        setCustomers(newCustomersState)
      })
  }

  return (
    <>
      <h1>Customers</h1>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {
          customers.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <CustomerCard
                id={item.id}
                firstName={item.first_name}
                lastName={item.last_name}
                email={item.email}
                avatar={item.avatar}
                onDeleteCustomer={handleDeleteCustomer}
              />
            </Grid>
          ))
        }
      </Grid>
    </>
  )
}

export default Customers
