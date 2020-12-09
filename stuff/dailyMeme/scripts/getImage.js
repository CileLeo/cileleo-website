var url = "https://gist.githubusercontent.com/CileLeo/ea3c122b58fd62c68714f6a0ee333c0c/raw/dailyMeme.txt";
var storedText;

const faces = [
  '(*^ω^)',
  '(◕‿◕✿)',
  '(◕ᴥ◕)',
  'ʕ•ᴥ•ʔ',
  'ʕ￫ᴥ￩ʔ',
  '(*^.^*)',
  'owo',
  '(｡♥‿♥｡)',
  'uwu',
  '(*￣з￣)',
  '>w<',
  '^w^',
  '(つ✧ω✧)つ',
  '(/ =ω=)/'
];

function owofy(input) {
  return input
    .replace(/[lr]/g, 'w')
    .replace(/[LR]/g, 'W')
    .replace(/n([aeiou])/g, 'ny$1')
    .replace(/N([aeiou])/g, 'Ny$1')
    .replace(/N([AEIOU])/g, 'Ny$1')
    .replace(/ove/g, 'uv')
    .replace(/!+/g, `! ${faces[Math.floor(Math.random() * faces.length)]}`);
}

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done();
  });
});

function owo() {
  var title = storedText.split('\n')[0];
  document.getElementById('title').innerText = owofy(title);

  var imgLink = storedText.split('\n')[1];
  document.getElementById('memeImg').src = imgLink;

  var leoMessage = storedText.split('\n')[2];
  document.getElementById('leoMessage').innerText = owofy(leoMessage);
}

function done() {
  var title = storedText.split('\n')[0];
  document.getElementById('title').innerText = title;

  var imgLink = storedText.split('\n')[1];
  document.getElementById('memeImg').src = imgLink;

  var leoMessage = storedText.split('\n')[2];
  document.getElementById('leoMessage').innerText = leoMessage;
}