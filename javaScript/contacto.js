const confirmar = document.getElementById('confirm');

function validar() {
    let errorFlag = false;

    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let telefono = document.getElementById('telefono');
    let mail = document.getElementById('mail');
    let correccion = document.getElementById('correccion');
    let radio = document.getElementsByName('opinion');
    const validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let seleccion = '';

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            seleccion = radio[i].value;
            break;
        }
    }

    if (nombre.value === "") {
        document.getElementById('errorNombre').style.display = 'block';
        errorFlag = true;
    }
    if (apellido.value === "") {
        document.getElementById('errorApellido').style.display = 'block';
        errorFlag = true;
    }
    if (telefono.value.length <= 0 || telefono.value.length > 11) {
        document.getElementById('errorTelefono').style.display = 'block';
        errorFlag = true;
    }
    if (mail.value === "" || !validMail.test(mail.value)) {
        document.getElementById('errorMail').style.display = 'block';
        errorFlag = true;
    }

    
    if (!errorFlag) {
        document.getElementById('confirm').style.display = 'block';
    }

    return false; 
}

function spawn() {
   
    confirmar.style.display = 'none';
    
    
    let result = document.getElementById('result');
    result.style.display = 'block';

    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const mail = document.getElementById('mail').value;
    const correccion = document.getElementById('correccion').value;
    const seleccion = Array.from(document.getElementsByName('opinion'))
                           .find(radio => radio.checked)?.value || '';

    const datos = `
        Nombre: ${nombre}<br>
        Apellido: ${apellido}<br>
        Teléfono: ${telefono}<br>
        Correo Electrónico: ${mail}<br>
        Opinión: ${seleccion}<br>
        Correccion: ${correccion}
    `;
    document.getElementById('datosIngresados').innerHTML = datos;
    document.getElementById('dataContainer').style.display = 'block';

    
    setTimeout(() => {
        dataContainer.style.display = 'none';
        result.style.display = 'none';
    }, 15000);

    
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('correccion').value = '';
    document.getElementsByName('opinion').forEach((radio) => (radio.checked = false));
}

function eliminar() {
    confirmar.style.display = 'none';
}
