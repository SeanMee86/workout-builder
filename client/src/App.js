import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Exercises from "./containers/Exercises";
import Workouts from "./containers/Workouts";
import classes from './App.module.scss';

function App() {
  return (
      <div className={classes.App}>
          <Switch>
            <Route path={'/exercises'} component={Exercises}/>
            <Route path={'/workouts'} component={Workouts}/>
            <Route path={'/'} render={() => (<div>Welcome to Workout Builder <Link to={'/exercises'}>Click Here</Link> to add Exercises.</div>)}/>
          </Switch>
      </div>
  );
}

export default App;
