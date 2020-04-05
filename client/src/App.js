import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Exercises from "./containers/Exercises";
import Workouts from "./containers/Workouts";
import classes from './App.module.scss';
import Header from "./components/UI/Header/Header";

function App() {
  return (
      <div className={classes.App}>
          <Header/>
          <Switch>
            <Route path={'/exercises'} component={Exercises}/>
            <Route path={'/workouts'} component={Workouts}/>
            <Route path={'/'} render={() => (<div>Welcome to The Workout Builder <Link to={'/exercises'}>Click Here</Link> to add/view Exercises.</div>)}/>
          </Switch>
      </div>
  );
}

export default App;
