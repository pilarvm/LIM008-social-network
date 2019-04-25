import { signUpOnSubmit, signGoogle, signFacebook, showIn } from '../lib/view-controller.js';

export default () => {
  const form = document.createElement('minimal-body');
  const formContent = `
  
<div class="container">
<div class="minimal-body">
    <div class="login-form gr27e">
    
    <div class="heading">
      <img id="logo" src="img/ecohack-logo.png">
      <p>Llena al mundo de conocimiento.</p>
    </div>

      
      <button type="button" id ="btn-google" class="google">cIniciar sesión con  Google</button>
      <button type="button" id ="btn-facebook" class="facebook"><i class="fa fa-facebook fa-fw"></i>Iniciar sesión con  Facebook</button>
  
      <div class="center">---------------- o ----------------</div>
       
      <input type="text" placeholder="Nombre" name="name" required>
      <input type="email" placeholder="Correo electrónico" name="email" id="up-email"required>
      <input type="password" placeholder="Contraseña" name="psw" id="up-password" required>
      <input id="txtPasswordConf" type="password" placeholder="Confirma tu contraseña" name="psw-repeat" required>
      <label>
        
  
      <div class="clearfix">
      <button type="button" id ="btnSignUp" class="btn-sign">Registrarse</button>
      <p class="center">Al registrate, aceptas nuestras 
      Condiciones, la Política de datos y 
      la Política de cookies.</p>
      </div>
      
    </div> 

    <div class="contenxt-switch gr27e">
     <p class="izU2O">¿Tienes una cuenta?   <a id="a-signIn">Inicia sesión</a></p>
    </div>
</div>
</div>
  `;
  form.innerHTML = formContent;

  // selecccionando elementos del DOM

  const btnGoogle = form.querySelector('#btn-google');
  btnGoogle.addEventListener('click', signGoogle);

  const btnFacebook = form.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', signFacebook);

  const btnSignUp = form.querySelector('#btnSignUp');
  btnSignUp.addEventListener('click', signUpOnSubmit);

  const enlace = form.querySelector('#a-signIn');
  enlace.addEventListener('click', showIn);
  return form;
};


