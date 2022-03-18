import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  initialColorMode: 'system',
  useSystemColorMode: false,
  fonts: { 
    heading: 'Patrick Hand, sans-serif', 
    body: 'Patrick Hand, sans-serif'
  },
  
}

const theme = extendTheme({ 
  config, 
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#ffe4d5','#3C3741')
        (props),
      }
    })
  }
})

export default theme
