import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "../../components/UI/Button/Button";

import { registerUser } from "../../store/actions/users";
import { removeErrors, removeAllErrors } from "../../store/actions/errors";

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

    componentWillUnmount() {
        this.props.removeAllErrors();
    }

    onChangeHandler = (e) => {
        this.setState({
            ...this.state,
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    };

    onFocusHandler = (e) => {
        this.props.removeErrors(e.target.name)
    };

    onSubmitHandler = (e, formData) => {
        e.preventDefault();
        this.props.removeAllErrors();
        this.props.registerUser(formData, this.props.history);
    };

    render() {
        return(
            <div className={classes.Form}>
                <form
                    method={'post'}
                    onSubmit={(e) => this.onSubmitHandler(e, this.state.formData)}>

                    <label htmlFor="name">User Name:</label>
                    <input
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler}
                        name={'name'}
                        type="text"
                        value={this.state.name}/>
                    <span className={classes.ErrorMessage}>{this.state.formData.errors.name}</span>

                    <label htmlFor="email">Email:</label>
                    <input
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler}
                        name={'email'}
                        type="text"
                        value={this.state.email}/>
                    <span className={classes.ErrorMessage}>{this.state.formData.errors.email}</span>

                    <label htmlFor="password">Password:</label>
                    <input
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler}
                        name={'password'}
                        type="password"
                        value={this.state.password}/>
                    <span className={classes.ErrorMessage}>{this.state.formData.errors.password}</span>

                    <label htmlFor="password2">Confirm Password:</label>
                    <input
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler}
                        name={'password2'}
                        type="password"
                        value={this.state.password2}/>
                    <span className={classes.ErrorMessage}>{this.state.formData.errors.password2}</span>

                    <input
                        type="submit"/>
                </form>
                <Button text={'Log In'} clicked={() => this.props.history.push('/login')}/>
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
        registerUser,
        removeErrors,
        removeAllErrors
    }
)(Registration);