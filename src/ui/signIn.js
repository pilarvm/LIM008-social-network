import { signInOnSubmit, showUp, signGoogle, signFacebook } from '../lib/view-controller.js';
export default () => {
  const form = document.createElement('form');
  const formContent = `
  <div class="container">
  <div class="minimal-body">
    <div class="login-form gr27e">
      
      <div class="heading">
        <img id="logo" src="img/ecohack-logo.png">
      </div>
  
  
    
    </div>
  </div>
  `;
  form.innerHTML = formContent;
  
  const btnSignIn = form.querySelector('#btnSignIn');
  btnSignIn.addEventListener('click', signInOnSubmit);
  
  const enlace2 = form.querySelector('#a-signUp');
  enlace2.addEventListener('click', showUp);

  const btnGoogle = form.querySelector('#btn-google');
  btnGoogle.addEventListener('click', signGoogle);

  const btnFacebook = form.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', signFacebook);
  return form;
};
