import React, { useEffect ,useState} from 'react';
import './Sidebar.css'; 
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from "./firebase"
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const[{user},dispatch] =useStateValue();
  useEffect(()=>{   

    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) =>(
     setRooms(snapshot.docs.map( (doc) => ({
      id: doc.id,
      data: doc.data(),
     }
     ))
     )
    )
    );
    return ()=>{
      unsubscribe();
    }
  },[]);
  return (
    <div className='sidebar'>
      <div className="sidebar_header">
     <Avatar src ={user?.photoURL}/>
     <div className="sidebar__headerright">
      <IconButton>
      <DonutLargeIcon/>
      </IconButton>
      <IconButton>
      <ChatIcon/>
      </IconButton>
      <IconButton>
      <MoreVertIcon/>
      </IconButton>
   
     
     </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
        <SearchOutlined/>
       <input placeholder='Search or start new chat'type="text"/>
        </div>

      </div>
      <div className="sidebar_chats">
        <SidebarChat addnewChat/>
        {rooms.map(room=>
          <SidebarChat key = {room.id} id={room.id}
          name ={room.data.name}/>
          )}

      </div>
       
    </div>
  )
}

export default Sidebar;