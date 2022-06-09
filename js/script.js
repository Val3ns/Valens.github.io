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