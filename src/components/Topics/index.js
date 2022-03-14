import React from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';

const Topics = () => {
return(
<>
<FormControl>
  <FormLabel htmlFor='topics'>Topics</FormLabel>
  <Select id='topics' placeholder='Pick a topic!'>
    <option>All</option>
  </Select>
  <FormLabel htmlFor='difficulty'>Difficulty</FormLabel>
  <Select id='difficulty' placeholder='Select difficulty'>
    <option>All</option>
    <FormLabel htmlFor='timelimit'>Timelimit</FormLabel>
  <Select id='timelimit' placeholder='How long?'>
    <option>All</option>
  </Select>
  </Select>
</FormControl>
</>
)};
export default Topics;
