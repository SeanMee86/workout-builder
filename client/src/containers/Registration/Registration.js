import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from "../../store/actions/users";

import classes from "../../shared/styles/Form.module.scss";

class Registration extends Component {
    state = {
        formData: {
            name: '',
            email: '',
            password: '',
            password2: ''
        }
    };

    onChangeHandler = (e) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    };

    onSubmitHandler = (e, formData) => {
        e.preventDefault();
        this.props.registerUser(formData, this.props.history);
    };

    render() {
        return(
            <div className={classes.Form}>
                <form method={'post'} onSubmit={(e) => this.onSubmitHandler(e, this.state.formData)}>
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={this.onChangeHandler}
                        name={'name'}
                        type="text"
                        value={this.state.name}/>

                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={this.onChangeHandler}
                        name={'email'}
                        type="text"
                        value={this.state.email}/>

                    <label htmlFor="password">Password:</label>
                    <input
                        onChange={this.onChangeHandler}
                        name={'password'}
                        type="password"
                        value={this.state.password}/>

                    <label htmlFor="password2">Confirm Password:</label>
                    <input
                        onChange={this.onChangeHandler}
                        name={'password2'}
                        type="password"
                        value={this.state.password2}/>

                    <input
                        type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(
    null,
    {
        registerUser
    }
)(Registration);