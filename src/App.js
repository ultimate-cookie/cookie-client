import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { io } from "socket.io-client";

import { TopBar, Roundup, JoinLobby, PlayerList } from "./components";

import { Home, Create, Game } from "./pages";

const socket = io("http://localhost:7001");
function App() {
  const [questions, setQuestions] = useState([]);
  socket.on("playerList", (str) => {
    // append new users to playerList
  });
  socket.on("quizQuestions", (newQuiz) => {
    console.log(newQuiz);
    if (newQuiz === null) {newQuiz = [];}
    setQuestions(newQuiz);
    // create quiz out of this data
  });
  return (
    <>
      <TopBar />
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
