// Mostrar la sección seleccionada
function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Cerrar sesión (solo alerta, puedes redirigir si quieres)
function cerrarSesion() {
    alert("Sesión cerrada");
}

// Inicializar mostrando solo la primera sección
mostrarSeccion('cuadrado-section');