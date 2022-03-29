import React, {useEffect} from 'react';
import {onValue} from 'firebase/database';
import {setChats} from '../reducer/chatsReducer';
import {setMessages} from '../reducer/currentChatReducer';
import {connect} from 'react-redux';
import {RootState} from '../store/store';
import {chatsFirebase, messageFirebase} from '../firebase/firebaseApi';
import {ChatContainer} from '../container/chatContainer';
import {chats, message} from 'interfaces/chatsInterfaces';
import {ThemeProvider} from '@material-ui/core';
import {createTheme} from '@mui/material/styles';


const mapStateToProps=({currentChat: {id}}:RootState)=> ({id});

interface chatPage{
  setChats:(data:chats)=>void,
  setMessages:(data:{[key:string]:message })=>void
  id:string
}

export const ChatsPage=connect(mapStateToProps, {setChats, setMessages} )((props:chatPage)=>{
  const {setChats, id, setMessages}=props;

  useEffect(()=>{
    onValue(chatsFirebase, (snapshot) => {
      const data = snapshot.val();
      setChats( data);
    });
  });

  useEffect(()=>{
    if (id!=='default') {
      const a =messageFirebase(id);
      onValue(a, (snapshot) => {
        const data = snapshot.val();
        setMessages( data);
      });
    }
  }, [id]);


  return (
    <ThemeProvider theme={theme}>
      <ChatContainer/>
    </ThemeProvider>
  );
});

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Raleway',
    ].join(','),
  },
});
