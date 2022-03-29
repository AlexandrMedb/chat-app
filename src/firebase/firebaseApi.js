import {dbFirebase} from './config';

import {ref, set, push} from 'firebase/database';


export const writeUserData=(userId, name, email, imageUrl) =>{
  push(ref(dbFirebase, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
};

export const postChat=(chatName) =>{
  push(ref(dbFirebase, 'chats/'), {
    chatName: chatName,
  });
};

export const postMessage=(chatID, message) =>{
  push(ref(dbFirebase, `chats/${chatID}/messages`), {
    message,
    date: new Date().toISOString(),
  });
};

export const chatsFirebase = ref(dbFirebase, 'chats/');

export const messageFirebase = (id)=> {
  return ref(dbFirebase, `chats/${id}/messages`);
};


