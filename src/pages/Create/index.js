import { Center } from "@chakra-ui/react";
import React from "react";
import { CreateLobby, QuizDetails } from "../../components";

const Create = ({ socket }) => {
  return (
    <>
      <Center>
        <CreateLobby socket={socket} />
      </Center>
    </>
  );
};
export default Create;
