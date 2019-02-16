function scriptInjector() {
  // inject a script to the passed node
  function injectScriptToNode(scriptPath, node) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const th = document.getElementsByTagName(node)[0];
        const s = document.createElement('script');
        s.setAttribute('type', 'text/javascript');
        s.setAttribute('class', 'injectedScript');
        s.innerHTML = this.responseText;
        th.appendChild(s);
      }
    };
    xhttp.open('GET', scriptPath, true);
    xhttp.send();
  }
  injectScriptToNode('injector', 'body');
}

// inject after 1000 milli seconds
// setTimeout(scriptInjector, 1000);

// inject after load event
window.addEventListener('load', scriptInjector);

