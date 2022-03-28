import React, {useEffect} from 'react';
import {onValue, ref} from "firebase/database";
import {database} from "firebase/config";
import {chats, setChats} from "../reducer/chatsReducer";
import {connect} from "react-redux";
import {ChatsContainer} from "../container/chats";
import {RootState} from "../store/store";


const mapStateToProps=({}:RootState)=> ({});

interface chatPage{
  setChats:(data:chats)=>void
}

export const ChatsPage=connect(mapStateToProps, {setChats} )((props:chatPage)=>{
const {setChats}=props

   const starCountRef = ref(database, 'chats/');
  useEffect(()=>{
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setChats( data);
    });
  })


  return (
      <div>s</div>
  );
});
