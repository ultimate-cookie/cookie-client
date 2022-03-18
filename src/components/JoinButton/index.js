import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";

const JoinButton = () => {

  const bg = useColorModeValue('#ffd0d0', '#D1A3B6')

  return (
    <>
      <Button
        size="lg"
        bg={bg}
        m="3"
        p="4"
        type="submit"
      >
        Join Lobby
      </Button>
    </>
  );
};

export default JoinButton;
