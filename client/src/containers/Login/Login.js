import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "../../components/UI/Button/Button";

import { loginUser } from "../../store/actions/users";
import { removeErrors, removeAllErrors } from "../../store/actions/errors";

import classes from '../../shared/styles/Form.module.scss';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: '',
                errors: {}
            }
        };
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
        this.props.loginUser(formData, this.props.history);
    };

    render() {
        return(
            <div className={classes.Form}>
                <form
                    method={'post'}
                    onSubmit={(e) => this.onSubmitHandler(e, this.state.formData)}>

                    <label htmlFor="email">Email</label>
                    <input
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler}
                        name={'email'}
                        type="text"
                        value={this.state.formData.email}/>
                    <span className={classes.ErrorMessage}>{this.state.formData.errors.email}</span>


                    <label htmlFor="email">Password</label>
                    <input
                        onFocus={this.onFocusHandler}
                        onChange={this.onChangeHandler}
                        name={'password'}
                        type="password"
                        value={this.state.formData.password}/>
                    <span className={classes.ErrorMessage}>{this.state.formData.errors.password}</span>


                    <input type="submit"/>
                </form>
                <Button text={'Register'} clicked={() => this.props.history.push('/register')}/>
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
        loginUser,
        removeErrors,
        removeAllErrors
    }
)(Login);