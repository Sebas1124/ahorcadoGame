const modalInicio = document.querySelector(".intro");
const botonInicio = document.querySelector(".intro button");
const inputInicio = document.querySelector(".intro form input");
const campos = document.querySelector("#campos");
let nuevosInputs;
const erroneos = document.querySelector(".errores")


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
  const arrayErroneos = []

  const letras = document.createElement("p")
  
  for (let i = 0; i < inputsValidate.length; i++) {
    inputsValidate[i].addEventListener("keyup", () => {
     if (inputsValidate[i].value == arrayLetras[i]) {
        inputsValidate[i].textContent = arrayLetras[i];
      } else {
      arrayErroneos.push(inputsValidate[i].value)  
      const contenido = arrayErroneos.toString()
      letras.textContent(contenido)
      erroneos.append(letras)
 
      }
    });
  }
});
