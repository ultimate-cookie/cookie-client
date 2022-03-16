import React from 'react';

import { Box } from '@chakra-ui/layout';
import { Image, keyframes, usePrefersReducedMotion } from '@chakra-ui/react'

import logo from './cookie.png'


const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const TopBar = () => {
return(
<>
<Box bg="#f78888" w='100%' h='55px' boxShadow='lg'>
  <Image boxSize={55} src={logo} w='' />
  
</Box>
</>
)};
export default TopBar;



function Example() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} infinite 20s linear`

  return <Image animation={animation} src={logo} {...props} />
}
