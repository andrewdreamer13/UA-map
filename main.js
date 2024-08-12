// svg map 

const listRegions = document.querySelectorAll('.region__link');
const mapRegions = document.querySelectorAll('.svg-link');
const regions = document.querySelectorAll('.region__link');

// mouse actions for listRegions

listRegions.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    let self = e.currentTarget;
    let selfLink = self.getAttribute('href');
    let currentMapLink = document.querySelector(`#ua .svg-link[href="${selfLink }"]`);
    self.classList.add('region__link-active');
    let currentPath = currentMapLink.querySelectorAll('path');
    currentPath.forEach((path) => {
      path.style.cssText = `fill: rgb(219, 234, 12);`
    })
  })
});

listRegions.forEach((item) => {
  item.addEventListener('mouseleave', (e) => {
    let self = e.currentTarget;
    let selfLink = self.getAttribute('href');
    let currentMapLink = document.querySelector(`#ua .svg-link[href="${selfLink }"]`);
    self.classList.remove('region__link-active');
    let currentPath = currentMapLink.querySelectorAll('path');
    currentPath.forEach((path) => {
      path.style.cssText = `fill: #0a6def;`
    })
   })
})

// mouse actions for mapRegions

mapRegions.forEach((item) => {
  item.addEventListener('mouseenter', (e) => {
    let self = e.currentTarget;
    let selfLink = self.getAttribute('href');
    let currentListLink = document.querySelector(`.region__link[href="${selfLink }"]`);
    currentListLink.classList.add('region__link-active');
    let currentPath = self.querySelectorAll('path');
    currentPath.forEach((path) => {
      path.style.cssText = `fill: rgb(219, 234, 12);`
    })
  })
})

  mapRegions.forEach((item) => {
    item.addEventListener('mouseleave', (e) => {
      let self = e.currentTarget;
      let selfLink = self.getAttribute('href');
      let currentListLink = document.querySelector(`.region__link[href="${selfLink }"]`);
      currentListLink.classList.remove('region__link-active');
      let currentPath = self.querySelectorAll('path');
      currentPath.forEach((path) => {
        path.style.cssText = `fill:#0a6def;`
      })
    })
  });
 
      
    
// open popup
openModalWindows();

function openModalWindows() {
  const popup = document.querySelector('.popup');
  const popupInner = document.querySelector('.popup__inner');
  const closeButton = document.querySelector('.popup__close');
  const openButtons = document.querySelectorAll('a[data-id');

  openButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      let dataId = event.currentTarget.getAttribute('data-id');
      async function getData() {
        let response = await fetch(`data.json`, {'method': 'GET'});
        let data = await response.json();
        data.forEach((item) => {
         if(item.id == dataId){
          popupInner.innerHTML = `
         
          <div class="popup__content">
               <h2 class="popup__oblast">${item.oblast}</h2>
               <h2 class="popup__capital">Oblast center - ${item.capital}</h2>
            </div>
            <img class="popup__img" src="${item.src}" alt="${item.alt}">
           `;
          }
        })
      }
       getData()
       
       popup.classList.add('popup-visible');
       popupInner.classList.add('popup__inner-active');
       document.body.style.overflow = 'hidden';
       
 
       closeButton.addEventListener('click', () => {
         popup.classList.remove('popup-visible');
         document.body.style.overflow = 'scroll';
         popupInner.innerHTML = '';
         popupInner.classList.remove('popup__inner-active');
       })
       window.addEventListener('click', (e) => {
         if (e.target == popup) {
           popup.classList.remove('popup-visible');
           popupInner.innerHTML = '';
           popupInner.classList.remove('popup__inner-active');
           document.body.style.overflow = 'scroll';
         }
       })
     })
   }) 
 } 
          
      




           
           
          
        
       
