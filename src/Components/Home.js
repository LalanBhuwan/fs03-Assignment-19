import React from 'react'
import {Container,Box,Heading} from '@chakra-ui/react'
function Home() {
  return (
    <Container maxW='98%' bg='blue.600' centerContent style={{border:"1px solid black",margin:"20px",padding:"20px"}}>
        <Heading>Home Component</Heading>
  <Box padding='4' bg='white' color='black' maxW='md' >
  Chakra UI works in your favorite framework. We've put together step-by-step guides for these frameworks:
  </Box>
  <Box padding='4' bg='white' color='black' maxW='md' >
  One of the biggest causes of the large initial JS payload is the size of the component themes. With this approach, you get to apply the theme for just the component you need by using
  </Box>
</Container>
  )
}

export default Home