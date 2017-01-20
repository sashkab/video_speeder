chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var videos = document.getElementsByTagName("video"); videos.forEach = Array.prototype.forEach;videos.forEach(function(v){v.playbackRate = 1.4;})'
  });
});
