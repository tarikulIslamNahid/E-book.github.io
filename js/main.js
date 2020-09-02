var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    //   type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // ================================================
  // mobile nav
  // ================================================
 
  let nav = document.querySelectorAll('.nav__trigger');

  nav.forEach(oc =>{
    oc.addEventListener('click',function(){
      let menu = document.querySelector('.mobile__nav');
      menu.classList.toggle('active');

    })
  })

  let navLinks = document.querySelectorAll('.main__nav-link');

  navLinks.forEach(navLink => {
      navLink.addEventListener('click',function(){
          navLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');
      });
  });















