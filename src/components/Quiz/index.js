import React from "react";
import { Button, Text } from "@chakra-ui/react";

const Quiz = () => {
  return (
    <>
      <Text>Question 1: What is the true answer?</Text>
      <Button>(A) True</Button>
      <Button>(B) False</Button>
      <Button>Submit</Button>
    </>
  );
};

export default Quiz;
