import {database} from './config';
import {ref, set, push, onValue} from 'firebase/database';



export const writeUserData=(userId, name, email, imageUrl) =>{
  push(ref(database, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
};

export const postChat=(chatName) =>{
  push(ref(database, 'chats/'), {
    chatName: chatName,
  });
};

export const postMessage=(chatName) =>{
  push(ref(database, 'chats/'), {
    chatName: chatName,
  });
};




