const confirmar = document.getElementById('confirm');

function validar(){
    let errorFlag = false;

    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let telefono = document.getElementById('telefono');
    let mail = document.getElementById('mail');
    let correccion  = document.getElementById('correccion');
    let radio = document.getElementsByName('opinion');
    const validMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let seleccion = '';

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            seleccion = radio[i].value;
          break;
        }
    }
    
    if(nombre.value==""){
        let errorNombre = document.getElementById('errorNombre');
        errorNombre.style.display = 'block';

        errorFlag =true;
    }
    if(apellido.value==""){
        let errorApellido = document.getElementById('errorApellido');
        errorApellido.style.display = 'block';

        errorFlag =true;
    }
    if( telefono.value.length <=0 || telefono.value.length >11){
        let errorTelefono = document.getElementById('errorTelefono');
        errorTelefono.style.display = 'block';
    }
    if(mail.value=="" || !validMail.test(mail.value)){
        let errorMail = document.getElementById('errorMail');
        errorMail.style.display = 'block';

        errorFlag =true;
    }
    


    //Respuesta
    if(!errorFlag){
        let texto = document.createElement('p');
        let reseña = document.createElement('p');
        texto.innerHTML = `${apellido.value}, ${nombre.value} valora la pagina como '${seleccion}' y deja la siguiente reseña: `;
        reseña.innerHTML = `${correccion.value}`;
        confirmar.insertBefore(texto, confirmar.firstChild);
        texto.appendChild(reseña);
        confirmar.style.display = 'block';
        confirmar.style.boxShadow ='0px 0px 40px 5px  rgba(0, 0, 0, 0.9)';
        nombre.value = '';
        apellido.value='';
        mail.value='';
        telefono.value='';
        correccion.value='';
        setTimeout(() => {
            confirmar.removeChild(texto);
            confirmar.removeChild(reseña);
        }, 7000);
        const form = document.getElementById('form');
        form.style.backgroundColor= 'rgba(0, 0, 0, 0.3)';
       
}


    return false;
}


function limpiar(event){

    let limpiarSpan = event.target.nextElementSibling;
    limpiarSpan.style.display = 'none';
    let result=document.getElementById('result');
    result.style.display = 'none';
}

function spawn(){
    const form = document.getElementById('form');
    form.style.backgroundColor= 'white';
    confirmar.style.display = 'none';
    let result=document.getElementById('result');
    result.style.display = 'block';
    let main = document.getElementById('main');
    main.style.backgroundColor= 'gba(0, 0, 0, 0.3)';


}
function elimniar(){
    confirmar.style.display = 'none';
    const form = document.getElementById('form');
    form.style.backgroundColor= 'white';
    
}
