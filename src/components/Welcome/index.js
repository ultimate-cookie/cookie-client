import React from "react";
import { CreateButton, JoinButton } from "../index";
import { Container, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Container id="welcome" w="350px" bg="#f78888" m="3" p="4">
        <Heading>Welcome to the Ultimate Cookie Quiz</Heading>
        <Link to="/join">
          <JoinButton />
        </Link>
        <Link to="/create">
          <CreateButton />
        </Link>
      </Container>
    </>
  );
};
export default Welcome;
