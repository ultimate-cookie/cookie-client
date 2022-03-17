import { Button, useColorModeValue, useColorMode, Box } from '@chakra-ui/react';
import React from 'react';

const DarkMode = () => {
  
const { toggleColorMode } = useColorMode()


const body = useColorModeValue('red.500', 'red.200')
const bg = useColorModeValue('red.500', 'red.200')
const bg1 = useColorModeValue('red.500', 'red.200')
const color = useColorModeValue('white', 'gray.800')
const color1 = useColorModeValue('white', 'gray.800')

return (
<>
  <Box mb={4} bg={bg} color={color}>
    This box's style will change based on the color mode.
  </Box>
  <Button size='sm' onClick={toggleColorMode}>
    Toggle Mode
  </Button>
</>
)};

export default DarkMode;
