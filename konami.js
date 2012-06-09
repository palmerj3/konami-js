var Konami = function () {
  'use strict';

  var CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
    progress = [],
    callback = null,
    check_progress = function () {
      var code = CODE.slice(0),
        segment = code.splice(0, progress.length);

      if (progress.join(',') === segment.join(',')) {
        if (progress.length === CODE.length) {
          progress = [];
          callback();
        }
      } else {
        progress = [];
      }
    },
    keydown_listener = function (e) {
      progress.push(e.keyCode);
      check_progress();
    },
    addEventListeners = function () {
      window.addEventListener('keydown', keydown_listener, false);
    };

  addEventListeners();

  return {
    onSuccess: function (c) {
      if (typeof (c) === 'function') {
        callback = c;
      }
    }
  };
};
