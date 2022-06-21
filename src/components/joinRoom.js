import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import chatContext from '../context/chatContext';

const createRoom = (props) => {

  const stateVariable = useContext(chatContext);

  return (
    <div className="flex items-center justify-center flex-col bg-slate-200 w-screen h-screen">
      <div className="pb-10 flex items-center justify-center flex-col">
        <p className="font-thin text-slate-600 text-xl">Enter credentials to use Chatly</p>
      </div>
      <form className="flex items-center justify-center rounded-2xl flex-col w-1/4 min-w-min h-72  bg-slate-200" style={{ "boxShadow": "-6px -6px 8px rgba(245,245,245,0.5),6px 6px 8px rgba(70,70,70,0.12)" }}>
        <div className="w-5/6 my-2">
          <p className=" text-slate-500 text-lg py-2 mx-11">Name</p>
          <span><i className="fa fa-user text-slate-500 mx-3" style={{ "fontSize": "20px" }}></i></span>
          <input className="bg-slate-200 border rounded-md ml-2 h-9 w-10/12 text-lg text-slate-500 px-2" placeholder={props.socket.id} style={{ "outline": "none", "border": "none", "boxShadow": " inset -3px -3px 5px rgba(255,255,255,0.5), inset 3px 3px 5px rgba(70,70,70,0.12)" }} type="text" name="myName" onChange={(event)=>{stateVariable.setName(event.target.value)}}/>
        </div>
        <div className="w-5/6 my-2">
          <p className=" text-slate-500 text-lg py-2 mx-11">Room Code</p>
          <span><i className="fa fa-key text-slate-500 mx-2" style={{ "fontSize": "20px" }}></i></span>
          <input className="bg-slate-200 border rounded-md ml-2 h-9 w-10/12 text-lg text-slate-500 px-2" style={{ "outline": "none", "border": "none", "boxShadow": " inset -3px -3px 5px rgba(255,255,255,0.5), inset 3px 3px 5px rgba(70,70,70,0.12)" }} type="password" name="pass" onChange={(event)=>{stateVariable.setRoom(event.target.value)}}/>
        </div>
        <Link onClick={event=>(!stateVariable.name || !stateVariable.room)? event.preventDefault():null} className='w-1/3' to={`/chat?name=${stateVariable.name}&room=${stateVariable.room}`}>
        <button className="my-6 bg-slate-200 text-slate-500 rounded-md text-lg border hover:text-slate-700 h-10 w-full" style={{ "border": "none", "boxShadow": "-4px -4px 5px rgba(255,255,255,0.5),4px 4px 5px rgba(70,70,70,0.12)" }} type="submit">Join Room</button>
        </Link>
      </form>
      <div>
        <p className=" mt-10 text-lg text-slate-500">--------------------------- OR ---------------------------</p>
      </div>
      <Link className='w-2/12' to={`/create`}>
        <button className="my-6 bg-slate-200 text-slate-500 rounded-md text-lg border hover:text-slate-700 h-10 w-full" style={{ "border": "none", "boxShadow": "-4px -4px 5px rgba(255,255,255,0.5),4px 4px 5px rgba(70,70,70,0.12)" }} type="submit">Create Room</button>
        </Link>
      <div>
        <p className=" mt-10 text-xs text-slate-500"><span><i className="fa fa-copyright"></i></span> 2022 Chatly. Crafted with <span><i className="fa fa-solid fa-heart text-red-500"></i></span> by Madgoler</p>
      </div>
    </div>
  )
}

export default createRoom;