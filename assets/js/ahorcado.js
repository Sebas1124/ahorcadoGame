const palabra       = document.getElementById('palabraAdivinar');
const startGameBtn  = document.getElementById('startGame');

// Contenedores
const lobbyContainer = document.getElementById('lobbyGame');
const gameContainer  = document.getElementById('gameRoom');
const letrasShow     = document.getElementById('letrasShow');
const personaje      = document.getElementById('personaje');
const intentosId     = document.getElementById('intentosId');

const lettersWrongContainer = document.getElementById('lettersWrongContainer');
const lettersWrong          = document.getElementById('lettersWrong');

// personaje
const imageHanMan    = document.getElementById('imageHanMan');

// Variables
let intento = 0;
let intentosMax = 6;

let letrasResult = [];

const dividrPalabra = (palabra) => {
    const letras = palabra.split('');
    return letras;
}

palabra.addEventListener('keyup', (e) => {

    // cambiar palabra a uppercase
    let valuePalabra = e.target.value.toUpperCase();

    // eliminar espacios
    valuePalabra = valuePalabra.replace(/\s/g, '');

    const letras = dividrPalabra(valuePalabra);
    letrasResult = letras;
});

startGameBtn.addEventListener('click', () => {
    
    if (letrasResult.length <= 0) {
        alert('Debes ingresar una palabra');
        return;
    }

    intentosId.innerHTML = 'Intentos: ' + intento + '/' + intentosMax;

    lobbyContainer.classList.add('d-none');
    gameContainer.classList.remove('d-none');

    letrasResult.forEach(letra => {
        const div = document.createElement('div');
        div.classList.add('col-1');
        div.innerHTML = `
            <div class="form-group">
                <input style="min-width: 70px;" type="text" class="form-control validateInputAhorcado" value="">
            </div>
        `;
        letrasShow.appendChild(div);
    });

    const validateInputs = document.querySelectorAll('.validateInputAhorcado');

    validateInputs.forEach(input => {

        input.addEventListener('keyup', (e) => {

            // validar si ya se termino el juego POR MAXIMO DE INTENTOS
            if (intento >= intentosMax) {

                // mostrar personaje completo
                personaje.classList.remove('d-none');
                
                // disable inputs
                validateInputs.forEach(input => {
                    input.disabled = true;
                });

                alert('Has perdido');
                return;
            }

            // mi valor ingresado a uppercase
            const value = e.target.value.toUpperCase();

            // eliminar espacios
            e.target.value = e.target.value.replace(/\s/g, '');
            // limitar a 1 caracter
            if (e.target.value.length >= 1) {

                // avanzar al siguiente input si es correcto
                const inputs = Array.from(validateInputs);
                const index = inputs.indexOf(e.target);
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();

                    if (inputs[index + 1].value.length > 0) {
                        // ya tiene valor saltar al siguiente
                        inputs[index + 1].focus();
                    }

                    // validar si todos los inputs estan llenos
                    const inputsValues = Array.from(validateInputs).map(input => input.value !== '');
                    const palabraCompleta = inputsValues.join('');

                    if (palabraCompleta === letrasResult.join('')) {
                        alert('Has ganado');
                        imageHanMan.removeAttribute('src');
                        imageHanMan.setAttribute('src', '../assets/images/happy.png');
                        personaje.classList.remove('d-none');
                        return;
                    }


                } else {
                    e.target.blur();
                }
            }

            const letters      = Array.from(letrasResult);
            const inputsFilter = Array.from(validateInputs);

            inputsFilter.forEach((input, index) => {
                const letra = letters[index];
                if ( input.value == letra ){
                    input.classList.add('is-valid');
                }else{
                    input.classList.remove('is-valid');
                    input.value = '';
                }
            });

            // Validar si ingreso una letra que es correcta pero no esta en la posicion correcta
            // insertar en la posicion correcta
            const letras = Array.from(letrasResult);
            const inputs = Array.from(validateInputs);

            letras.forEach((letra, index) => {
                const input = inputs[index];
                if (letra === value) {

                    input.value = value;
                    input.classList.add('is-valid');

                    // validar si ya se termino el juego ganado
                    const inputsValues = Array.from(validateInputs).map(input => input.value);
                    const palabraCompleta = inputsValues.join('');

                    if (palabraCompleta === letrasResult.join('')) {
                        alert('Has ganado');
                        imageHanMan.removeAttribute('src');
                        imageHanMan.setAttribute('src', '../assets/images/happy.png');
                        personaje.classList.remove('d-none');
                        return;
                    }

                }
            });

            // validar si la letra es correcta en esa posicion o en otra, 
            // si no es valida en ninguna posicion aumentar intento y mostrar que el input es incorrecto o correcto con is-valid o is-invalid
            if (!letras.includes(value)) {

                if (intento >= intentosMax) {
                    return;
                }

                if (e.target.classList.contains('is-valid')){
                    e.target.classList.add('is-invalid');
                    e.target.classList.remove('is-valid');
                }else{
                    e.target.classList.add('is-invalid');
                }

                
                intento++;
                intentosId.innerHTML = 'Intentos: ' + intento + '/' + intentosMax;

                // mostrar contenedor de letras incorrectas
                lettersWrongContainer.classList.remove('d-none');
                lettersWrong.innerHTML += value + ', ';

                //vaciar input
                e.target.value = '';
                e.target.focus();

            } else {
                
                if (e.target.classList.contains('is-invalid')) {
                    e.target.classList.remove('is-invalid');
                    e.target.classList.add('is-valid');
                }else{
                    e.target.classList.add('is-valid');
                }

            }
            

        });

    });

});

