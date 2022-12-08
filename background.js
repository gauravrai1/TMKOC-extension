// Listen for a click on the extension's button in the toolbar
chrome.browserAction.onClicked.addListener(function () {
    // Send a message to the content script to skip the intro
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'skipIntro'});
    });
  });
  