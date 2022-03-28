import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import chatReducer from 'reducer/chatsReducer';
import currentChatReducer from 'reducer/currentChatReducer';


export const store = configureStore({
  reducer: {
    chats: chatReducer,
    currentChat: currentChatReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
