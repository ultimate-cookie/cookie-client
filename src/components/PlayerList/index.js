import { Box, Center, Container, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { StartButton } from "../index";
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";

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
        <Box bg={person} rounded="xl">
          <Center>
            <Text key={player}>{player}</Text>
          </Center>
        </Box>
      );
    }
    return <>{playerList}</>;
  };

  const bg = useColorModeValue("#f78888", "#A16E83");
  const person = useColorModeValue("#ffd0d0", "#D1A3B6");

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
          <SimpleGrid p={6} columns={2} spacing={5}>
            {renderPlayers()}
          </SimpleGrid>
          <Center pt={8}>
            <StartButton startQuiz={startQuiz} />
          </Center>
        </Container>
      </Center>
    </>
  );
};

export default PlayerList;
