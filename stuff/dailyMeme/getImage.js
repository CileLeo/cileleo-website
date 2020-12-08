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
    document.getElementById('memeImg').src = storedText;
}