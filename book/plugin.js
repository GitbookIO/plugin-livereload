require(["gitbook"], function(gitbook) {
  gitbook.events.bind("start", function(e, config) {
    var newEl = document.createElement('script'),
        firstScriptTag = document.getElementsByTagName('script')[0],
        port = config.livereload.port || 35729;

    if (firstScriptTag) {
      newEl.async = 1;
      newEl.src = '//' + window.location.hostname + ':' + port + '/livereload.js';
      firstScriptTag.parentNode.insertBefore(newEl, firstScriptTag);
    }
  });
});
