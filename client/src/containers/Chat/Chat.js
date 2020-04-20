import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Button from "../../components/UI/Button/Button";

import socket from '../../shared/utilities/socketConnection';

import classes from './Chat.module.scss';

const Chat = (props) => {

    useEffect(() => {
        socket.emit('getChatLogs');
        //eslint-disable-next-line
    }, []);

    const [chatLogs, setChatLogs] = useState([]);
    const [message, setMessage] =  useState('');

    const onChangeHandler = (e) => {
        setMessage(e.target.value);
    };

    socket.on('receiveChatLogs', chatLogs => {
        setChatLogs([...chatLogs])
    });

    socket.on('messageToClients', messageData => {
        setChatLogs([messageData].concat(chatLogs));
    });

    const sendMessage = (message, userName) => {
        if(message === '') {
            message = "I'm a little bitch trying to fuck with shit";
        }
        const messageObj = {
            userName,
            message
        };
        socket.emit('messageSent', messageObj);
        setMessage('');
    };

    return(
        <div className={classes.ChatContainer}>
            <textarea className={classes.ChatInput} onChange={onChangeHandler} value={message} name={'chat'} type="text"/>
            <Button text={'Send'} clicked={() => sendMessage(message, props.userName)}/>
            <ul className={classes.Chat}>
                {chatLogs.map((chat, ind) => {
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
};

const mapStateToProps = state => ({
    userName: state.user.userName
});

export default connect(mapStateToProps)(Chat);