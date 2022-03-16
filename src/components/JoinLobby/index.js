import React from 'react';
import { JoinButton } from '../index'
import {
  FormControl,
  FormLabel,
  Input,
  Center
} from '@chakra-ui/react'
import { Container, Heading } from '@chakra-ui/layout';

const JoinLobby = () => {
return(
<>
<Center mt={10}>

  <Container id='join' w="600px" rounded='xl' boxShadow='lg' bg="#f78888" m='3' p='7' mt='10' >
    <Center>
      <Heading>Join Lobby</Heading>
    </Center>
    <FormControl>
      <FormLabel htmlFor='username'></FormLabel>
      <Input isRequired className='username' placeholder='Username' bg="#ffd0d0"/>
      <FormLabel htmlFor='password'></FormLabel>
      <Input isRequired className='password' placeholder='Password' bg="#ffd0d0"/>
      <FormLabel htmlFor='lobbyname'></FormLabel>
      <Input isRequired className='lobbyname' placeholder='Lobby Name' bg="#ffd0d0" />
      <Center>
        <JoinButton />
      </Center>
    </FormControl>
  </Container>
</Center>
</>
)};
export default JoinLobby;
