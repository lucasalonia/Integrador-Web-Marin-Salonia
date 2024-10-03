let imagenes = ['imagenes/casa1.webp','imagenes/casa2.jpg','imagenes/casa3.jpg','imagenes/casa4.jpg'];
let contador = 0;
//1 Creamos una funcion que reciba por parametro el contenedor en donde se encontrara el carrusel
function slide(contenedor){
    //2 creamos un evento de tipo click en el contenedor
    contenedor.addEventListener('click', e => {
        //3 botones del contenedor definidos por clase en html
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        //4identificamos el elemnto donde se cargan las imagenes
        let img = contenedor.querySelector('.imagenes');

        //5variable que recibe el evento click. El evento click es colocado en todo el contenedor
        let target = e.target;

        //6 Identificamos si el boton que se preciona es hacia adelante o hacia atras
        if(target == atras){
            //7 debemos saber si nuestro contador es mayor a cero
            if(contador>0){
                //8 si es mayor que cero el index de la variables imagenes se reduce en uno mostrando la imagenes que tiene detras
                img.src = imagenes [contador - 1];
                //9 el contador se reduce
                contador--;  
            }else {
                //10 si es cero deberiamos volver a la imagen que se encuentra en el ultimo numero del index
                img.src = imagenes[imagenes.length - 1];
                //11 el contador es igual a la posicion de la imagen
                contador = imagenes.length - 1;
            }
        }else if(target == adelante){
            //12 si el contador es menor a la poscion de la ultima imagen
            if(contador<imagenes.length-1){
                //13 realizamos el procedimiento opuesto al asignado al boton atras
                img.src = imagenes [contador + 1];
                contador++;  
            }else {
                //14 volvemos al principio del array
                img.src = imagenes[0];
                contador = 0;
            }
        }

    });
}
//15 agregamos el contenido al documento cuando el dom este cargado
document.addEventListener("DOMContentLoaded", ()=>{
    //16 identificamos la etiqueta que contiene los elementos del carrousel
    let d_contenedor = document.querySelector('.destacados__contenedor');
    slide(d_contenedor);

});
