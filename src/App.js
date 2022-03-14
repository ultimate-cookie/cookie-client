import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import '@chakra-ui/react'

import { JoinButton, CreateButton, Signin, Topics } from './components';

function App() {
return (
<>
	<JoinButton />
	<CreateButton />	
	<Signin />
	<Topics />
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
