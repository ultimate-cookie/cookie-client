import React from 'react';
import { Button } from '@chakra-ui/react';

const StartButton = ({startQuiz}) => {
  return (
    <>
      <Button
        size='lg' 
        bg='#ffd0d0' 
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
