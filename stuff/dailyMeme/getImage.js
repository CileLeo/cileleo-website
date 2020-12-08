var url = "https://gist.githubusercontent.com/CileLeo/ea3c122b58fd62c68714f6a0ee333c0c/raw/dailyMeme.txt";
var storedText;

fetch(url)
  .then(function(response) {
    response.text().then(function(text) {
      storedText = text;
      done();
  });
});

function done() {
  var title = storedText.split('\n')[0];
  document.getElementById('title').innerText = title;

  var firstLine = storedText.split('\n')[1];
  document.getElementById('memeImg').src = firstLine;

  var leoMessage = storedText.split('\n')[2];
  document.getElementById('leoMessage').innerText = leoMessage;
}