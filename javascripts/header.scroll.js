window.addEventListener('scroll', function() {
  
  const header = document.querySelector('header');
  const scrollY = window.scrollY;
  const headerHeight = header.offsetHeight;

  if (headerHeight < window.innerHeight) {
    header.style.position = 'fixed';
  } else {
    if (scrollY > headerHeight) {
      header.style.position = 'absolute';
      header.style.top = (scrollY - headerHeight) + 'px';
    } else {
      header.style.position = 'fixed';
      header.style.top = '0';
    }
  }
});