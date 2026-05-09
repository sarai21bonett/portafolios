function validateForm(event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.getElementById('email').value.trim();
  
    if (username === "") {
      alert("Por favor, ingresa tu nombre.");
      event.preventDefault();
      return;
    }
  
    if (password === "") {
      alert("Por favor, ingresa tu contraseña.");
      event.preventDefault();
      return;
    }
  
    if (email === "") {
      alert("Por favor, ingresa tu correo electrónico.");
      event.preventDefault();
      return;
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      event.preventDefault();
      return;
    }
  
    // Si todo está bien, redirige a la página principal
    event.preventDefault();
    window.location.replace("principal.html");
  }
  
  // Llamar a la función validateForm cuando se envíe el formulario
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", validateForm);
    }
  });


  function alerta1() {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    alert('Nombre: ***** \Correo: *****')
  }
  
  setInterval(mytime,1000);
  function mytime(){
    const d = new Date();
    document.getElementById("hora").innerHTML = d.toLocaleTimeString();
  }