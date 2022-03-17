import React, { useEffect, useState } from "react";
// import { Switch, Route } from 'react-router-dom';
//import "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { io } from "socket.io-client";

import { TopBar, Roundup, JoinLobby, PlayerList, DarkMode } from "./components";

import { Home, Create, Game } from "./pages";

const socket = io("http://localhost:7000");
function App() {
  const [questions, setQuestions] = useState([]);
  socket.on("playerList", (str) => {
    // append new users to playerList
  });
  socket.on("quizQuestions", (newQuiz) => {
    console.log(newQuiz);
    setQuestions(newQuiz);
    // create quiz out of this data
  });
  return (
    <>
      <TopBar />
      <DarkMode />
      <Router>
        {questions.length > 0 ? <Redirect to="/play" /> : undefined}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create socket={socket} />
          </Route>
          <Route path="/join">
            <JoinLobby socket={socket} />
          </Route>
          <Route path="/lobby">
            <PlayerList socket={socket} />
          </Route>
          <Route path="/play">
            <Game questions={questions} />
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
