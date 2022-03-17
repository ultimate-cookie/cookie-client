
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: { 
    heading: 'Patrick Hand, sans-serif', 
    body: 'Patrick Hand, sans-serif'
  },
  
}

const theme = extendTheme({ config })

export default theme
