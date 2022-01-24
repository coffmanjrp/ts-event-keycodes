const insert = document.getElementById('insert') as HTMLDivElement;

type JapaneseKey = {
  [key: string]: string;
};

const japaneseKey: JapaneseKey = {
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

window.addEventListener('keydown', (e) => {
  const key = e.key === ' ' ? 'Space' : e.key;

  insert.innerHTML = `
  <div class="key">
    ${key}
    <small>event.key</small>
  </div>
 
  <div class="key">
    ${e.code}
    <small>event.code</small>
  </div>
  <div class="key">
  ${japaneseKey[e.key] || key}
  <small>japanese key</small>
</div>`;
});
