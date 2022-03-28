import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Avatar, Box, CardActionArea} from '@mui/material';

interface props {
    message:any
}

export const Message=({message}:props)=> {
  return (
    <Box sx={{p: 1}}>
      <Card sx={{maxWidth: 400}}>
        <CardActionArea>
          <CardContent sx={{display: 'flex', alignItems: 'center'}}>
            <Avatar sx={{mr: 2}} alt="Smy Sharp" src="/static/images/avatar/1.jpg" />
            <Typography variant="body2" color="text.secondary">
              {message}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>

  );
};
