import React from "react";
import { CreateButton, JoinButton } from "../index";
import { Container, Heading, Center, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Welcome = () => {

  const bg = useColorModeValue('#f78888', '#A16E83')

  return (
    <>
    <Center mt={10}>
      <Container id="welcome" w="600px" rounded='xl' boxShadow='lg' bg={bg} m='3' p='7' mt='10'>
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
