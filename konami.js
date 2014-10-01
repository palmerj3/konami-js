var Konami = function () {
  'use strict';
  var _CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
    _CODE_LEN = _CODE.length,
    _listenerTarget = null,
    _onSuccess = null,
    next = 0,
    _keydown_listener = function (e) {
      if(e.keyCode === _CODE[next]) {
        next += 1;
        if (next === _CODE_LEN) {
          _onSuccess();
          next = 0;
        }
      } else {
        next = 0;
      }
    },
    _addEventListeners = function () {
      if (_listenerTarget.addEventListener) {
        _listenerTarget.addEventListener('keydown', _keydown_listener, false);
      } else if (_listenerTarget.attachEvent) {
        _listenerTarget.attachEvent('onkeydown', _keydown_listener);
      } else {
        if (typeof(_listenerTarget.onkeydown) === 'function') {
          var preservedListenerTargetFunction = _listenerTarget.onkeydown;

          _listenerTarget.onkeydown = function(e) {
            preservedListenerTargetFunction(e);
            _keydown_listener(e);
          };
        } else {
          _listenerTarget.onkeydown = _keydown_listener;
        }
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

if (typeof(module) !== 'undefined') {
  module.exports = Konami;
}
