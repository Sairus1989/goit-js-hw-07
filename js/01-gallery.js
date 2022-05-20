import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryConteiner = document.querySelector('.gallery');
const cardsGallery = createImgCards(galleryItems);
galleryConteiner.insertAdjacentHTML('beforeend',cardsGallery );

function createImgCards (cards){
    return cards.map(({ preview,original,description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    
}).join('');
};
galleryConteiner.addEventListener("click", galleryCardClick);


function galleryCardClick(evt) {    
    evt.preventDefault();
    if (!evt.target.dataset.source) {
        return
    }
    const lightBox = basicLightbox.create(`
		<img  src="${evt.target.dataset.source}">
	`);
    lightBox.show();
    
    this.addEventListener("keydown", onPresEscape);
    function onPresEscape(evt) {
        if (evt.key !== "Escape") {
            return
        }
        lightBox.close();
        this.removeEventListener("keydown", onPresEscape);
    }
}