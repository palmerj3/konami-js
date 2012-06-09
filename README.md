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

Note:
Due to the use of addEventListener, this will not work in IE < 9.  If this is needed, follow this link:
https://developer.mozilla.org/en/DOM/element.addEventListener#Legacy_Internet_Explorer_and_attachEvent