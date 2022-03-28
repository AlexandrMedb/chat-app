// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJVjq19Qv2ith7s_XcHRsqV1hDyYLKxm0',
  authDomain: 'chat-app-294ba.firebaseapp.com',
  databaseURL: 'https://chat-app-294ba-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chat-app-294ba',
  storageBucket: 'chat-app-294ba.appspot.com',
  messagingSenderId: '55995964991',
  appId: '1:55995964991:web:be8e506344966957bd228a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dbFirebase = getDatabase();


// export const starCountRef = ref(database, 'posts/' + 'postId' + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });
