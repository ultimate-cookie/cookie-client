import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import '@chakra-ui/react'

import { 
	// JoinButton, 
	// CreateButton, 
	CreateLobby,
	JoinLobby, 
	QuizDetails, 
	Welcome,
	// NavBar 
} from './components';

function App() {
return (
<>
	{/* <NavBar /> */}
	<CreateLobby />
	<JoinLobby />
	<QuizDetails />
	<Welcome />
	{/* <div>
		<NavBar />
				<Switch>
						<Route exact path="/" />
						<Route path="/abc" />
						<Route path="/xyz" />
				</Switch>
	</div> */}
</>
)
}

export default App;