var scrollToTopButton = document.getElementById("scrollToTopButton");
var firstHeading = document.querySelector("section h2:first-of-type");
function isOutOfViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= window.innerHeight || 
        rect.bottom < 0 ||                 
        rect.right < 0 ||                  
        rect.left >= window.innerWidth     
    );
}
function handleButtonVisibility() {
    if (isOutOfViewport(firstHeading)) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}
window.addEventListener("scroll", handleButtonVisibility);
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
scrollToTopButton.addEventListener("click", scrollToTop);
handleButtonVisibility();

// Button Position
function setButtonPosition() {
    const section = document.querySelector('section');
    const button = document.getElementById('scrollToTopButton');
    if (section) {
        const sectionRect = section.getBoundingClientRect();
        let buttonRight = window.innerWidth - (sectionRect.right + 200);
        buttonRight = Math.max(buttonRight, 0);
        button.style.right = `${buttonRight}px`;
    }
}
window.addEventListener('resize', () => {
    setButtonPosition();
});
document.addEventListener('DOMContentLoaded', () => {
    setButtonPosition();
});