// var
var scrollToTopButton = document.getElementById("scrollToTop");
var firstHeading = document.querySelector("section h2:first-of-type");
var scrollToSelector = document.getElementById('scrollToSection');

// Viewport
function isOutOfViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= window.innerHeight || 
        rect.bottom < 0 ||                 
        rect.right < 0 ||                  
        rect.left >= window.innerWidth     
    );
}

// Button Visibility
function buttonVisibility() {
    if (!isMobileOS() && isOutOfViewport(firstHeading)) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

// scrollToTop
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// scrollToSection
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    var scrollPosition = section.offsetTop - 150;
    if (scrollPosition < 0) {
      scrollPosition = 0;
    }
    window.scrollTo({
      top: scrollPosition,
      ehavior: 'smooth'
    });
  }
}

// Top Button Position
function topButtonPosition() {
  const section = document.querySelector('section');
  if (section) {
    const sectionRect = section.getBoundingClientRect();
    let buttonRight = window.innerWidth - (sectionRect.right + 200);
    buttonRight = Math.max(buttonRight, 0);
    scrollToTopButton.style.right = `${buttonRight}px`;
  }
}

// Section Button Position
function sectionButtonPosition() {
  if (!isMobileOS()) {
    const section = document.querySelector('section');
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      let buttonRight = window.innerWidth - (sectionRect.right + 190);
      buttonRight = Math.max(buttonRight, 0);
      scrollToSelector.style.right = `${buttonRight}px`;
    }
  }
}

// Detect Mobile OS
function isMobileOS() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

window.addEventListener("scroll", buttonVisibility);
scrollToTopButton.addEventListener("click", scrollToTop);
window.addEventListener('resize', () => {
  topButtonPosition();
  sectionButtonPosition();
});
document.addEventListener('DOMContentLoaded', () => {
  topButtonPosition();
  sectionButtonPosition();
  buttonVisibility(); 
});

buttonVisibility();
