(function(){
  var header, toggler, navDesktop, showcase;

  toggler = document.querySelector('.toggler');
  header = document.querySelector('header');
  navDesktop = document.querySelector('.nav-desktop');
  showcase = document.querySelector('#showcase');

  console.log(showcase);
  // Fixed Header when scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 80) {
      header.classList.add('headerScroll');
      showcase.style.paddingTop = "14rem"
    } else {
      header.classList.remove('headerScroll');
      showcase.style.paddingTop = "3rem"

    }
  })

  // Hide / Show Navigation when click the menu icon
  toggler.addEventListener('click', function() {
    navDesktop.classList.toggle('toggle');
  })
}());