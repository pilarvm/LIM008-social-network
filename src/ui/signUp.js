
export default () => {
    const htmlContent = `
    <input id="txtEmail" type="email" placeholder="Email">
    <input id="txtPassword" type="password" placeholder="Contraseña">
    <!-- <button id = "btnLogin" class="btn btn-action">Login</button> -->
    <button id = "btnSignUp" class="btn btn-secondary">Registrarse</button>
    <!-- <button id = "btnLogout" class="btn btn-action hide">Logout</button> -->
  `;
   
  
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = ''
    sectionMain.innerHTML = htmlContent
  

  };
  