import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { DividerWithText, Link, LoginForm, Logo } from 'components'

function Login() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="100vh"
      py="1"
      px={{ base: '4', lg: '8' }}
      
    >
      <Box
          bg={useColorModeValue('white', 'gray.700')}
          py="4"
          px={{ base: '4', md: '10' }}
          mx="auto"
          shadow="base"
          width="65%"
          rounded={{ sm: 'lg' }}
          alignItems="center"
        >
        <Logo  h="5" mb={{ base: '10', md: '5' }} />
        <Heading size="lg" fontWeight="extrabold">
          Welcome to Envelope
        </Heading>
        <Text mt="2" mb="4" align="left" maxW="md" color="gray.500" fontWeight="medium">
          <Text as="span">Enter your info to get started</Text>
        </Text>
        <SimpleGrid mt="6" spacing="3">
          <Button color="currentColor" variant="outline">
              <FaGoogle color="#B23121"/><Text ml={2}>Login with Google</Text> 
            </Button>
            <Button color="currentColor" variant="outline">
              <FaFacebook color='blue' /><Text ml={2}>Login with Facebook</Text> 
            </Button>
          </SimpleGrid>
          <DividerWithText my="4">OR</DividerWithText>
          <LoginForm />
        </Box>
        <Text mt="4" mx="auto" align="center" maxW="sm" fontWeight="medium">
          <Text as="span">Already have an account?</Text>
          <Link href="#">Log in to Chakra</Link>
        </Text>
      </Box>
    
  );
}

export default Login;