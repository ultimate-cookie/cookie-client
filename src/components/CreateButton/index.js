import React, { useState } from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";

const CreateButton = () => {

  const bg = useColorModeValue('#ffd0d0', '#D1A3B6')

  return (
    <>
      <Button 
      type="submit" 
      size="lg" 
      bg={bg} 
      m="3" 
      p="4"
      >
        Create Lobby
      </Button>
    </>
  );
};
export default CreateButton;
