import React,{ useState } from 'react';
import chatContext from "./chatContext";

const ChatState = (props) => {

    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [myMessage, setMyMessage] = useState([]);

    return (
        <chatContext.Provider value={{ chat, setChat, message, setMessage, name, setName, room, setRoom, myMessage, setMyMessage }}>
            {props.children}
        </chatContext.Provider>
    )
}

export default ChatState;