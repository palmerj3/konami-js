var Konami = function () {
  'use strict';
  var _CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
    _listenerTarget = null,
    _onSuccess = null,
    _progress = [],
    _check_progress = function () {
      var code = _CODE.slice(0),
        segment = code.splice(0, _progress.length);

      if (_progress.join(',') === segment.join(',')) {
        if (_progress.length === _CODE.length) {
          _progress = [];
          _onSuccess();
        }
      } else {
        _progress = [];
      }
    },
    _keydown_listener = function (e) {
      _progress.push(e.keyCode);
      _check_progress();
    },
    _addEventListeners = function () {
      if (_listenerTarget.addEventListener) {
        _listenerTarget.addEventListener('keydown', _keydown_listener, false);
      } else if (_listenerTarget.attachEvent) {
        _listenerTarget.attachEvent('onkeydown', _keydown_listener);
      } else {
        _listenerTarget.onkeydown = _keydown_listener;
      }
    };

  return {
    onSuccess : function () {},
    listenerTarget : window,
    init : function () {
      _onSuccess = this.onSuccess;
      _listenerTarget = this.listenerTarget;

      _addEventListeners();
    }
  };
};
