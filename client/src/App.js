import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';

import LandingPage from "./containers/LandingPage/LandingPage";
import Exercises from "./containers/Exercises/Exercises";
import WorkoutBuilder from "./containers/WorkoutBuilder/WorkoutBuilder";
import Login from "./containers/Login/Login";
import Registration from "./containers/Registration/Registration";
import AllWorkouts from "./containers/AllWorkouts/AllWorkouts";
import HomePage from "./containers/HomePage/HomePage";
import Chat from "./containers/Chat/Chat";
import UserWorkouts from "./containers/UserWorkouts/UserWorkouts";
import Modal from "./components/UI/Modal/Modal";


import Header from "./components/UI/Header/Header";
import Nav from "./components/UI/Nav/Nav";

import store from "./store";

import { setUser } from "./store/actions/users";
import setAuthToken from "./shared/utilities/setAuthToken";

import classes from './App.module.scss';

if(localStorage.jwtToken){
    const token = localStorage.jwtToken;
    const decodedToken = jwt_decode(token);
    setAuthToken(token);
    store.dispatch(setUser(decodedToken));
}

function App(props) {

    let routes = (
        <Switch>
            <Route path={'/register'} component={Registration}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/'} component={LandingPage}/>
            <Redirect to={'/'}/>
        </Switch>
    );

    if(props.authenticated){
        routes = (
            <Switch>
                <Route path={'/exercises'} component={Exercises}/>
                <Route path={'/workout-builder'} component={WorkoutBuilder}/>
                <Route path={'/workouts'} component={AllWorkouts}/>
                <Route path={'/user/workouts'} component={UserWorkouts}/>
                <Route path={'/chat'} component={Chat}/>
                <Route path={'/'} component={HomePage}/>
                <Redirect to={'/'}/>
            </Switch>
        )
    }

    let modal = null;

    if(props.ui.showModal){
        modal = <Modal/>
    }

  return (
      <div className={classes.App}>
          <Header/>
          {props.authenticated ? <Nav/> : null}
          {modal}
          {routes}
      </div>
  );
}

const mapStateToProps = state => ({
    authenticated: state.user.isAuth,
    ui: state.ui
});

export default connect(mapStateToProps)(App);
