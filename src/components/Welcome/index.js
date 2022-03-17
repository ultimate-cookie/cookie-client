import React from "react";
import { CreateButton, JoinButton } from "../index";
import { Container, Heading, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
    <Center mt={10}>
      <Container id="welcome" w="600px" rounded='xl' boxShadow='lg' bg="#f78888" m='3' p='7' mt='10'>
        <Center p={7}>
        <Heading align='center' w={400} p={4}>Welcome to the Ultimate Cookie Quiz</Heading>
        </Center>
        <Center my={5}>
          <Link to="/join">
            <JoinButton />
          </Link>
          <Link to="/create">
            <CreateButton />
          </Link>
        </Center>

      </Container>
    </Center>
    </>
  );
};
export default Welcome;
