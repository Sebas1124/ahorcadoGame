const modalInicio = document.querySelector(".intro")
const botonInicio  = document.querySelector(".intro button")
const inputInicio  = document.querySelector(".intro form input")
const campos = document.querySelector("#campos")




botonInicio.addEventListener("click", ()=>{
  let palabraElegida =  inputInicio.value
if(palabraElegida == ""){
        alert("debes introducir una palabra para poder empezar")
    }else if( isNaN(palabraElegida) == false){
       alert("solo se permiten caracteres alfabéticos")
    }else{
    modalInicio.style.display = "none";
    }
   const arrayLetras =  palabraElegida.split("")
   const nuevosInputs = `<input type="text">`
   arrayLetras.forEach(()=>{
       campos.insertAdjacentHTML("beforeend", nuevosInputs)
    })
    return arrayLetras
   }  
)

const camposInputs = campos.querySelectorAll("input")

camposInputs.forEach((input)=>{
  input.addEventListener("input",()=>{
    for(i=0; i < arrayLetras.length; i++){
       if(input.value === arrayLetras[i]){
      input.textContent = arrayLetras[i].toString("")
    }else{
        alarm("has fallado")
    }
  }}
)})



    




