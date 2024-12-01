function loadPDFViewer() {
  var ua=navigator.userAgent;
  var isWindows=/Windows/i.test(ua) && !/Windows Phone/i.test(ua);
  var isMacOS=/Macintosh/i.test(ua);
  var isLinux=/Linux/i.test(ua) && !/Android/i.test(ua);
  var isPC=isWindows || isMacOS || isLinux;
  if (isPC) {
    var pdfViewer='<iframe src="files/content/cv/CV.pdf" style="width:100%;height:100vh;border:none;"></iframe>';
    document.getElementById('loadingIndicator').style.display = 'none';
  } else {
    var pdfViewer='<div id="pdf-viewer"></div>'+
    '<link rel="stylesheet" href="stylesheets/styles_main.css">';
  }
  document.getElementById('pdf-container').innerHTML=pdfViewer;
}

pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.9.359/pdf.worker.min.js';
async function renderPDF(url) {
  document.getElementById('loadingIndicator').style.display = 'block';
  const loadingTask = pdfjsLib.getDocument(url);
  const pdf = await loadingTask.promise;
  const numPages = pdf.numPages;
  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const scale = 1.5;
    const viewport = page.getViewport({ scale: scale });
    const canvas = document.createElement("canvas");
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    await page.render(renderContext).promise;
    const pageContainer = document.createElement("div");
    pageContainer.className = "pdf-page";
    pageContainer.appendChild(canvas);
    document.getElementById('pdf-viewer').appendChild(pageContainer);
    if (i === numPages) {
      document.getElementById('loadingIndicator').style.display = 'none';
    }
  }
}
renderPDF('files/content/cv/CV.pdf');