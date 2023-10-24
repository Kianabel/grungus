const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
  const videoInput = document.getElementById('video-input');
  const videoPlayer = document.getElementById('video-player');

  videoInput.addEventListener('change', (event) => {
    const videoPath = event.target.files[0].path;
    videoPlayer.src = `file://${videoPath}`;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const videoPlayer = document.getElementById('video-player');
  
  // Function to resize the video player
  function resizeVideoPlayer() {
    videoPlayer.style.width = window.innerWidth + 'px';
    videoPlayer.style.height = window.innerHeight + 'px';
  }
  
  // Call the function on page load
  resizeVideoPlayer();
  
  // Call the function whenever the window is resized
  window.addEventListener('resize', resizeVideoPlayer);
});
document.addEventListener('DOMContentLoaded', () => {
  const videoInput = document.getElementById('video-input');
  const videoPlayer = document.getElementById('video-player');
  
  videoInput.addEventListener('change', (event) => {
    const videoPath = event.target.files[0].path;
    videoPlayer.src = `file://${videoPath}`;
    
    // Set the initial volume to 10%
    videoPlayer.volume = 0.05;
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('menu');
  const menuTrigger = document.getElementById('menu-trigger');

  menuTrigger.addEventListener('click', () => {
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });
});

