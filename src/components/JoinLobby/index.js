import React, { useState } from "react";
import { JoinButton } from "../index";
import { FormControl, FormLabel, Input, Center } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";
import { Redirect } from "react-router-dom";

const JoinLobby = ({ socket }) => {
  const [username, setUsername] = useState("");
  const [roomName, setRoomName] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onSubmitEvent = (e) => {
    e.preventDefault();
    console.log("this is the user", username);
    console.log("this is the room name", roomName);
    socket.emit("joinLobby", { username, room: roomName });
    setRedirect(true);
  };


  return (
    <>
      {redirect ? <Redirect to="/lobby" /> : undefined}
      <Center mt={10}>
        <Container
          id="join"
          w="600px"
          rounded="xl"
          boxShadow="lg"
          bg="#f78888"
          m="3"
          p="7"
          mt="10"
        >
          <Center>
            <Heading p={3}>Join Lobby</Heading>
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
                onChange={(e) => setRoomName(e.target.value)}
                value={roomName}
                isRequired
                className="lobbyname"
                placeholder="Lobby Name"
                bg="#ffd0d0"
              />
              <Center pt={8}>
                <JoinButton />
              </Center>
            </FormControl>
          </form>
        </Container>
      </Center>
    </>
  );
};
export default JoinLobby;
