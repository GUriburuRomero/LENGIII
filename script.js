'use strict';

let respuestas = [];

function validarFormulario() {
    const apellido = document.getElementById('surnameField').value.trim();
    const nombre = document.getElementById('nameField').value.trim();
    const dni = document.getElementById('dniField').value.trim();
    const fecha = document.getElementById('dateField').value;
    const email = document.getElementById('emailField').value.trim();

    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const soloNumeros = /^\d{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!soloLetras.test(apellido)) {
        alert("Apellido no valido. Solo letras.");
        return false;
    }

    if (!soloLetras.test(nombre)) {
        alert("Nombre no valido. Solo letras.");
        return false;
    }

    if (!soloNumeros.test(dni)) {
        alert("DNI no valido. Deben ser 8 números.");
        return false;
    }

    const fechaNacimiento = new Date(fecha);
    const fechaMinima = new Date("2006-01-01");
    if (fechaNacimiento <= fechaMinima || isNaN(fechaNacimiento)) {
        alert("Fecha inválida. Debe ser posterior a 01/01/2006.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Correo electrónico inválido.");
        return false;
    }

    mostrarPreguntas();  // se llama sólo si todo es válido
    return false; // para que no recargue la página
}

function mostrarPreguntas() {
    const nac = prompt("Cuál es tu nacionalidad?");
    const col_fav = prompt("Cuál es tu color favorito?");
    const nom_masc = prompt("Cómo se llama tu mascota?");

    respuestas = [nac, col_fav, nom_masc];

    const div = document.createElement("div");
    div.classList.add("mt-3");

    div.innerHTML = `
        <h4>Respuestas:</h4>
        <ul>
            <li><strong>Nacionalidad:</strong> ${nac}</li>
            <li><strong>Color favorito:</strong> ${col_fav}</li>
            <li><strong>Nombre de mascota:</strong> ${nom_masc}</li>
        </ul>
    `;

    document.body.appendChild(div);
}
