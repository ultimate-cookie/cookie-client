import React from 'react';
import { Button, useColorModeValue } from '@chakra-ui/react';

const StartButton = ({startQuiz}) => {

  const bg = useColorModeValue('#ffd0d0', '#D1A3B6')

  return (
    <>
      <Button
        size='lg' 
        bg={bg} 
        m='3' 
        p='4' 
        onClick={startQuiz}
      >
        Start Quiz
      </Button>
    </>
  );
};

export default StartButton;
