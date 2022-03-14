import React from 'react';
import { Button } from '@chakra-ui/button';

const JoinButton = () => {
  return(
  <>
  <Button colorScheme="blue" size="lg" variant='ghost'>Join Lobby</Button>

  </>
)};

const CreateButton = () => {
  return(
  <>
  <Button colorScheme="blue" size="lg" variant='ghost'>Create Lobby</Button>
  
  </>
  )};

export default { JoinButton, CreateButton };
