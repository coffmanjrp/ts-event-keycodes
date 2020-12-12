"use strict";
var insert = document.getElementById('insert');
window.addEventListener('keydown', function (e) {
    insert.innerHTML = "\n  <div class=\"key\">\n    " + (e.key === ' ' ? 'Space' : e.key) + "\n    <small>event.key</small>\n  </div>\n  <div class=\"key\">\n    " + e.keyCode + "\n    <small>event.keyCode</small>\n  </div>\n  <div class=\"key\">\n    " + e.code + "\n    <small>event.code</small>\n  </div>";
});
