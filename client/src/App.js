import React from 'react';
import {Switch, Route, Link, Redirect} from 'react-router-dom';

import Exercises from "./containers/Exercises/Exercises";
import WorkoutBuilder from "./containers/WorkoutBuilder/WorkoutBuilder";
import classes from './App.module.scss';
import Header from "./components/UI/Header/Header";
import Nav from "./components/UI/Nav/Nav";
import Login from "./containers/Login/Login";
import Registration from "./containers/Registration/Registration";
import Workouts from "./containers/Workouts/Workouts";
import { connect } from 'react-redux';

function App(props) {

    let routes = (
        <Switch>
            <Route path={'/register'} component={Registration}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/'} render={() => (<div>Welcome to The Workout Builder <Link to={'/exercises'}>Click Here</Link> to add/view Exercises.</div>)}/>
            <Redirect to={'/'}/>
        </Switch>
    );

    if(props.authenticated){
        routes = (
            <Switch>
                <Route path={'/exercises'} component={Exercises}/>
                <Route path={'/workout-builder'} component={WorkoutBuilder}/>
                <Route path={'/workouts'} component={Workouts}/>
                <Route path={'/'} render={() => (<div>Welcome to The Workout Builder <Link to={'/exercises'}>Click Here</Link> to add/view Exercises.</div>)}/>
            </Switch>
        )
    }

  return (
      <div className={classes.App}>
          <Header/>
          <Nav/>
          {routes}
      </div>
  );
}

const mapStateToProps = state => ({
    authenticated: state.user.isAuth
});

export default connect(mapStateToProps)(App);
