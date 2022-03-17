
import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: '#ffe4d5'|'#3C3741',
  useSystemColorMode: false,
  fonts: { 
    heading: 'Patrick Hand, sans-serif', 
    body: 'Patrick Hand, sans-serif'
  },
  
}

const theme = extendTheme({ config })

export default theme
