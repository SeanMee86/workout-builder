import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import socket from '../../shared/utilities/socketConnection';
import Button from "../../components/UI/Button/Button";

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
        setChatLogs(chatLogs.concat(messageData));
    });

    const sendMessage = (message, userName) => {
        const messageObj = {
            userName,
            message
        };
        socket.emit('messageSent', messageObj);
    };

    return(
        <div>
            <input onChange={onChangeHandler} name={'chat'} type="text"/>
            <Button text={'Send'} clicked={() => sendMessage(message, props.userName)}/>
            <ul>
                {chatLogs.map((chat, ind) => {
                    return(
                        <li key={ind}>{chat.userName}: {chat.message}</li>
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