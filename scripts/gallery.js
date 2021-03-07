'use strict';

const gallery = document.querySelector('.gallery');
const modalDialog = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');



for(let photo of photos) {
    gallery.insertAdjacentHTML('beforeend', 
    `<div class = "photo">
    <img id="${photo.id}" 
    src="./img/${photo.imgName}.jpg" alt="${photo.alt}"> 
    </div>`)
    console.log(photo);
}

const images = document.querySelectorAll('.photo img');

const openModal = function(imageSrc){
    const image = modalDialog.querySelector('.modal-container')

    image.innerHTML = `<img src=${imageSrc}/>`

    overlay.classList.remove('hidden');
    modalDialog.classList.remove('hidden');
} 

for(let image of images){
    let src = image.getAttribute('src');
    let id = image.getAttribute('id');

    image.addEventListener('click', function() {
        openModal(src, id);
    });
}

const quitModal = function() {
    modalDialog.classList.add('hidden')
    overlay.classList.add('hidden');
}

closeModal.addEventListener('click', quitModal);
overlay.addEventListener('click', quitModal);

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        if(!modalDialog.classList.contains('hidden')){
            quitModal();
        }
    }
}) 