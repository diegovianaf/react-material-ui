import { Container } from '@mui/material'

const Clean = ({ children }) => {
  return (
    <>
      <Container sx={{ padding: '12px 0' }}>
        {children}
      </Container>
    </>
  )
}

export default Clean
