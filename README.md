konami-js
=========

Simple system for detecting the entry of the famous Konami code and attaching an event

Simple Example:

```
(function() {
  var konami = new Konami();
  konami.onSuccess = function () {
    alert('You win!');
  };
  konami.init();
}());
```

Example with specific target:
```
(function() {
  var konami = new Konami();
  konami.onSuccess = function () {
    alert('You win!');
  };
  konami.listenerTarget = document.getElementById('my_element');
  konami.init();
}());
```