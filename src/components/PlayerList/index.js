import { Center, Container, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Player, StartButton } from "../index";

const PlayerList = ({ socket }) => {
  const [redirect, setRedirect] = useState(false);
  const startQuiz = () => {
    socket.emit("startQuiz", "Please start the quiz");
    setRedirect(true);
  };
  return (
    <>
      {redirect ? <Redirect to="/play" /> : undefined}
      <Center mt={10}>
        <Container id="play"
          w="600px"
          rounded="xl"
          boxShadow="lg"
          bg="#f78888"
          m="3"
          p="7"
          mt="10">
            <Center>
              <Heading p={3}>Player List</Heading>
            </Center>
          <Player />
          <Center>
            <StartButton startQuiz={startQuiz} />
          </Center>
        </Container>
      </Center>
    </>
  );
};

export default PlayerList;
