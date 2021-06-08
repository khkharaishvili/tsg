
 document.getElementById("product-downdrop").addEventListener ("click", openMenu);

 function openMenu() {
    document.getElementById("slideMenu").classList.toggle("active");
 }


 document.getElementById("product-downdrop").addEventListener ("click", changeMenuFlow);

 function changeMenuFlow() {
     console.log ("changed!")

 }

 $(document).ready(function() {
  $("#product-list-item").mouseover(function() {
    $("#slide-down").stop().slideDown("slow");
  });

  $("#product-list-item").mouseout(function() {
    $("#slide-down").slideUp("slow");
  });
});


/*
var swiper = new Swiper(".mySwiper", {});


var swiper = new Swiper(".products-swiper-container", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
 

const swiper = new Swiper ('.swiper-container', {
      
      direction: 'vertical',
      loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

 
  const partnersSwiper = new Swiper('.partners-swiper-container', {
    slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 20,
    pagination: {
      el: '.partners-swiper-pagination',
      clickable: true,
    },
  });


  const clientsSwiper = new Swiper('.clients-swiper-container', {
    slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 20,
    pagination: {
      el: '.clients-swiper-pagination',
      clickable: true,
    },
  });


  var productsSwiper = new Swiper('.products-swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.products-swiper-pagination',
      clickable: true,
    },
  });
  */






