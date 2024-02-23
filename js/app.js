const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;

    console.log('Datos a enviar:', { nombre, correo, telefono });

    fetch('https://sheet.best/api/sheets/bb0442f7-2c73-45bd-a146-559bc90d02cb', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'Nombre': nombre,
            'Correo': correo,
            'Telefono': telefono
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Datos enviados correctamente');
    })
    .catch(error => {
        console.error('Error al enviar los datos:', error);
        alert('Error al enviar los datos');
    });
});
