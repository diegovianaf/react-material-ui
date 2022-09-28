import { Container } from '@mui/material'
import Header from '../partials/Header'

const TemplatePage = ({ children }) => {
  return (
    <>
      <Header />
      <Container sx={{ padding: '12px 0' }}>
        {children}
      </Container>
    </>
  )
}

export default TemplatePage
