import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import {useAppDispatch} from '../store/hooks';
import {setChatId} from '../reducer/currentChatReducer';


interface props{
    open:boolean,
    text:string,
    chatId:string,
}

export const ChatItem =({open, text, chatId}:props)=>{
  const dispatch = useAppDispatch();
  const handelClick =()=>{
    dispatch(setChatId(chatId));
  };
  return (
    <ListItemButton onClick={handelClick}
      key={text}
      sx={{
        minHeight: 48,
        justifyContent: open ? 'initial' : 'center',
        px: 2.5,
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 3 : 'auto',
          justifyContent: 'center',
        }}
      >
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary={text} sx={{opacity: open ? 1 : 0}} />
    </ListItemButton>
  );
};
