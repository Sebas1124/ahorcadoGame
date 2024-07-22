const modalInicio = document.querySelector(".intro");
const botonInicio = document.querySelector(".intro button");
const inputInicio = document.querySelector(".intro form input");
const campos = document.querySelector("#campos");
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
  


  const inputsValidate = document.getElementsByClassName("nuevosInputs"); 
  letras = document.createElement("p")
  const arrayErroneos = []
  const contenido = arrayErroneos

  
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
