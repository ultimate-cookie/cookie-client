import React from "react";
// import { Switch, Route } from 'react-router-dom';
import "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  // JoinButton,
  // CreateButton,
  CreateLobby,
  JoinLobby,
  QuizDetails,
  Welcome,
  NavBar,
} from "./components";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Link to="/">
        <NavBar />
      </Link>
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
        {/*
        <Route path="/lobby">
          <Lobby />
        </Route>
        <Route path="/play">
          <Quiz />
        </Route>
        <Route path="/endScreen">
          <Roundup>
        </Route>
    */}
      </Switch>
      {/* <div>
		<NavBar />
				<Switch>
						<Route exact path="/" />
						<Route path="/abc" />
						<Route path="/xyz" />
				</Switch>
	</div> */}
    </Router>
  );
}

export default App;
