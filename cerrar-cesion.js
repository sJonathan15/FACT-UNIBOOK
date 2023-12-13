function confirmLogout() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
  }
  
  function confirmAction(confirmation) {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    
    if (confirmation) {
      window.location.href = "login.html"; // Redirige a la página de inicio de sesión si se confirma
    }
  }
  