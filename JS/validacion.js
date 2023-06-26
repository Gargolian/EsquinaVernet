        
        function soloCaracter(cadena) {
            var expRegular = /^[a-zA-Z]+$/; // Expresión regular para solo caracteres alfabéticos
            if (!expRegular.test(cadena)) {
                alert("Solo puede contener caracteres alfabéticos.");
                event.preventDefault();
                return false;
            }

            return true;
        }

        function validateEmail(email) {
            // Utilizo una expresión regular para validar el formato del correo electrónico
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
        
        function validaForm() {
            var nombreInput = document.getElementById("nombre")
            var apellidoInput = document.getElementById("apellido")
            var emailInput = document.getElementById("email");
            var messageInput = document.getElementById("mensaje");

            // Validar campo de Nombre
            nombreTxt=nombreInput.value.trim()//sacamos caracteres los espacios
            if (nombreTxt === null || nombreTxt.length === 0 || !soloCaracter(nombreTxt)) {//el nombre que no sea nulo que tenga mas de 1 caracter y que sea alfanumerico
                alert("Por favor, introduce un Nombre válido.");
                event.preventDefault();
                return false;
            }

            // Validar campo de Apellido
            apellidoInput=apellidoInput.value.trim()//le sacamos los espacios
            if (apellidoInput === null || apellidoInput.length === 0 || !soloCaracter(apellidoInput)) {//el apellido que no sea nulo que tenga mas de 1 caracter y que sea alfanumerico
                alert("Por favor, introduce un Apellido válido.");
                event.preventDefault();
                return false;
            }


            // Validar campo de correo electrónico
            if (!validateEmail(emailInput.value)) {
                alert("Por favor, introduce un correo electrónico válido.");
                event.preventDefault();
                return false;
            }

            // Validar campo de mensaje
            if (messageInput.value.length < 10) {
                alert("Por favor, introduce un mensaje con al menos 10 caracteres.");
                event.preventDefault();
                return false;
            }

            // Si ambos campos son válidos, se envía el formulario
            return true;

        }

      
        //asignamos el evento listerner al boton enviar del formulario
        const $form = document.querySelector('#form')
        $form.addEventListener('submit', enviar)//al ejecutar el evento llamamos a la funcion enviar
        //la funcion va a esperar la respuesta de la api para enviar el mensaje alert
        async function enviar(event) {

            if (!validaForm()){
                event.preventDefault();
                return false;
            }

            const form = new FormData(this)
            const response = await fetch(this.action, {
                method: this.method,
                body: form,
                headers: {
                    'Accept': 'application/json'
                }
            })
            if (response.ok) {
                this.reset()
                alert('Gracias por contactarnos, te escribiremos a la brevedad')

            }

        }

