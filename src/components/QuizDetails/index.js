import React from 'react';
import { FormControl, FormLabel, Select, Container, Heading, Center,  } from '@chakra-ui/react';
import CreateButton from '../CreateButton';


const QuizDetails = () => {
return(
<>
<Center mt={10}>
  <Container w="600px" rounded='xl' boxShadow='lg' bg="#f78888" m='3' p='7' mt='10'>
    <Center> 
      <Heading p={3}>Quiz Details</Heading>
    </Center>
    <FormControl p={4}>
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
      <Center pt={8}> 
        <CreateButton />
      </Center>
    </FormControl>
  </Container>
</Center>

</>
)};
export default QuizDetails;
