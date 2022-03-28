import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {chats} from 'interfaces/chatsInterfaces';


const initialState:chats={};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<chats>) => {
      state = action.payload;
      return state;
    },
  },
});

export const {
  setChats,
} = chatsSlice.actions;

export default chatsSlice.reducer;
