import React from 'react';
import { JoinButton } from '../components/index'
import {
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

const Signin = () => {
return(
<>
<FormControl w="350px" bg="#f78888" m='3' p='4'>
  <FormLabel htmlFor='username'></FormLabel>
  <Input isRequired id='username' placeholder='Username' bg="#ffd0d0"/>
  <FormLabel htmlFor='password'></FormLabel>
  <Input isRequired id='password' placeholder='Password' bg="#ffd0d0"/>
  <FormLabel htmlFor='lobbyname'></FormLabel>
  <Input isRequired id='lobbyname' placeholder='Lobby Name' bg="#ffd0d0" />
  <JoinButton />
</FormControl>
</>
)};
export default Signin;
