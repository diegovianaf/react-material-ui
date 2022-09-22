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

  return (
    <>
      <h1>Customers</h1>
      {
        customers.map((item) => (
          <CustomerCard
            key={item.id}
            firstName={item.first_name}
            lastName={item.last_name}
            email={item.email}
            avatar={item.avatar}
          />
        ))
      }
    </>
  )
}

export default Customers
