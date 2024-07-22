const modalInicio = document.querySelector(".intro");
const botonInicio = document.querySelector(".intro button");
const inputInicio = document.querySelector(".intro form input");
const campos      = document.querySelector("#campos");
let nuevosInputs;
const erroneos    = document.querySelector(".errores")
const divs        = document.getElementsByClassName("ahorcado")
const intentos    = document.getElementById("intentos")

for (let i = 0; i < divs.length; i++) {
  divs[i].style.display = "none";
}

// Declarar variables globales
let intento = 0;
let maxIntentos = 6;

//TODO: Ruta de correcciones

// Implementar la funcionalidad de los intentos del usuario checked
// validar los inputs para que no ingresen numero o caracteres especiales
// validar si el valor conicide con algún otro input y no marcarlo como si fuera respuesta erronea


botonInicio.addEventListener("click", () => {
  let palabraElegida = inputInicio.value;
  const regex = /^[a-zA-Z]+$/;

  if (regex.test(palabraElegida)) {
    modalInicio.style.display = "none";
  } else {
    alert("solo se permiten caracteres alfabéticos");
  }

  const arrayLetras = palabraElegida.split("");
  nuevosInputs = `<input class="nuevosInputs" type="text">`;

  arrayLetras.forEach(() => {
    campos.insertAdjacentHTML("beforeend", nuevosInputs);
  });

  // El switch es un if gigante, donde el primer parametro es la variable que se va a a evaluar

  switch (arrayLetras.length) {
    case 5:
      maxIntentos = 7;
      intentos.innerHTML = `${intento}/${maxIntentos}`;
      break;
    case 6:
      maxIntentos = 8;
      intentos.innerHTML = `${intento}/${maxIntentos}`;
      break;
    case 7:
      maxIntentos = 9;
      intentos.innerHTML = `${intento}/${maxIntentos}`;
      break;
    case 8:
      maxIntentos = 10;
      intentos.innerHTML = `${intento}/${maxIntentos}`;
      break;

    default:
      maxIntentos = 6;
      intentos.innerHTML = `${intento}/${maxIntentos}`;
      break;
  }

  const generateDivsWithAhorcado = ( maxIntentos, intentoActual, hasPerdido ) => {

    for (let i = 0; i < divs.length; i++) {
      
      if( hasPerdido ) {
        divs[i].style.display = "flex";
        console.log(divs[i])
      }
    }
  };

    if ( maxIntentos <= 7 ) {
      
      for (let i = intento; i < 2; i++) {
        divs[i].style.display = "flex";
      }


    }


  }
  



