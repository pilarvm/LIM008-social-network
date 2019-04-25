import { initRouter } from './router.js';

const initFirebase = () => {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyBZ10BybLZPmFiiGNt8SfuqTnZyrnN6oow',
    authDomain: 'social-network-85384.firebaseapp.com',
    databaseURL: 'https://social-network-85384.firebaseio.com',
    projectId: 'social-network-85384',
    storageBucket: 'social-network-85384.appspot.com',
    messagingSenderId: '59583925988'
  };
  firebase.initializeApp(config);

  initRouter();
};

window.onload = initFirebase;