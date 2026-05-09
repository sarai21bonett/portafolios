/*
  CODIGO JAVASCRIPT
  CODIGO JAVASCRIPT PARA CAMBIAR DE COLOR CASILLAS, MOSTRAR MODIFICACION DE PAGINA
  Y GUARDAR USUARIO.
*/

/*
  ///////////////////////////////////////////////////////////////
*/

function changeclr1() {
  document.getElementById("username").style.background = "#f25ef2";
}

function changeclr2() {
  document.getElementById("username").style.background = "";
}

function changeclr3() {
  document.getElementById("password").style.background = "#f25ef2";
}

function changeclr4() {
  document.getElementById("password").style.background = "";
}

function changeclr5() {
  document.getElementById("email").style.background = "#f25ef2";
}

function changeclr6() {
  document.getElementById("email").style.background = "";
}

function convertToUppercase(element) {
  element.value = element.value.toUpperCase();
}

function alerta() {
  alert("ULTIMA MODIFICACION DE LA PÁGINA: 23/07/2024.");
}

/*
///////////////////////////////////////////////////////////////
*/

/*
MOSTRAR ULTIMA MODIFIACION, HORA Y USUARIO.
*/

function alerta1() {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  alert('Nombre: ***** \nCorreo: *****');
}

setInterval(mytime, 1000);
function mytime() {
  const d = new Date();
  document.getElementById("hora").innerHTML = d.toLocaleTimeString();
}

/*
///////////////////////////////////////////////////////////////
*/

function validateForm() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const email = document.getElementById('email').value.trim();

  if (username === "") {
      alert("Por favor, ingresa tu nombre.");
      return false; // Evita que el formulario se envíe
  }

  if (password === "") {
      alert("Por favor, ingresa tu contraseña.");
      return false; // Evita que el formulario se envíe
  }

  if (email === "") {
      alert("Por favor, ingresa tu correo electrónico.");
      return false; // Evita que el formulario se envíe
  }

  // Validar formato de correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false; // Evita que el formulario se envíe
  }

  // Confirmación antes de redirigir
  if (confirm("¿deseas guardar esta información?")) {
      // Si el usuario acepta, redirige a la otra página
      window.location.href = "inde.html"; // Cambia esto a la URL de tu página
  }

  return false; // Evita que el formulario se envíe
}