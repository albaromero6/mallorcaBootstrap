/******************************************************************/
/*                     MALLORCA CON BOOTSTRAP                     */
/*                TRABAJO REALIZADO POR ALBA ROMERO               */
/*                           VERSIÓN 1.0                          */
/******************************************************************/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var requiredFields = document.querySelectorAll('[data-required]');
        var isValid = true;
        var errorMessage = '';

        // Verificar que todos los campos obligatorios estén rellenados
        requiredFields.forEach(function(field) {
            if (!field.value.trim() && (field.type !== 'checkbox' && field.type !== 'radio')) {
                isValid = false;
                errorMessage = "Por favor, complete todos los campos obligatorios.";
            }

            if (field.tagName.toLowerCase() === 'select' && field.value === 'Selecciona una opción') {
                isValid = false;
                errorMessage = "Por favor, seleccione una opción en el campo Motivo.";
            }
        });

        // Si algún campo obligatorio no está rellenado, mostrar mensaje de error
        if (!isValid) {
            swal({
                title: "Error",
                text: errorMessage,
                icon: "error",
                button: {
                    text: "OK",
                    className: "btn-green" 
                }
            });
            return;
        }

        // Verificar condición del nombre si todos los campos obligatorios están rellenados
        var nameField = document.getElementById('name');
        if (!/^[a-zA-Z]{2,}$/.test(nameField.value.trim())) {
            isValid = false;
            errorMessage = "El nombre debe contener solo letras y tener al menos 2 caracteres.";
        }

        // Si la condición del nombre no se cumple, mostrar mensaje de error
        if (!isValid) {
            swal({
                title: "Error",
                text: errorMessage,
                icon: "error",
                button: {
                    text: "OK",
                    className: "btn-green" 
                }
            });
            return;
        }

        // Si todos los campos obligatorios están rellenados y la condición del nombre se cumple, enviar el formulario
        alert('Formulario enviado correctamente');
    });
});







