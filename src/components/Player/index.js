import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

const Player = () => {
  const bg = useColorModeValue('#ffd0d0', '#D1A3B6')
  return(
    <Text bg={bg}></Text>
  )

};

export default Player;
