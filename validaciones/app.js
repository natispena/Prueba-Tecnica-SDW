document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    //captura de datos 
    const tipo = document.getElementById('tipo').value;
    const documento = document.getElementById('documento').value;
    const nombre = document.getElementById('nombre').value;
    const genero = document.getElementById('genero').value;
    const Edad = document.getElementById('Edad').value;
    const latitud = document.getElementById('latitud').value;
    const longitud = document.getElementById('longitud').value;
    //captura daros de tipos de mercancia (checkbox)
    const mercanciaElements = document.querySelectorAll('input[name="mercancia[]"]:checked');
    let mercanciaArreglo = [];
    mercanciaElements.forEach((element) => {
        mercanciaArreglo.push(element.value);
    });
    //validacion solo caracteres en nombre y apellido
    const nombreRegex = /^[a-zA-Z\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert('El nombre solo debe contener letras y espacios.');
        return;
    }
    //validacion documento solo numeros
    const documentoRegex = /^\d+$/;
    if (!documentoRegex.test(Edad)) {
        alert('El número de su edad solo debe contener números.');
        return;
    }
    //validacion rango de edad
    if(Edad < 18 || Edad > 100){
        alert('Para hacer este registro debe ser mayor de edad.');
        return;
    }
    // validar que al menos un tipo de mercancia este seleccionado
    if (mercanciaArreglo.length === 0) {
        alert('Por favor, seleccione al menos un tipo de mercancia.');
        return;
    }   
    //preparacion de datos para envio
    let formData = new FormData();
    formData.append('tipo', tipo);
    formData.append('documento', documento);
    formData.append('nombre', nombre);
    formData.append('genero', genero);
    formData.append('Edad', Edad);
    formData.append('mercancia',JSON.stringify(mercanciaArreglo));
    formData.append('latitud', latitud);
    formData.append('longitud', longitud);
    
    //envio de datos con ajax. 
    fetch('/submit', {      
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
        alert('Formulario enviado correctamente.');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario.');
    });     
});
