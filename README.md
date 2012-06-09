konami-js
=========

Simple system for detecting the entry of the famous Konami code and attaching an event

Example:

```
(function() {
  konami = new Konami();
  konami.onSuccess(function() {
    alert('You win!');
  });
}());
```