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
  console.log(message);

  return <Box sx={{
    height: '100vh',
    background: '#efeae2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
  }}>
    <DrawerHeader/>
    <Box sx={{flexGrow: 1, p: 1, maxHeight: '100vh', overflowY: 'scroll'}}>
      {
        message? Object.keys(message).map((el, i)=> {
          if (i%3===0) {
            return (
              <Message key={el}
                message={message[el].message} date={message[el].date} my={true}
              />
            );
          }
          return (
            <Message key={el}
              date={message[el].date}
              message={message[el].message}
            />
          );
        },
        ):''
      }

    </Box>
    <ChatMessageInput/>
  </Box>;
});
