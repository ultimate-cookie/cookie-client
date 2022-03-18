import React from "react";
import { ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Router>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App style="background-color: #ffe4d5" />
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);
