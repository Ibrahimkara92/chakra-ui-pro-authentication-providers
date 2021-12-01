import React from 'react';
import { Login,LoginProviders } from 'components';
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'

function App() {
  return (
    <Flex
      bg='gray.50'
      flexDir="row"
      height="100vh"
     >
      <Box w="100%" >
        <Login />
      </Box>
      <Box >
        <LoginProviders/>
      </Box>

    </Flex>

  );
}

export default App;
