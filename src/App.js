import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                    <Switch>
                        <Route exact path="/" />
                        <Route path="/abc" />
                        <Route path="/xyz" />
                    </Switch>
            </div>
        </Router>
    )
}

export default App;