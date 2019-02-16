function isCSPHeader(headerName) {
  return (headerName === 'CONTENT-SECURITY-POLICY') || (headerName === 'X-WEBKIT-CSP');
}

// Listens when new request
chrome.webRequest.onHeadersReceived.addListener((details) => {
  for (let i = 0; i < details.responseHeaders.length; i += 1) {
    if (isCSPHeader(details.responseHeaders[i].name.toUpperCase())) {
      let csp = details.responseHeaders[i].value;

      // append "https://mysite.com" to the authorized sites
      csp = csp.replace('script-src', 'script-src * ');
      csp = csp.replace('style-src', 'style-src * ');
      csp = csp.replace('connect-src', 'connect-src * ');
      csp = csp.replace('img-src', 'img-src * ');
      csp = csp.replace('font-src', 'font-src * ');
      csp = csp.replace('media-src', 'media-src * ');
      csp = csp.replace('default-src', 'media-src * ');

      details.responseHeaders[i].value = csp;
    }
  }

  return { // Return the new HTTP header
    responseHeaders: details.responseHeaders,
  };
}, {
  urls: ['<all_urls>'],
  types: ['main_frame'],
}, ['blocking', 'responseHeaders']);

