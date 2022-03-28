import React from 'react';
import {Box} from '@mui/material';
import {DrawerHeader} from '../components/drawerHeader';
import {ChatMessageInput} from '../components/chatMessageInput';
import {Message} from '../components/message';
import {connect} from 'react-redux';
import {RootState} from '../store/store';
import {message} from 'interfaces/chatsInterfaces';

const mapStateToProps=({currentChat: {message}}:RootState)=>({message});

interface props {
  message?:{
    [key:string]:message
  }
}

export const ChatMessagesContainer=connect(mapStateToProps )((props:props)=>{
  const {message}=props;

  if (message) {
    console.log(message?.messages);
  }

  return <Box sx={{
    height: '100vh',
    background: '#F5F5DC',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
  }}>
    <DrawerHeader/>
    <Box sx={{flexGrow: 1, p: 1, maxHeight: '100vh', overflowY: 'scroll'}}>
      {
        message?.messages? Object.keys( message?.messages).map((el)=> <Message key={el}
          message={el}/>,
        ):''
      }

    </Box>
    <ChatMessageInput/>
  </Box>;
});
