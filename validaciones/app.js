document.getElementById('formulario').addEventListener('submit', function(event) {
    alert('Submit detectado');
    event.preventDefault(); // Evita el envío del formulario por defecto
    //captura de datos 
    const tipo = document.getElementById('tipo').value;
    const documento = document.getElementById('documento').value;
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const latitud = document.getElementById('latitud').value;
    const longitud = document.getElementById('longitud').value;
    //captura daros de tipos de mercancia (checkbox)
    const mercanciaElements = document.querySelectorAll('input[name="mercancia[]"]:checked');
    let mercanciaArreglo = [];
    mercanciaElements.forEach((element) => {
        mercanciaArreglo.push(element.value);
    });
    //validacion solo caracteres en nombre
    const nombreRegex = /^[a-zA-Z\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert('El nombre solo debe contener letras y espacios.');
        return;
    }
    //validacion documento solo numeros
    const edadRegex = /^\d+$/;
    if (!edadRegex.test(edad)) {
        alert('El número de su edad solo debe contener números.');
        return;
    }
    //validacion rango de edad
    if(edad < 18 || edad > 100){
        alert('Para hacer este registro debe ser mayor de edad.');
        return;
    }
    // validar que al menos un tipo de mercancia este seleccionado
    if (mercanciaArreglo.length === 0) {
        alert('Por favor, seleccione al menos un tipo de mercancia.');
        return;
    }   
    alert('Validaciones pasadas correctamente. Enviando formulario...');
    //preparacion de datos para envio
    let formData = new FormData();
    formData.append('tipo', tipo);
    formData.append('documento', documento);
    formData.append('nombre', nombre);
    formData.append('edad', edad);
    formData.append('genero', genero);
    formData.append('mercancia',JSON.stringify(mercanciaArreglo));
    formData.append('latitud', latitud);

    formData.append('longitud', longitud);
    alert('ANTES DEL FETCH');

fetch('../prueba-tecnica-SDW/controladores/controlador.php', {
    method: 'POST',
    body: formData
})
.then(response => response.text())
.then(data => {
    alert('FETCH OK');
})
.catch(error => {
    alert('ERROR EN FETCH');
});

    /**envio de datos con ajax. 
    fetch('controladores/controlador.php', {     
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
    });  **/   
});
