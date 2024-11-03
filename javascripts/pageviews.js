// const data
const viewsHome="38";
const viewsResearch="32";
const viewsEducation="20";
const lastUpdated="November 3, 2024";

// function
function displayLastUpdatedData() {
  const HomeElement=document.getElementById("viewsHome");
  const dateElement=document.getElementById("lastUpdatedDate");
  const ResearchElement=document.getElementById("viewsResearch");
  const EducationElement=document.getElementById("viewsEducation");
  const iconviews=`<img src="files/images/logo/views.webp" width="9.5" height="9.5" style="vertical-align:-1px;margin-right:1px;">`;
  const iconUpdate=`<img src="files/images/logo/update.webp" width="9.5" height="9.5" style="vertical-align:-1px;margin-right:1.2px;">`;
  const analyticsLink=`<a href="https://analytics.google.com" target="_blank">Google Analytics</a>`;  
  
  if (dateElement) {
    dateElement.innerHTML=`${iconUpdate} Last updated time: ${lastUpdated}`;
  }
  if (HomeElement) {
    HomeElement.innerHTML=`${iconviews} Pageviews: ${viewsHome} (by ${analyticsLink})`;
  }
  if (ResearchElement) {
    ResearchElement.innerHTML=`${iconviews} Pageviews: ${viewsResearch} (by ${analyticsLink})`;
  }
  if (EducationElement) {
    EducationElement.innerHTML=`${iconviews} Pageviews: ${viewsEducation} (by ${analyticsLink})`;
  }
}

window.onload=displayLastUpdatedData;
