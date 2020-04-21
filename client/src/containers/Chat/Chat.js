import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from "../../components/UI/Button/Button";

import classes from './Chat.module.scss';

class Chat extends Component {

    constructor(props){
        super(props);
        this.state = {
            chatLogs: [],
            message: ''
        };
    }

    async componentDidMount() {
        this.socket = await import('../../shared/utilities/socketConnection.js')
            .then(socket => {
                return this.setSockets(socket.default)
            });
    }

    setSockets = (socket) => {

        socket.emit('getChatLogs');

        socket.on('receiveChatLogs', chatLogs => {
            this.setState({
                ...this.state,
                chatLogs: [...chatLogs]
            })
        });

        socket.on('messageToClients', messageData => {
            this.setState({
                ...this.state,
                chatLogs: [messageData].concat(this.state.chatLogs)
            });
        });
        return socket;
    };

    onChangeHandler = (e) => {
        this.setState({
            ...this.state,
            message: e.target.value
        });
    };

    onSendMessage = (message, userName) => {
        if(message === '') {
            message = "I'm a little bitch trying to fuck with shit";
        }
        const messageObj = {
            userName,
            message
        };
        this.socket.emit('messageSent', messageObj);
        this.setState({
            ...this.state,
            message: ''
        });
    };

    render(){
        return(
            <div className={classes.ChatContainer}>
                <textarea className={classes.ChatInput} onChange={this.onChangeHandler} value={this.state.message} name={'chat'} type="text"/>
                <Button text={'Send'} clicked={() => this.onSendMessage(this.state.message, this.props.userName)}/>
                <ul className={classes.Chat}>
                    {this.state.chatLogs.map((chat, ind) => {
                        return(
                            <li key={ind}>
                                <p>{chat.userName}:</p>
                                <p>{chat.message}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userName: state.user.userName
});

export default connect(mapStateToProps)(Chat);