import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Exercises from "./containers/Exercises";

function App() {
  return (
      <Switch>
        <Route path={'/exercises'} component={Exercises}/>
        <Route path={'/'} render={() => (<div>Welcome to Workout Builder <Link to={'/exercises'}>Click Here</Link> to add Exercises.</div>)}/>
      </Switch>
  );
}

export default App;
