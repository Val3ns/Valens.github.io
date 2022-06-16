const $Games = document.querySelector('.sec-Games-js');
const $modalImgGames = document.querySelector(".img-modal-js");


$Games.addEventListener('click', (e) => {
    
    if(e.target.classList.contains('img-btn-modal-js')) {
        //SRC
       let urlImg = e.target.attributes[0].nodeValue;
        //Add modal
       $modalImgGames.src = urlImg;


    }
});


/* --pocicion inicial */
let ubicacionPrincipal = window.pageYOffset;
let $nav = document.querySelector("nav");

/* --evento scroll */
window.addEventListener("scroll", function() {
    /* --muestra la ubicacion cada vez que hagas scroll */
    //console.log(window.pageYOffset);

    /* --donde nos encontramos actualmente */
    let desplazamientoActual = window.pageYOffset;

    /* --condicon para ocultar o mostrar el menu */
    if(ubicacionPrincipal >= desplazamientoActual) {
        /* --si es mayor o igual se muesta */
        $nav.style.top = "0px";
        console.log('Ubicacion Principal')
        console.log(ubicacionPrincipal)
        console.log('desplazamiento')
        console.log(desplazamientoActual)
    } else {
        /* --sino lo ocultamos añadiendo un top negativo */
        $nav.style.top = "-80px";
        console.log('Ubicacion Principal')
        console.log(ubicacionPrincipal)
        console.log('desplazamiento')
        console.log(desplazamientoActual)
    }

    /* --actualizamos la ubicacion principal */
    ubicacionPrincipal = desplazamientoActual;
});

