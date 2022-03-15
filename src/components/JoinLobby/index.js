import React from "react";
import { JoinButton } from "../index";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Container, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const JoinLobby = () => {
  return (
    <>
      <Container id="join" w="350px" bg="#f78888" m="3" p="4">
        <Heading>Join Lobby</Heading>
        <FormControl>
          <FormLabel htmlFor="username"></FormLabel>
          <Input isRequired id="username" placeholder="Username" bg="#ffd0d0" />
          <FormLabel htmlFor="password"></FormLabel>
          <Input isRequired id="password" placeholder="Password" bg="#ffd0d0" />
          <FormLabel htmlFor="lobbyname"></FormLabel>
          <Input
            isRequired
            id="lobbyname"
            placeholder="Lobby Name"
            bg="#ffd0d0"
          />
          <Link to="/lobby">
            <JoinButton />
          </Link>
        </FormControl>
      </Container>
    </>
  );
};
export default JoinLobby;
