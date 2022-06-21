import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from './components/chatRoom';
import JoinRoom from './components/joinRoom';
import CreateRoom from './components/createRoom';
import ChatData from './context/ChatData';

import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');


function App() {

  return (
    <>
    <ChatData>
      <div>{socket.id}</div>
      <Router>
        <Routes>
          <Route exact path="/" element={<JoinRoom socket={socket} />} />
          <Route exact path="/create" element={<CreateRoom socket={socket} />} />
          <Route exact path="/chat" element={<ChatRoom socket={socket}/>} />
        </Routes>
      </Router>
      </ChatData>
    </>
  );
}

export default App;
