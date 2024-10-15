
const lastUpdated = "October 15, 2024";

function displayLastUpdatedDate() {
    const dateElement = document.getElementById("lastUpdatedDate");
    if (dateElement) {
        dateElement.textContent = `Last updated: ${lastUpdated}`;
    }
}
window.onload = displayLastUpdatedDate;