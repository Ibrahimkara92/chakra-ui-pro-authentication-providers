import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    HTMLChakraProps,
    Input,
    SimpleGrid,
    Stack,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { PasswordField } from "components";
  
const LoginForm = () => (
  
      <SimpleGrid column={1} spacing="5">
        <FormControl id="Name">
          <FormLabel>Name</FormLabel>
          <Input name="name" type="text" autoComplete="name" required />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" autoComplete="email" required />
        </FormControl>
        <PasswordField />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Create my account
        </Button>
      </SimpleGrid>
  )

  export default LoginForm;
  