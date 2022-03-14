import React from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';

const Topics = () => {
return(
<>
<FormControl>
  <FormLabel htmlFor='country'>Country</FormLabel>
  <Select id='country' placeholder='Select country'>
    <option>United Arab Emirates</option>
    <option>Nigeria</option>
  </Select>
</FormControl>
</>
)};
export default Topics;
