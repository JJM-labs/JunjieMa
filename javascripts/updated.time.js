const lastUpdated = "October 19, 2024";
function displayLastUpdatedDate() {
    const dateElement = document.getElementById("lastUpdatedDate");
    if (dateElement) {
        const iconHTML = `<img src="files/images/logo/update.webp" width="9.5" height="9.5" style="vertical-align: -1px;">`;
        dateElement.innerHTML = `${iconHTML} Last content updated: ${lastUpdated}`;
    }
}
window.onload = displayLastUpdatedDate;