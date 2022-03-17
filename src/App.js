import React, { useEffect, useState } from "react";
// import { Switch, Route } from 'react-router-dom';
//import "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
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
<<<<<<< HEAD
      <TopBar />
      <DarkMode />
      <Router>
        {questions.length > 0 ? <Redirect to="/play" /> : undefined}
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
            <Quiz questions={questions} />
          </Route>
          <Route path="/endScreen">
            <Roundup />
          </Route>
        </Switch>
      </Router>
=======
      <div id='root' style={{backgroundColor: '#ffe4d5'}}>
        <TopBar />
        {/* <DarkMode /> */}
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
      </div>
>>>>>>> dd392ff (welcome page complete)
    </>
  );
}

export default App;
