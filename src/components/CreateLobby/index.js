import React from 'react';
import { CreateButton } from '../index'
import {
  FormControl,
  FormLabel,
  Input,
  Center,
} from '@chakra-ui/react'
import { Container, Heading } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';

const CreateLobby = () => {
return(
<>
<Center mt={10}>
  <Container id='create' w="600px" rounded='xl' boxShadow='lg' bg="#f78888" m='3' p='7' mt='10'>
    <Center>
      <Heading>Create Lobby</Heading>
    </Center>
    <FormControl>
      <FormLabel htmlFor='username'></FormLabel>
      <Input isRequired className='username' placeholder='Username' bg="#ffd0d0"/>
      <FormLabel htmlFor='password'></FormLabel>
      <Input isRequired className='password' placeholder='Password' bg="#ffd0d0"/>
      <FormLabel htmlFor='lobbyname'></FormLabel>
      <Input isRequired className='lobbyname' placeholder='Lobby Name' bg="#ffd0d0" />
      <Center>
        <CreateButton />
      </Center>
    </FormControl>
  </Container>
</Center>
</>
)};
export default CreateLobby;
