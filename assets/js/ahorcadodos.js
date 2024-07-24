const modalInicio = document.querySelector(".intro");
const botonInicio = document.querySelector(".intro button");
const inputInicio = document.querySelector(".intro form input");
const campos = document.querySelector("#campos");
let nuevosInputs;
const erroneos = document.querySelector(".errores");
const divs = document.querySelectorAll("section div");
const intentos = document.getElementById("intentos");
divs.forEach((div) => {
  div.style.display = "none";
});

// Declarar variables globales
let intento = 0;
let maxIntentos = 6;
let horca = 8;

// Implementar la funcionalidad de los intentos del usuario
// Validar los inputs para que no ingresen números o caracteres especiales
// Validar si el valor coincide con algún otro input y no marcarlo como si fuera respuesta errónea

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

  const inputsValidate = document.getElementsByClassName("nuevosInputs");
  const letras = document.createElement("p");
  const arrayErroneos = [];
  const contenido = arrayErroneos;

  function dibujarAhorcado() {
    if (horca % 2 !== 0 || horca === 2) {
      divs[horca].style.display = "flex";
    } else {
      divs[horca].style.display = "none";
    }
  }

  function comprobarArray(a){
    for(let j = 0; j < arrayLetras.length; j++){
      if (a == arrayLetras[j]){
        inputsValidate[j].value = a;
      } else {
        arrayErroneos.push(a);
        erroneos.innerHTML = contenido;
        intento++;
        horca--;
        intentos.innerHTML = ` ${intento}/${maxIntentos}`;
        dibujarAhorcado()
       } 
     };
  }

  for (let i = 0; i < inputsValidate.length; i++) {
    
    inputsValidate[i].addEventListener("keyup", () => {
      
      const regex = /^[a-zA-Z]+$/;
      
      if (regex.test(inputsValidate[i].value) && intento < maxIntentos) {
        
        let letraUsada = inputsValidate[i].value;
        
        comprobarArray(letraUsada);
       
      } else if (regex.test(inputsValidate[i].value) && intento >= maxIntentos) {
       
        divs.forEach((div) => {
          div.style.display = "flex";
        });
       
        alert("has perdido");
      } else {
       
        alert("solo caracteres alfabeticos");
      }
    });
  }
});






//implementar esta linea
