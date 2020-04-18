import React, { Component } from 'react';
import { connect } from 'react-redux';

import { registerUser } from "../../store/actions/users";

import classes from "../../shared/styles/Form.module.scss";

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            formData: {
                name: '',
                email: '',
                password: '',
                password2: '',
                errors: {}
            }
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    };

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.errors !== prevState.formData.errors){
            return {
                ...prevState,
                formData: {
                    ...prevState.formData,
                    errors: {
                        ...nextProps.errors
                    }
                }
            }
        }else{
            return null;
        }
    }

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
                    <span>{this.props.errors.name}</span>

                    <label htmlFor="email">Email:</label>
                    <input
                        onChange={this.onChangeHandler}
                        name={'email'}
                        type="text"
                        value={this.state.email}/>
                    <span>{this.props.errors.email}</span>

                    <label htmlFor="password">Password:</label>
                    <input
                        onChange={this.onChangeHandler}
                        name={'password'}
                        type="password"
                        value={this.state.password}/>
                    <span>{this.props.errors.password}</span>

                    <label htmlFor="password2">Confirm Password:</label>
                    <input
                        onChange={this.onChangeHandler}
                        name={'password2'}
                        type="password"
                        value={this.state.password2}/>
                    <span>{this.props.errors.password2}</span>

                    <input
                        type="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(
    mapStateToProps,
    {
        registerUser
    }
)(Registration);