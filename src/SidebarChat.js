import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import db from './firebase';
import './SidebarChat.css';
import {Link} from 'react-router-dom';

function SidebarChat({id,name,addnewChat}) {
const [seed,setSeed] = useState("");

useEffect(()=>{
    setSeed(Math.floor(Math.random()*5000));
},[]);
const createChat = ()=>{

    const roomName = prompt("please enter name for chat room ")
    if(roomName){
        //do some clever database stuff
        db.collection('rooms').add({
          name: roomName, 
        })
    }
};

  return !addnewChat ? (
    <Link to={`/rooms/${id}`} key={id}>
    <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className="sidebarChat_info">
            <h2>{name}</h2>
            <p>Last seen....</p>
           
        </div>
    </div>
</Link>

  ): (
    <div onClick={createChat}
    className ="sidebarChat">
        <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat