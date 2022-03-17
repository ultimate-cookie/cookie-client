import React from "react";
import { Button } from "@chakra-ui/button";

const JoinButton = () => {
  return (
    <>
      <Button
        size="lg"
        bg="#ffd0d0"
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
