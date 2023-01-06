import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


// создає розмітку галереї

const galleryContainer = document.querySelector('.gallery');
const imgsCardsMarkup = creatImgsCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', imgsCardsMarkup);
galleryContainer.addEventListener('click', onGalleryCardClick);

// сворюєм розмітку
function creatImgsCardsMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return ` <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
    .join('');

}

function onGalleryCardClick(event) {
  //  забороняємо перехід на зовнішні сторінки

  event.preventDefault();

  // перевіряємо, якщо клік не на зображення виходимо, інакще спрацьовує галерея  basicLightbox

  if (event.target.nodeName !== "IMG") { return; }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

  instance.show()

  // закриття зображення

  galleryContainer.addEventListener('keydown', (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}



