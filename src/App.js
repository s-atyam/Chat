import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from './components/chatRoom';
import CreateRoom from './components/createRoom';
import ChatData from './context/ChatData';


function App() {

  return (
    <>
    <ChatData>
      <Router>
        <Routes>
          <Route exact path="/" element={<CreateRoom />} />
          <Route exact path="/chat" element={<ChatRoom />} />
        </Routes>
      </Router>
      </ChatData>
    </>
  );
}

export default App;
