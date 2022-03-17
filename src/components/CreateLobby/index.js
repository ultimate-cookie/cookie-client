import React from "react";
import { CreateButton } from "../index";
import { FormControl, FormLabel, Input, Center, Select } from "@chakra-ui/react";
import { Container, Heading, Text } from "@chakra-ui/layout";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import { quizReducer } from "../../reducers";
import { render } from "react-dom";

const CreateLobby = ({ socket }) => {
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");
  const [redirect, setRedirect] = useState(false);

  // create lobby event listener
  const onSubmitEvent = (e) => {
    e.preventDefault();

    // send lobby name and username
    socket.emit("joinLobby", { username, room });
    // send quiz info
    socket.emit("createLobby", {
      category: 11,
      difficulty: "medium",
      amount: 10
    });
    setRedirect(true);
  };

  return (
    <>
      {redirect ? <Redirect to="/lobby" /> : undefined}
      <Center mt={10}>
        <Container
          id="create"
          w="600px"
          rounded="xl"
          boxShadow="lg"
          bg="#f78888"
          m="3"
          p="7"
          mt="10"
        >
          <Center>
            <Heading p={3}>Create Lobby</Heading>
          </Center>
          <form onSubmit={(e) => onSubmitEvent(e)}>
            <FormControl p={6}>
              <FormLabel htmlFor="username"></FormLabel>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                isRequired
                className="username"
                placeholder="Username"
                bg="#ffd0d0"
              />
              <FormLabel htmlFor="lobbyname"></FormLabel>
              <Input
                onChange={(e) => setRoom(e.target.value)}
                value={room}
                isRequired
                className="lobbyname"
                placeholder="Lobby Name"
                bg="#ffd0d0"
              />
             
                <FormLabel htmlFor='topics'></FormLabel>
                <Select id='topics' placeholder='Pick a topic!' bg="#ffd0d0">
                  <option>All</option>
                </Select>
                <FormLabel htmlFor='difficulty'></FormLabel>
                <Select id='difficulty' placeholder='Select difficulty' bg="#ffd0d0">
                  <option>All</option>
                </Select>
                  <FormLabel htmlFor='timelimit'></FormLabel>
                <Select id='timelimit' placeholder='Timelimit?' bg="#ffd0d0">
                  <option>All</option>
                </Select>
              <Center pt={8}>
                <CreateButton />
              </Center>
            </FormControl>
          </form>
        </Container>
      </Center>
    </>
  );
};
export default CreateLobby;
