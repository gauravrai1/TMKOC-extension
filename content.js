// Listen for a message from the background script
chrome.runtime.onMessage.addListener(function (message) {
    // Check if the message is "skipIntro"
    if (message.action === 'skipIntro') {
      // Get the current time of the video
      var video = document.querySelector('video');
      var currentTime = video.currentTime;
  
      // Calculate the time at which the intro ends
      var introEndTime = currentTime + 30;
  
      // Seek to the time at which the intro ends
      video.currentTime = introEndTime;
    }
  });
  