import React, { useState } from "react";
import {
  Button,
  Container,
  Text,
  RadioGroup,
  Radio,
  Stack,
  Center,
  useColorModeValue,
  Heading
} from "@chakra-ui/react";
const Quiz = ({ questions }) => {
  const [quiz, setQuiz] = useState({});
  const [results, setResults] = useState("");
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#answer-12646864
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // End SO
  const renderOptions = (options, property) => {
    const optionList = [];
    for (const option of options) {
      optionList.push(
        <Radio key={option} id={property + "_" + option} value={option}>
          {option}
        </Radio>
      );
    }
    return <Stack direction="row">{optionList}</Stack>;
  };

  const renderQuestions = () => {
    const questionList = [];
    const bg = useColorModeValue("#f78888", "#A16E83");
    const input = useColorModeValue("#ffd0d0", "#D1A3B6");

    for (const property in questions) {
      const thisQ = questions[property];
      const options = shuffleArray([
        thisQ.correct_answer,
        ...thisQ.incorrect_answers
      ]);
      questionList.push(
        <Center mt={10}>
          <Container
            key={property}
            w="600px"
            rounded="xl"
            boxShadow="lg"
            bg={bg}
            m="3"
            p="7"
            mt="10"
          >
            <Center>
              <Heading align="center" w={450} p={4}>
                Question {parseInt(property) + 1}: {thisQ.question}
              </Heading>
            </Center>
            <Center>
              <RadioGroup
                fontWeight='bold'
                m={5}
                onChange={(e) => {
                  const thisArray = quiz;
                  thisArray[property] = e;
                  setQuiz(thisArray);
                }}
              >
                {renderOptions(options, property)}
              </RadioGroup>
            </Center>
          </Container>
        </Center>
      );
    }
    return (
      <>
        {questionList}
        <Center mt={10}>
          <Button m={3} p={4} bg={input} onClick={submitResults}>
            Submit
          </Button>
        </Center>
      </>
    );
  };

  const submitResults = () => {
    let score = 0;
    const maxScore = questions.length;
    for (const key in quiz) {
      if (quiz[key] === questions[key].correct_answer) {
        score++;
      }
    }
    const results = `You scored ${score} out of ${maxScore}`;
    setResults(results);
    console.log(results);
  };

  const bg = useColorModeValue("#f78888", "#A16E83");

  return (
    <>
      {results ? (
        <Center mt={10}>
          <Container
            id="create"
            w="600px"
            rounded="xl"
            boxShadow="lg"
            bg={bg}
            m="3"
            p="7"
            mt="10"
          >
            <Center> 
              <Heading>{results}</Heading>
            </Center>
          </Container>
        </Center>
      ) : (
        <>{renderQuestions()}</>
      )}
    </>
  );
};

export default Quiz;
