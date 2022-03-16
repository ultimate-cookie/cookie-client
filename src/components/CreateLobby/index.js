import React from "react";
import { CreateButton } from "../index";
import { FormControl, FormLabel, Input, Center } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { io } from "socket.io-client";
import { quizReducer } from "../../reducers";

const CreateLobby = ({ socket }) => {
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");

  // create lobby event listener
  const onSubmitEvent = (e) => {
    e.preventDefault();

    // get lobby name and username
    socket.emit("joinLobby", { username, room });

    socket.on("message", ({ username, room }) => {
      console.log({ username, room });
    });
  };

  return (
    <>
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
            <Heading>Create Lobby</Heading>
          </Center>
          <form onSubmit={(e) => onSubmitEvent(e)}>
            <FormControl>
              <FormLabel htmlFor="username"></FormLabel>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                isRequired
                className="username"
                placeholder="Username"
                bg="#ffd0d0"
              />
              {/* <FormLabel htmlFor="password"></FormLabel>
            <Input
              isRequired
              className="password"
              placeholder="Password"
              bg="#ffd0d0"
            /> */}
              <FormLabel htmlFor="lobbyname"></FormLabel>
              <Input
                onChange={(e) => setRoom(e.target.value)}
                value={room}
                isRequired
                className="lobbyname"
                placeholder="Lobby Name"
                bg="#ffd0d0"
              />
              <Center>
                <CreateButton />
                {/* <Link to="/lobby">
                </Link> */}
              </Center>
            </FormControl>
          </form>
        </Container>
      </Center>
    </>
  );
};
export default CreateLobby;
