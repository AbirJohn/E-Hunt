// Searchform Js
let  searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
searchForm.classList.toggle('active');
Navbar.classList.remove('active');

}


// Navbar Js 

let  Navbar = document.querySelector('.navbar');

document.querySelector('#manu-btn').onclick = () =>{
Navbar.classList.toggle('active');
searchForm.classList.remove('active');

}


// windows Scrolling  Function 
window.onscroll = () =>{

    searchForm.classList.remove('active');
    Navbar.classList.remove('active');

    
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');

    }
    else{
        document.querySelector('.header').classList.remove('active');
    }

}


// windows Onload Function 
window.onload = () =>{
    
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');

    }
    else{
        document.querySelector('.header').classList.remove('active');
    }

}




// Swiper JS slider
var swiper = new Swiper(".home-slider", {
    spaceBetween:20,
    effect: "fade",
    Loop:true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
  });



// Swiper JS slider
var swiper = new Swiper(".product-slider", {
    spaceBetween:20,
    Loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grabCursor:true,
    breakpoints: {
        0: {
          slidesPerView:1,
        },
        768: {
          slidesPerView:2,
        },
        991: {
          slidesPerView:3,
        },
      },

  });
