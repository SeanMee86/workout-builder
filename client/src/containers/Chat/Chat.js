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

    componentWillUnmount() {
        this.socket.emit('userDisconnected', {user: this.props.userName})
    }

    setSockets = (socket) => {
        socket.emit('getChatLogs');

        socket.emit('userConnected', {user: this.props.userName});

        socket.on('receiveChatLogs', chatLogs => {
            this.setState({
                ...this.state,
                chatLogs: [...chatLogs]
            })
        });

        this.socketHandler('userConnected', socket);
        this.socketHandler('messageToClients', socket);
        this.socketHandler('userDisconnected', socket);

        return socket;
    };

    socketHandler = (event, socket) => {
        socket.on(event, messageData => {
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
                <textarea
                    className={classes.ChatInput}
                    onChange={this.onChangeHandler}
                    value={this.state.message}
                    name={'chat'}/>
                <Button
                    text={'Send'}
                    clicked={() => this.onSendMessage(this.state.message, this.props.userName)}/>
                <ul className={classes.Chat}>
                    {this.state.chatLogs.map((chat, ind) => {
                        let chatLog = null;
                        if(chat.userName){
                            chatLog = (
                                <li key={ind}>
                                    <p><strong>{chat.userName}:</strong></p>
                                    <p>
                                        <i
                                            className="fas fa-angle-right"/> {chat.message}
                                    </p>
                                </li>
                            )
                        }else{
                            chatLog = (
                                <li
                                    className={classes.UserJoined}
                                    key={ind}>
                                    <p>
                                        {chat}
                                    </p>
                                </li>
                            )
                        }
                        return chatLog;
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