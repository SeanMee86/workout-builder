import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import Exercises from "./containers/Exercises";
import WorkoutBuilder from "./containers/WorkoutBuilder";
import classes from './App.module.scss';
import Header from "./components/UI/Header/Header";
import Nav from "./components/UI/Nav/Nav";
import Workouts from "./containers/Workouts";

function App() {
  return (
      <div className={classes.App}>
          <Header/>
          <Nav/>
          <Switch>
            <Route path={'/exercises'} component={Exercises}/>
            <Route path={'/workout-builder'} component={WorkoutBuilder}/>
            <Route path={'/workouts'} component={Workouts}/>
            <Route path={'/'} render={() => (<div>Welcome to The Workout Builder <Link to={'/exercises'}>Click Here</Link> to add/view Exercises.</div>)}/>
          </Switch>
      </div>
  );
}

export default App;
