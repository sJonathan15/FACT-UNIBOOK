function validarFormulario() {
    var email = document.getElementById('email').value;
    var password = document.querySelector('input[type="password"]').value;
  
    // Validar formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return false;
    }
  
    // Validar formato de contraseña
    if (password.length < 8 || password.length > 20) {
      alert('La contraseña debe tener entre 8 y 12 caracteres.');
      return false;
    }
  
    // Redireccionar solo si la validación es exitosa
    document.getElementById('linkSiguiente').href = "home.html";
    return true;
  }
  