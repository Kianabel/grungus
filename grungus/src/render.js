const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  const videoInput = document.getElementById('video-input');
  const videoPlayer = document.getElementById('video-player');

  videoInput.addEventListener('change', (event) => {
    const videoPath = event.target.files[0].path;
    videoPlayer.src = `file://${videoPath}`;
  });
});
