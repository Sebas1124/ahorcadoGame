const modalInicio = document.querySelector(".intro");
const botonInicio = document.querySelector(".intro button");
const inputInicio = document.querySelector(".intro form input");
const campos      = document.querySelector("#campos");
let nuevosInputs;
const erroneos = document.querySelector(".errores")
const divs = document.querySelectorAll("setion div")


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

  const generateDivsWithAhorcado = (maxIntentos, intentoActual) => {
    for (let i = 0; i < divs.length; i++) {
      if (intentoActual < maxIntentos) {
        divs[i].style.display = "flex";
      }
    }
  };

  const inputsValidate = document.getElementsByClassName("nuevosInputs");
  letras = document.createElement("p");
  const arrayErroneos = [];
  const contenido = arrayErroneos;

  for (let i = 0; i < inputsValidate.length; i++) {
    inputsValidate[i].addEventListener("keyup", () => {
     if (inputsValidate[i].value == arrayLetras[i]) {
        inputsValidate[i].textContent = arrayLetras[i];
      } else {
      arrayErroneos.push(inputsValidate[i].value)
      erroneos.innerHTML = contenido 
      switch(arrayErroneos){
       arrayErroneos.length == arrayLetras.length:
       
      
      }
     }
  
    });
  }
});
