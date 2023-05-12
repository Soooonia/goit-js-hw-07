import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// 1)Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
 const imageList= document.querySelector('.gallery');
 const imagesListItems = createCards(galleryItems)
imageList.insertAdjacentHTML('beforeend', imagesListItems)
imageList.addEventListener('click',onContainerOpen)
function createCards(items){
return items.map(({original,preview,description})=>`
<li class="gallery__item">
  <a class="gallery__link" 
  href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`)
  .join('')  
}

function onContainerOpen(event){
event.preventDefault()
if(!event.target.classList.contains('gallery__image')){
    return
}
const imageSrc= event.target.dataset.source
const intance= basicLightbox.create(`
<img src='${imageSrc}' width='' height''>`)
intance.show()
console.log(event.target)
}
