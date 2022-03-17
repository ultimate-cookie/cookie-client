import React, { useEffect } from "react";
// import { Switch, Route } from 'react-router-dom';
// import {  } "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { io } from "socket.io-client";

import {
  // JoinButton,
  // CreateButton,
  TopBar,
  Roundup,
  CreateLobby,
  JoinLobby,
  QuizDetails,
  Welcome,
  PlayerList,
  Quiz,
  DarkMode
} from "./components";
// import { DarkMode } from "@chakra-ui/react";

const socket = io("http://localhost:7000");
function App() {
  socket.on("playerList", (str) => {
    console.log(str);
    // append new users to playerList
  });
  socket.on("quizQuestions", (str) => {
    console.log(str);
    // create quiz out of this data
  });
  return (
    <>
    {/* <DarkMode /> */}
      <TopBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/create">
            <CreateLobby socket={socket} />
            <QuizDetails />
          </Route>
          <Route path="/join">
            <JoinLobby socket={socket} />
          </Route>
          <Route path="/lobby">
            <PlayerList socket={socket} />
          </Route>
          <Route path="/play">
            <Quiz />
          </Route>
          <Route path="/endScreen">
            <Roundup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
