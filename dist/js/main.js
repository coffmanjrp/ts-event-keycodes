"use strict";
var insert = document.getElementById('insert');
var japaneseKey = {
    '1': 'ぬ',
    '2': 'ふ',
    '3': 'あ',
    '4': 'う',
    '5': 'え',
    '6': 'お',
    '7': 'や',
    '8': 'ゆ',
    '9': 'よ',
    '0': 'わ',
    '-': 'ほ',
    '=': 'へ',
    q: 'た',
    w: 'て',
    e: 'い',
    r: 'す',
    t: 'か',
    y: 'ん',
    u: 'な',
    i: 'に',
    o: 'ら',
    p: 'せ',
    a: 'ち',
    s: 'と',
    d: 'し',
    f: 'は',
    g: 'き',
    h: 'く',
    j: 'ま',
    k: 'の',
    l: 'り',
    ';': 'れ',
    "'": 'け',
    '\\': 'む',
    z: 'つ',
    x: 'さ',
    c: 'そ',
    v: 'ひ',
    b: 'こ',
    n: 'み',
    m: 'も',
    ',': 'ね',
    '.': 'る',
    '/': 'め',
};
window.addEventListener('keydown', function (e) {
    var key = e.key === ' ' ? 'Space' : e.key;
    insert.innerHTML = "\n  <div class=\"key\">\n    ".concat(key, "\n    <small>event.key</small>\n  </div>\n \n  <div class=\"key\">\n    ").concat(e.code, "\n    <small>event.code</small>\n  </div>\n  <div class=\"key\">\n  ").concat(japaneseKey[e.key] || key, "\n  <small>japanese key</small>\n</div>");
});
