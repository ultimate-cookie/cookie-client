import React from 'react';

import { Box } from '@chakra-ui/layout';
import { Image, keyframes, useColorModeValue, usePrefersReducedMotion } from '@chakra-ui/react'

import logo from './cookie.png'


const spin = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
`

const animation = `${spin} infinite 10s linear`

const TopBar = () => {

  const bg = useColorModeValue('#f78888', '#A16E83')

return(
<>
<Box bg={bg} w='100%' h='55px' boxShadow='lg'>
  <Image boxSize={55} animation={animation} src={logo} />
</Box>
</>
)};
export default TopBar;

