import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {message} from 'interfaces/chatsInterfaces';


interface currentChatS {
  id: string,
  message?:{
    [key:string]:message
  }
}

const initialState:currentChatS={
  id: 'default',
};

export const currentChatSlice = createSlice({
  name: 'currentChat',
  initialState,
  reducers: {
    setChatId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setMessages: (state, action: PayloadAction<{[key:string]:message }>) => {
      state.message = action.payload;
    },
  },
});

export const {
  setChatId, setMessages,
} = currentChatSlice.actions;

export default currentChatSlice.reducer;
