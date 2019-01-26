// // Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/view-controller.js';
import { myFirebase } from './lib/firebase.js';

myFunction();
myFirebase();



  // Obtener elementos
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
