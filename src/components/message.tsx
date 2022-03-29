import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Avatar, Box, CardActionArea} from '@mui/material';

interface props {
    message:string,
    my?: boolean,
    date:string
}

export const Message=({message, my, date}:props)=> {
  let boxSx={p: '5px', display: 'flex', justifyContent: 'start'};
  let mesSx={
    maxWidth: '70vw',
    background: '#ffffff',
    filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.2))',
  };
  if (my) {
    boxSx={...boxSx, justifyContent: 'end'};
    mesSx={...mesSx, background: '#d9fdd3'};
  }

  return (
    <Box sx={boxSx}>
      <Card sx={{...mesSx, fontFamily: 'Raleway'}}>
        <CardActionArea>
          <CardContent sx={{display: 'flex',
            alignItems: 'end',
            flexDirection: 'reverse', p: '6px 12px'}}>
            {/* <Avatar sx={{mr: 2}} alt="Smy Sharp" src="/static/images/avatar/1.jpg" />*/}
            <Typography variant="body2"
              sx={{color: 'black'}}
            // fontFamily={}
            >
              {message}
            </Typography>
            <Typography sx={{fontSize: '10px', ml: 2,
              color: 'rgba(0,0,0,0.3)'}}>
              {date?.split('T')[1].slice(0, 8)||''}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>

  );
};
