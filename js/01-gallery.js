import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');


const makeGalleryItem = items => {

  return items.map((item) => {
    const galleryItem = document.createElement('div');
    const galleryItemLink = document.createElement('a');
    const galleryItemImg = document.createElement('img');
    galleryItem.append(galleryItemLink);
    galleryItemLink.append(galleryItemImg);
    galleryItem.classList.add("gallery__item");
    galleryItemLink.classList.add("gallery__link");
    galleryItemImg.classList.add("gallery__image");
    galleryItemImg.src = item.preview;
    galleryItemImg.dataset.source = item.original;
    galleryItemImg.alt = item.description;
    
    return galleryItem;
  });
};

galleryList.append(...makeGalleryItem(galleryItems));

let instance = basicLightbox;

const onModalOpen = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
  instance.show();
};

const onModalClose = event => {
  if (event.key === 'Escape' && instance.visible()) {
    instance.close();
  }
};

document.addEventListener('keydown', onModalClose);
galleryList.addEventListener('click', onModalOpen);
