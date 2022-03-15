import React from 'react';
import { CreateButton, JoinButton } from '../index';
import { Container, Heading } from '@chakra-ui/layout';

const Welcome = () => {
return(
<>
<Container id='welcome' w="350px" bg="#f78888" m='3' p='4'>
  <Heading>Welcome to the Ultimate Cookie Quiz</Heading>
  <JoinButton />
  <CreateButton />
</Container>
</>
)};
export default Welcome;
