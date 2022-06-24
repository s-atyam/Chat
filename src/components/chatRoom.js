import { useEffect, useContext } from 'react';
import chatContext from '../context/chatContext';
import ScrollableFeed from 'react-scrollable-feed';

const chatRoom = (props) => {

  const stateVariable = useContext(chatContext);

  const sendChat = (e) => {
    e.preventDefault();
    props.socket.emit('chat', { message: stateVariable.message, "iddiv": props.socket.id, "roomCode": stateVariable.room, "name": stateVariable.name });
    stateVariable.setMyMessage([...stateVariable.myMessage, stateVariable.message]);
    stateVariable.setMessage('');
  }

  useEffect(() => {
    props.socket.on('chat', (payload) => {
      stateVariable.setChat([...stateVariable.chat, payload]);
    });
  });

  return (
    <div className='flex items-center justify-center flex-col bg-slate-300 w-screen h-screen'>
      <h1 className='text-3xl text-slate-500 mb-3 mx-auto'>Chatly - Secure, Fast and Easy</h1>
      <form className='w-1/2 min-w-min h-3/5 border border-gray-700'>
        <div className='bg-slate-200 rounded-md w-full h-full px-2 py-2 overflow-auto'>
        <ScrollableFeed>
          {stateVariable.chat.map((payload, index) => {
            return (
              <div>
                <p>{ }</p>
                <p className={`rounded-md h-max w-fit max-w-md ${props.socket.id === payload.userID ? 'ml-auto bg-slate-300' : 'mr-auto bg-slate-400'} text-lg text-slate-600 px-4 mb-1`} key={index}>{payload.name} - {payload.message}</p>
              </div>
            )
          })}
          </ScrollableFeed>
        </div>
        <div className='flex items-center justify-center w-full min-w-min mt-2'>
          <input className='bg-slate-100 rounded-md h-12 w-full text-lg text-slate-500 mr-2 pl-4' style={{ "outline": "none", "border": "none" }} type='text' name='chat' placeholder='Enter your message...' value={stateVariable.message} onChange={(e) => { stateVariable.setMessage(e.target.value) }} />
          <button className='bg-slate-200 text-slate-500 rounded-md w-40 h-12 text-xl border hover:text-slate-700' style={{ "border": "none" }} type='submit' onClick={sendChat}>Send</button>
        </div>
      </form>
    </div>
  )
}

export default chatRoom