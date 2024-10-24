// const data
const ViewsHome = "26";
const ViewsResearch = "15";
const ViewsEducation = "9";
const lastUpdated = "October 24, 2024";

// function
function displayLastUpdatedData() {
  const HomeElement = document.getElementById("viewsHome");
  const dateElement = document.getElementById("lastUpdatedDate");
  const ResearchElement = document.getElementById("viewsResearch");
  const EducationElement = document.getElementById("viewsEducation");
  const iconViews = `<img src="files/images/logo/views.webp" width="9.5" height="9.5" style="vertical-align:-1px;margin-right:1px;">`;
  const iconUpdate = `<img src="files/images/logo/update.webp" width="9.5" height="9.5" style="vertical-align:-1px;margin-right:1.2px;">`;
  const analyticsLink = `<a href="https://analytics.google.com" target="_blank">Google Analytics</a>`;  
  
  if (dateElement) {
    dateElement.innerHTML = `${iconUpdate} Last Updated Time: ${lastUpdated}`;
  }
  if (HomeElement) {
    HomeElement.innerHTML = `${iconViews} Pageviews: ${ViewsHome} (by ${analyticsLink})`;
  }
  if (ResearchElement) {
    ResearchElement.innerHTML = `${iconViews} Pageviews: ${ViewsResearch} (by ${analyticsLink})`;
  }
  if (EducationElement) {
    EducationElement.innerHTML = `${iconViews} Pageviews: ${ViewsEducation} (by ${analyticsLink})`;
  }
}

window.onload = displayLastUpdatedData;
