function viewPdf(pdfUrl, frameId) {
    var iframe = document.getElementById(frameId);
    if (iframe.style.display === 'none') {
        iframe.src = pdfUrl;
        iframe.style.display = 'block';
    } else {
        iframe.style.display = 'none';
        iframe.src = '';
    }
    return false;
}