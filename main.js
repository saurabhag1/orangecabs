const container = document.querySelector('.container');
        const images = ['image1', 'image2', 'image3'];
        let currentImageIndex = 0;

        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            container.classList.remove(...images);
            container.classList.add(images[currentImageIndex]);
        }, 2000);

function onSubmit(token) {
document.getElementById("demo-form").submit();


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});}


document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var content = document.getElementById('content');
    var navbarHeight = navbar.offsetHeight;
  
    function handleScroll() {
      var scrollPosition = window.scrollY;
  
      if (scrollPosition > navbarHeight) {
        navbar.classList.add('fixed');
      } else {
        navbar.classList.remove('fixed');
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  });
  

  document.addEventListener('DOMContentLoaded', function () {
  var logoList = document.querySelector('.logo-list');
  var scrollLeftBtn = document.getElementById('scroll-left');
  var scrollRightBtn = document.getElementById('scroll-right');
  var logos = document.querySelectorAll('.logo');
  var currentIndex = 0;

  scrollLeftBtn.addEventListener('click', function () {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateScroll();
  });

  scrollRightBtn.addEventListener('click', function () {
    currentIndex = Math.min(currentIndex + 1, logos.length - 4);
    updateScroll();
  });

  logos.forEach(function (logo) {
    logo.addEventListener('mouseover', function () {
      logo.style.filter = 'grayscale(0%)'; /* Colorful when hovered */
    });

    logo.addEventListener('mouseout', function () {
      logo.style.filter = 'grayscale(100%)'; /* Black and white when not hovered */
    });
  });

  function updateScroll() {
    var scrollValue = -currentIndex * (100 + 20); /* Width of logo + margin-right */
    logoList.style.transform = 'translateX(' + scrollValue + 'px)';
  }
});