import { Container } from '@mui/material'
import Header from '../partials/Header'
import useAuth from '../state/auth'

const TemplatePage = ({ children }) => {
  const { user } = useAuth()

  return (
    <>
      <Header user={user} />
      <Container sx={{ padding: '12px 0' }}>
        {children}
      </Container>
    </>
  )
}

export default TemplatePage
