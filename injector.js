const injectDiv = (divHtml) => {
  const body = document.getElementsByTagName('body')[0];
  const div = document.createElement('div');
  div.innerHTML = divHtml;
  body.appendChild(div);
};

const banner = `
  <div  style="position: fixed;z-index: 99999999;height: 250px;width: 300px;bottom: 50%;right: 50%;" 
        onClick="window.open('http://namogoo.com', '_blank');">
    <video autoplay="" class="H_i_h" data-automation="VideoPlayer_video_video" loop="" muted="" playsinline="" poster="https://ak0.picdn.net/shutterstock/videos/27696460/thumb/3.jpg"><source src="https://ak0.picdn.net/shutterstock/videos/27696460/preview/stock-footage-malicious-encryption-ransomware-virus-attack-infected-global-internet-worldwide-abstract-matrix.webm" type="video/webm"><source src="https://ak0.picdn.net/shutterstock/videos/27696460/preview/stock-footage-malicious-encryption-ransomware-virus-attack-infected-global-internet-worldwide-abstract-matrix.mp4" type="video/mp4"></video>
  </div>
`;

injectDiv(banner);
