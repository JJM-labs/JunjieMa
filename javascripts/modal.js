function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id); 
        }
    });
};
function showModalWithFile(modalId, outTextId, fileName) {
  showModal(modalId);
  fetch(fileName)
      .then(response => response.text())
      .then(data => {
          document.getElementById(outTextId).innerHTML = data;
      })
      .catch(error => {
          console.error('Error fetching file:', error);
          document.getElementById(outTextId).innerText = 'Error loading file.';
      });
}