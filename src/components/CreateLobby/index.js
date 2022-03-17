import React from "react";
import { CreateButton } from "../index";
import { FormControl, FormLabel, Input, Center, Select } from "@chakra-ui/react";
import { Container, Heading, Text } from "@chakra-ui/layout";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import { render } from "react-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const CreateLobby = ({ socket }) => {
  const [room, setRoom] = useState("");
  const [username, setUsername] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [topics, setTopics] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const fetchTopics = async () => {
    const { data } = await axios.get("https://opentdb.com/api_category.php");
    setTopics(data.trivia_categories);
  };
  useEffect(fetchTopics, []);

  const renderTopics = () => {
    const topicList = [];
    for (const topic of topics) {
      topicList.push(
        <option key={topic.id} value={topic.id}>
          {topic.name}
        </option>
      );
    }
    return <>{topicList}</>;
  };

  const renderAmounts = () => {
    const amounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const amountList = [];
    for (const num of amounts) {
      amountList.push(
        <option key={num} value={num}>
          {num}
        </option>
      );
    }
    return <>{amountList}</>;
  };

  // create lobby event listener
  const onSubmitEvent = (e) => {
    e.preventDefault();

    // send lobby name and username
    socket.emit("joinLobby", { username, room });
    // send quiz info
    socket.emit("createLobby", {
      category,
      difficulty,
      amount
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
<<<<<<< HEAD
              <FormLabel htmlFor="topics"></FormLabel>
              <Select
                id="topics"
                placeholder="Pick a topic!"
                bg="#ffd0d0"
                onChange={(e) => setCategory(e.target.value)}
              >
                {renderTopics()}
              </Select>
              <FormLabel htmlFor="difficulty"></FormLabel>
              <Select
                id="difficulty"
                placeholder="Select difficulty"
                bg="#ffd0d0"
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option key="0" value="easy">
                  easy
                </option>
                <option key="1" value="medium">
                  medium
                </option>
                <option key="2" value="hard">
                  hard
                </option>
              </Select>
              <FormLabel htmlFor="amount"></FormLabel>
              <Select
                id="amount"
                placeholder="Number of Questions?"
                bg="#ffd0d0"
                onChange={(e) => setAmount(e.target.value)}
              >
                {renderAmounts()}
              </Select>
=======
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
>>>>>>> 6cfded5f402e962bbef9209758ac3b56b86b7a98
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
