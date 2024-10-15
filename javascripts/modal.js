function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target === modal) {
    closeModal();
  }
}