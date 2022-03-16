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
	TopBar,
  PlayerList,
  Quiz,
} from './components';

function App() {
return (
<>
	<TopBar />
	<CreateLobby />
	{/* <JoinLobby /> */}
	<QuizDetails />
	{/* <Welcome /> */}

  <Router>
    <Link to="/">
      <TopBar />
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
      <Route path="/lobby">
        <PlayerList />
      </Route>
      <Route path="/play">
        <Quiz />
      </Route>
    {/*
      <Route path="/endScreen">
        <Roundup>
      </Route>
    */}
      </Switch>
    </Router>
  </>
  );
}

export default App;
