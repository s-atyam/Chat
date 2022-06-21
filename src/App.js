import './App.css';

import {useState,useEffect} from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:5000');

function App() {

  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);


  const sendChat = (e)=>{
    e.preventDefault();
    socket.emit('chat',{message,"iddiv":socket.id});
    setMessage('');
    
  }

  useEffect(() => {
    socket.on('chat',(payload)=>{
      setChat([...chat,payload]);
    });
  });


  return (
    <div className='flex items-center justify-center flex-col bg-slate-300 w-screen h-screen'>
      <h1 className='text-3xl text-slate-500 mb-3 mx-auto'>Chatly - Secure, Fast and Easy</h1>
      <div onChange={setTimeout(()=>{document.getElementById('mainArea').scrollTop = document.getElementById('mainArea').scrollHeight},0)} id='mainArea' className='bg-slate-200 rounded-md w-1/2 h-3/5 px-2 py-2 overflow-auto'>
        {chat.map((payload, index) => {
          return (
            <p className={`bg-slate-300 rounded-md h-8 w-fit ${socket.id===payload.iddiv?'ml-auto':'mr-auto'} text-lg text-slate-600 px-4 mb-1`} key={index}>{payload.message}</p>
          )
        })}
      </div>
      <div className='flex items-center justify-center w-1/2 mt-2'>
        <input className='bg-slate-100 rounded-md h-12 w-full text-lg text-slate-500 mr-2 pl-4' style={{ "outline": "none", "border": "none" }} type='text' name='chat' placeholder='Type your text here' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
        <button className='bg-slate-200 text-slate-500 rounded-md w-40 h-12 text-xl border hover:text-slate-700' style={{ "border": "none" }} type='submit' onClick={sendChat}>Send</button>
      </div>
    </div>
  );
}

export default App;
