

/**
 * product details page
 */

const productDisplay = document.querySelector("[data-product-display]");
const productThumbnails = document.querySelectorAll("[data-product-thumbnail]");

for (let i = 0; i < productThumbnails.length; i++) {
  productThumbnails[i].addEventListener("click", function () {
    productDisplay.src = this.src;
    productDisplay.classList.add("fade-anim");

    setTimeout(function () {
      productDisplay.classList.remove("fade-anim");
    }, 250);

  });
}

 
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  autoplay:true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 2,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 2,
      },
  },
});


function toggleActive(menuId) {
  var menuItems = document.querySelectorAll('.menyu-header-part1');
  menuItems.forEach(function(item) {
    item.classList.remove('active');
  });

  var clickedMenuItem = document.getElementById(menuId);
  clickedMenuItem.classList.add('active');
}

document.getElementById('menyu1').addEventListener('click', function() {
  var menuItems = document.getElementsByClassName('menyu01');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.display = 'block';
  }

  var otherMenuItems = document.getElementsByClassName('menyu02');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
  var otherMenuItems = document.getElementsByClassName('menyu03');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
  var otherMenuItems = document.getElementsByClassName('menyu04');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
});

document.getElementById('menyu2').addEventListener('click', function() {
  var menuItems = document.getElementsByClassName('menyu01');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.display = 'none';
  }

  var otherMenuItems = document.getElementsByClassName('menyu02');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'block';
  }
  var otherMenuItems = document.getElementsByClassName('menyu03');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }

  var otherMenuItems = document.getElementsByClassName('menyu04');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
});


document.getElementById('menyu3').addEventListener('click', function() {
  var menuItems = document.getElementsByClassName('menyu01');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.display = 'none';
  }

  var otherMenuItems = document.getElementsByClassName('menyu02');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
  var otherMenuItems = document.getElementsByClassName('menyu03');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'block';
  }

  var otherMenuItems = document.getElementsByClassName('menyu04');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
});


document.getElementById('menyu4').addEventListener('click', function() {
  var menuItems = document.getElementsByClassName('menyu01');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.display = 'none';
  }

  var otherMenuItems = document.getElementsByClassName('menyu02');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
  var otherMenuItems = document.getElementsByClassName('menyu03');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
  var otherMenuItems = document.getElementsByClassName('menyu04');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'block';
  }
});






function selectMenu(selectedId) {
  // Tüm menü öğelerinden 'active' sınıfını kaldır
  var menuElements = document.querySelectorAll('.type-header div');
  menuElements.forEach(function(element) {
      element.classList.remove('active');
  });

  // Seçilen menü öğesine 'active' sınıfını ekle
  document.getElementById(selectedId).classList.add('active');
}



document.getElementById('secim1').addEventListener('click', function() {
  var menuItems = document.getElementsByClassName('yemekler');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.display = 'block';
  }

  var otherMenuItems = document.getElementsByClassName('qehveler');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
  var otherMenuItems = document.getElementsByClassName('serablar');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
});


document.getElementById('secim2').addEventListener('click', function() {
  var menuItems = document.getElementsByClassName('yemekler');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.display = 'none';
  }

  var otherMenuItems = document.getElementsByClassName('qehveler');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'block';
  }
  var otherMenuItems = document.getElementsByClassName('serablar');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
});

document.getElementById('secim3').addEventListener('click', function() {
  var menuItems = document.getElementsByClassName('yemekler');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.display = 'none';
  }

  var otherMenuItems = document.getElementsByClassName('qehveler');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'none';
  }
  var otherMenuItems = document.getElementsByClassName('serablar');
  for (var j = 0; j < otherMenuItems.length; j++) {
    otherMenuItems[j].style.display = 'block';
  }
});