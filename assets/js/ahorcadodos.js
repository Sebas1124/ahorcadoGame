const modalInicio = document.querySelector(".intro");
const botonInicio = document.querySelector(".intro button");
const inputInicio = document.querySelector(".intro form input");
const campos = document.querySelector("#campos");
let  nuevosInputs; 

botonInicio.addEventListener("click", () => {
  let palabraElegida = inputInicio.value;

  if (palabraElegida == "") {
    alert("debes introducir una palabra para poder empezar");
  } else if (isNaN(palabraElegida) == false) {
    alert("solo se permiten caracteres alfabéticos");
  } else {
    modalInicio.style.display = "none";
  }
  const arrayLetras = palabraElegida.split("");
  nuevosInputs = `<input class="nuevosInputs" type="text">`;

  arrayLetras.forEach(() => {
    campos.insertAdjacentHTML("beforeend", nuevosInputs);
  });
  
  const inputsValidate = document.getElementsByClassName("nuevosInputs");

  for (let i = 0; i < inputsValidate.length; i++) {
    inputsValidate[i].addEventListener("keyup",()=>{


      if( inputsValidate[i].value == arrayLetras[i] ){

        inputsValidate[i].textContent = arrayLetras[i]

      }else{
        alert("has fallado!!")
      }
   }
   );
    }
  });



