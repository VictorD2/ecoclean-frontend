import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCEWlALAddenAH_98zOeJMsxCZYGiU7eCY',
  authDomain: 'ecoclean-2ff6f.firebaseapp.com',
  projectId: 'ecoclean-2ff6f',
  storageBucket: 'ecoclean-2ff6f.appspot.com',
  messagingSenderId: '731977584754',
  appId: '1:731977584754:web:f669565315e02aa2f5f2eb',
  measurementId: 'G-MB7CC4CZVM',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
