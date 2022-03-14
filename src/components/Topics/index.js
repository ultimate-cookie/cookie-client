import React from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import CreateButton from '../CreateButton';

const Topics = () => {
return(
<>
<FormControl w="350px" bg="#f78888" m='3' p='4'>
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
</>
)};
export default Topics;
