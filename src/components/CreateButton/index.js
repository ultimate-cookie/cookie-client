import React, { useState } from "react";
import { Button } from "@chakra-ui/button";

const CreateButton = () => {
  return (
    <>
      <Button 
      type="submit" 
      size="lg" 
      bg="#ffd0d0" 
      m="3" 
      p="4"
      >
        Create Lobby
      </Button>
    </>
  );
};
export default CreateButton;
