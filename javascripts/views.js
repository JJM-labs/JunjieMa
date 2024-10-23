// const data
const ViewsHome = "26";
const ViewsResearch = "14";
const ViewsEducation = "9";
const lastUpdated = "October 23, 2024";

// function
function displayLastUpdatedData() {
  const HomeElement = document.getElementById("viewsHome");
  const dateElement = document.getElementById("lastUpdatedDate");
  const ResearchElement = document.getElementById("viewsResearch");
  const EducationElement = document.getElementById("viewsEducation");
  const iconViews = `<img src="files/images/logo/views.webp" width="9.5" height="9.5" style="vertical-align:-1px;margin-right:1px;">`;
  const iconUpdate = `<img src="files/images/logo/update.webp" width="9.5" height="9.5" style="vertical-align:-1px;margin-right:1.2px;">`;
  const analyticsLink = `<a href="https://www.simpleanalytics.com/?referral=qofoc" target="_blank">Simple Analytics</a>`;  
  
  if (dateElement) {
    dateElement.innerHTML = `${iconUpdate} Last Updated Time: ${lastUpdated}`;
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
