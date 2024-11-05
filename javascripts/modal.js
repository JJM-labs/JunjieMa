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

function showModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function showModalWithFile(modalId, outTextId, fileName) {
  const uniqueId = outTextId.split('-')[1];
  const loadingId = 'loading-' + uniqueId;
  const loading = document.getElementById(loadingId);
  showModal(modalId);
  loading.style.display = 'flex';
  fetch(fileName)
    .then(response => response.text())
    .then(data => {
      loading.style.display = 'none'; 
      document.getElementById(outTextId).innerHTML = data;
    })
    .catch(error => {
      console.error('Error fetching file:', error);
      loading.style.display = 'none';
      document.getElementById(outTextId).innerText = 'Error loading file.';
    });
}
