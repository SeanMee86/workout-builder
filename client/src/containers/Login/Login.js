import React, { Component } from 'react';
import classes from '../../shared/styles/Form.module.scss';
import { connect } from 'react-redux';
import { loginUser } from "../../store/actions/users";

class Login extends Component {
    state = {
        formData: {
            email: '',
            password: ''
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
        this.props.loginUser(formData);
    };

    render() {
        return(
            <div className={classes.Form}>
                <form method={'post'} onSubmit={(e) => this.onSubmitHandler(e, this.state.formData)}>
                    <label htmlFor="email">Email</label>
                    <input onChange={this.onChangeHandler} name={'email'} type="text" value={this.state.email}/>
                    <label htmlFor="email">Password</label>
                    <input onChange={this.onChangeHandler} name={'password'} type="password" value={this.state.password}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {loginUser})(Login);