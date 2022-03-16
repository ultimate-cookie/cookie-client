import React, { useEffect } from "react";
// import { Switch, Route } from 'react-router-dom';
import "@chakra-ui/react";
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
} from "./components";

function App() {
  const connect = () => {
    const socket = io("http://localhost:7000");
  };

  useEffect(() => {
    console.log("useEffect before");
    connect();
    console.log("useEffect after");
  }, []);

  return (
    <>
      <TopBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/create">
            <CreateLobby />
            <QuizDetails />
          </Route>
          <Route path="/join">
            <JoinLobby />
          </Route>
          <Route path="/lobby">
            <PlayerList />
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
