import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imgsCardsMarkup = creatImgCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', imgsCardsMarkup);

// сворюєм розмітку

function creatImgCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
        .join('');
}
//  запускаємо бібліотеку SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionType: "alt",
    captionsData: "alt",
}); _



