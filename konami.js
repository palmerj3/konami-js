var konami = (function () {
    'use strict';

    var CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13],
        code_len = CODE.length,
        events = {},
        next = 0;

    function log_key(e) {
        if (e.keyCode == CODE[next]) {
            next++;
            if (next == code_len) {
                events.onSuccess && events.onSuccess();
                next = 0;
            }
        } else {
            next = 0;
        }
    }

    if (window.addEventListener) {
        addEventListener('keydown', log_key);
    } else {
        onkeydown = (function (old) {
            return old ? function (e) {
                log_key(e);
                old(e);
            } : log_key;
        }(onkeydown));
    }
    return events;
})();