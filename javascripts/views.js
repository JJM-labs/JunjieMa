// const data
const ViewsHome = "19";
const ViewsResearch = "9";
const ViewsEducation = "5";
const lastUpdated = "October 23, 2024";

// function
function displayLastUpdatedData() {
  const HomeElement = document.getElementById("viewsHome");
  const dateElement = document.getElementById("lastUpdatedDate");
  const ResearchElement = document.getElementById("viewsResearch");
  const EducationElement = document.getElementById("viewsEducation");
  const iconViews = `<img src="files/images/logo/views.png" width="9.5" height="9.5" style="vertical-align: -1px;margin-right:1px;">`;
  const iconUpdate = `<img src="files/images/logo/update.webp" width="9.5" height="9.5" style="vertical-align: -1px;margin-right:1.2px;">`;
  const analyticsLink = `<a href="https://analytics.google.com/" target="_blank" class="black-link">Google Analytics</a>`;  
  
  if (dateElement) {
    dateElement.innerHTML = `${iconUpdate} Last content updated: ${lastUpdated}`;
  }
  if (HomeElement) {
    HomeElement.innerHTML = `${iconViews} Views: ${ViewsHome} (by ${analyticsLink})`;
  }
  if (ResearchElement) {
    ResearchElement.innerHTML = `${iconViews} Views: ${ViewsResearch} (by ${analyticsLink})`;
  }
  if (EducationElement) {
    EducationElement.innerHTML = `${iconViews} Views: ${ViewsEducation} (by ${analyticsLink})`;
  }
}

window.onload = displayLastUpdatedData;
