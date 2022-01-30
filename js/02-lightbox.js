import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');


const makeGalleryItem = items => {

  return items.map((item) => {
    const galleryItem = document.createElement('a');
    const galleryItemImg = document.createElement('img');
    galleryItem.append(galleryItemImg);
    galleryItem.classList.add("gallery__item");
    galleryItemImg.classList.add("gallery__image");
    galleryItem.href = item.original;
    galleryItemImg.src = item.preview;
    galleryItemImg.alt = item.description;
    
    return galleryItem;
  });
};

galleryList.append(...makeGalleryItem(galleryItems));

let gallery = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
    });