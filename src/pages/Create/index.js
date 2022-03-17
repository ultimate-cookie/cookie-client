import { Center } from '@chakra-ui/react';
import React from 'react';
import { CreateLobby, QuizDetails } from '../../components';

const Create = () => {
return(
<>
<Center>
  <CreateLobby />
  <QuizDetails />
</Center>
</>
)};
export default Create;
