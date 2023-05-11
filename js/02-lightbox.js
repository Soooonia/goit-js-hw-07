import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const imageList= document.querySelector('.gallery');
const imagesListItems = createCards(galleryItems)
imageList.insertAdjacentHTML('beforeend', imagesListItems)
imageList.addEventListener('click',onContainerOpen)
function createCards(galerryItems){
return galerryItems.map(({original,preview,description})=>{
return`
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`})
.join('')

}

function onContainerOpen(event){
    event.preventDefault()
    if(!event.target.containst ('gallery__image')){
        return
    }
    console.log(event.target)
    }
