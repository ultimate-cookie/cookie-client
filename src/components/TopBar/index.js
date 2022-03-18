import React from "react";
import {
  Flex,
  Image,
  IconButton,
  keyframes,
  Spacer,
  useColorMode,
  useColorModeValue,
  usePrefersReducedMotion
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
// import anime from "animejs/lib/anime.es.js";

import logo from "./cookie.png";
import { DarkMode } from "../";

// const newAnime = anime({
//   targets: ".pic",
//   translateX: 100,
//   duration: 1000,
//   easing: "linear",
//   direction: 'alternate'
// });

const spin = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
`;

// const travel = keyframes`
// 0%, 100% { left: 100% }
// 50% { left: 0% }
// `

const animation = ` ${spin} infinite 10s alternate linear`;

const TopBar = () => {
  const bg = useColorModeValue("#f78888", "#A16E83");
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Flex bg={bg} w="100%" h="55px" boxShadow="lg">
        <Image boxSize={55} className="pic" animation={animation} src={logo} />
        <Spacer />
        <IconButton
          icon={<MoonIcon />}
          variant="outline"
          onClick={toggleColorMode}
          mt={2}
          mx={4}
        />
      </Flex>
    </>
  );
};
export default TopBar;
