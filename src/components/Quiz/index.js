import React from "react";
import {
  Button,
  Container,
  Text,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";

const Quiz = ({ questions }) => {
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#answer-12646864
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // End SO
  const renderOptions = (options) => {
    const optionList = [];
    console.log(options);
    for (const option of options) {
      optionList.push(
        <Radio key={option} value={option}>
          {option}
        </Radio>
      );
    }
    return (
      <RadioGroup>
        <Stack direction="row">{optionList}</Stack>
      </RadioGroup>
    );
  };
  const renderQuestions = () => {
    const questionList = [];
    for (const property in questions) {
      const thisQ = questions[property];
      const options = shuffleArray([
        thisQ.correct_answer,
        ...thisQ.incorrect_answers,
      ]);
      questionList.push(
        <Container key={property}>
          <Text>
            Question {parseInt(property) + 1}: {thisQ.question}
          </Text>
          {renderOptions(options)}
        </Container>
      );
    }
    return <>{questionList}</>;
  };
  return (
    <>
      <Text>Question 1: What is the true answer?</Text>
      <Button>(A) True</Button>
      <Button>(B) False</Button>
      <Button>Submit</Button>
      {renderQuestions()}
    </>
  );
};

export default Quiz;
