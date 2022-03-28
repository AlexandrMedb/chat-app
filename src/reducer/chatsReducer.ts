import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface message{
    message:string
}

export interface chat {
    chatName:string,
    message:{
        [key:string]:message
    }
}

export interface chats {
    [key:string]:chat
}

const initialState:chats={};


export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<chats>) => {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
  },
});

export const {
  setChats,
} = chatsSlice.actions;

export default chatsSlice.reducer;
