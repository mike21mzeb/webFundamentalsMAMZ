document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el botón con el atributo personalizado 'tooltip-container'
    const button = document.querySelector('button[tooltip-container]');
    
    // Crear el elemento del tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    
    // Agregar el tooltip al botón
    button.parentElement.classList.add('tooltip-container');
    button.parentElement.appendChild(tooltip);
    
    // Mostrar el mensaje del atributo personalizado en el tooltip
    tooltip.textContent = button.getAttribute('tooltip-container');
    
    // Mostrar el tooltip al pasar el mouse
    button.addEventListener('mouseover', function() {
        setTimeout(() => {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        },300);
    });
    
    // Ocultar el tooltip al sacar el mouse
    button.addEventListener('mouseout', function() {
        setTimeout(() => {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        },300);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const nickName = document.getElementById("nickName");
    const mensajeError = document.getElementById("mensajeError1");
    nickName.addEventListener("input", function() {
        const regex = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{3,9}$/;
        if (regex.test(nickName.value)) {
            nickName.classList.remove("error");
            nickName.classList.add("valid");
            mensajeError.style.display = "none";
        } else {
            nickName.classList.remove("valid");
            nickName.classList.add("error");
            mensajeError.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const biography = document.getElementById("biography");
    const mensajeError = document.getElementById("mensajeError2");
    biography.addEventListener("input", function() {
        const currentLength = biography.value.length;
        if (currentLength >= 100) {
            console.log("auiiii");
            biography.classList.remove("error");
            biography.classList.add("valid");
            mensajeError.style.display = "none";
        }
        else{
            biography.classList.remove("valid");
            biography.classList.add("error");
            mensajeError.style.display = "block";            
            console.log("auiiii fue");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const password = document.getElementById("password");
    const mensajeError = document.getElementById("mensajeError3");
    password.addEventListener("input", function() {
        const regex = /^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{6,}$/;
        if (regex.test(password.value)) {
            password.classList.remove("error");
            password.classList.add("valid");
            mensajeError.style.display = "none";
        } else {
            password.classList.remove("valid");
            password.classList.add("error");
            mensajeError.style.display = "block";
        }
    });
});

// capturar formulario
const form = document.forms.formulario;

// agregar handler a evento submit
form.onsubmit = function (event) {
  // prevenir comportamiento por defecto
  event.preventDefault();

  // construir objeto FormData
  const fullName = form.elements.fullName.value;
  const nickName = form.elements.nickName.value;
  const biography = form.elements.biography.value;
  const password = form.elements.password.value;

  // URL de destino
  const url = "https://mocktarget.apigee.net/echo";

  // Opciones para fetch
  const options = {
    method: "POST", // método HTTP a utilizar
    body: JSON.stringify({fullName, nickName, biography, password}),
    headers: {
        "Content-Type": "application/json",
    },
  };

  // Realizar petición
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const div = document.querySelector('div[porCompletar]');
        /*
        // Crear el elemento del tooltip/*
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        
        // Agregar el tooltip al botón
        button.parentElement.classList.add('tooltip-container');
        button.parentElement.appendChild(tooltip);
        // Mostrar el mensaje del atributo personalizado en el tooltip
        tooltip.textContent = button.getAttribute('tooltip-container');*/
        document.getElementById("porCompletar").innerText = JSON.stringify(data);
    })
    .catch(console.error);
};
