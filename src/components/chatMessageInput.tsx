import React, {ChangeEvent, useState} from 'react';
import {Box, Divider, IconButton, InputBase, Paper} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import {postMessage} from '../firebase/firebaseApi';
import {connect} from 'react-redux';
import {RootState} from '../store/store';


const mapStateToProps =({currentChat: {id}}:RootState)=>({id});

interface props {
  id:string
}

export const ChatMessageInput=connect(mapStateToProps)((props:props)=>{
  const {id}=props;
  const [value, setValue] =useState('');
  const handleChange=(e:ChangeEvent<HTMLTextAreaElement|HTMLInputElement>)=>{
    setValue(e.target.value);
  };

  const handleSubmit=()=>{
    if (id!=='default') {
      postMessage(id, value);
    }
  };


  return (
    <Box sx={{p: 2}}>
      <Paper
        component="form"
        sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
      >
        <InputBase
          value={value}
          sx={{flex: 1}}
          onChange={handleChange}
        />

        <Divider sx={{height: 28, m: 0.5}} orientation="vertical" />
        <IconButton
          onClick={handleSubmit}
          sx={{p: '10px', color: '#54656f'}}
          aria-label="directions">
          <SendIcon />
        </IconButton>
      </Paper>
    </Box>
  );
});
