// scripts.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Formulario enviado');
    // Aquí puedes añadir la lógica para manejar el inicio de sesión
});

// Obtener elementos del DOM
const sidebar = document.querySelector('.sidebar');
const sidebarOpenButton = document.querySelector('#sidebar-open-button');

// Evento para abrir y cerrar la barra lateral
sidebarOpenButton.addEventListener('click', function() {
    sidebar.classList.toggle('open'); // Alternar clase 'open'
});

