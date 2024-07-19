const modalInicio = document.querySelector(".intro");
const botonInicio = document.querySelector(".intro button");
const inputInicio = document.querySelector(".intro form input");
const campos = document.querySelector("#campos");

botonInicio.addEventListener("click", () => {
  let palabraElegida = inputInicio.value;

  // const regex = /^[a-zA-Z]+$/;

  // if ( regex.test( palabraElegida ) ) {
  //   alert("Palabra correcta");
  // }else{
  //   alert("Solo se permiten caracteres alfabéticos");
  // }

  if (palabraElegida == "") {
    alert("debes introducir una palabra para poder empezar");
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

      console.log({
        'letra input': inputsValidate[i].value,
        'letra array': arrayLetras[i]
      })
    
      if( inputsValidate[i].value == arrayLetras[i] ){

        inputsValidate[i].textContent = arrayLetras[i]

      }else{
        inputsValidate[i].value = ''
        alert("has fallado!!")
      }

    }

    );
    
  }
    
});


