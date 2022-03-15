import React from 'react';
import { FormControl, FormLabel, Select, Container, Heading } from '@chakra-ui/react';
import CreateButton from '../CreateButton';


const QuizDetails = () => {
return(
<>
<Container w="350px" bg="#f78888" m='3' p='4'>
  <Heading>Quiz Details</Heading>
  <FormControl>
    <FormLabel htmlFor='topics'></FormLabel>
    <Select id='topics' placeholder='Pick a topic!' bg="#ffd0d0">
      <option>All</option>
    </Select>
    <FormLabel htmlFor='difficulty'></FormLabel>
    <Select id='difficulty' placeholder='Select difficulty' bg="#ffd0d0">
      <option>All</option>
    </Select>
      <FormLabel htmlFor='timelimit'></FormLabel>
    <Select id='timelimit' placeholder='Timelimit?' bg="#ffd0d0">
      <option>All</option>
    </Select>
    <CreateButton />
  </FormControl>
</Container>
</>
)};
export default QuizDetails;
