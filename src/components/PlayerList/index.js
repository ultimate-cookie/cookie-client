import { Center, Container, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Player, StartButton } from "../index";
import { Text, useColorModeValue } from "@chakra-ui/react";

const PlayerList = ({ socket }) => {
  const [redirect, setRedirect] = useState(false);
  const [players, setPlayers] = useState([]);
  const startQuiz = () => {
    socket.emit("startQuiz", "Please start the quiz");
    setRedirect(true);
  };
  socket.on("lobbyPlayers", (playerList) => {
    setPlayers(playerList);
  });

  const renderPlayers = () => {
    const playerList = [];
    for (const player of players) {
      playerList.push(
        <Text bg="#ffd0d0" key={player}>
          {player}
        </Text>
      );
    }
    return <>{playerList}</>;
  };

  const bg = useColorModeValue("#f78888", "#A16E83");


  return (
    <>
      {redirect ? <Redirect to="/play" /> : undefined}
      <Center mt={10}>
        <Container
          id="play"
          w="600px"
          rounded="xl"
          boxShadow="lg"
          bg={bg}
          m="3"
          p="7"
          mt="10"
        >
          <Center>
            <Heading p={3}>Player List</Heading>
          </Center>
          {renderPlayers()}
          <Center>
            <StartButton startQuiz={startQuiz} />
          </Center>
        </Container>
      </Center>
    </>
  );
};

export default PlayerList;
