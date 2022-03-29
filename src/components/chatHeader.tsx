import React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../store/store';
import {Avatar} from '@mui/material';
import Typography from '@mui/material/Typography';


const mapStateToProps =({currentChat: {id}}:RootState)=>({id});

interface props {
    id:string
}

export const ChatHeader=connect(mapStateToProps)(({id}:props)=>{
  return (
    <>
      <Avatar alt="Ry Sharp" src="./img/1.jpeg" sx={{mr: 2}}/>
      <Typography variant="h6" noWrap component="div"
        sx={{display: 'flex', color: '#54656f'}}>
        {`companion:${id.slice(-3)}`}
      </Typography>
    </>);
});
