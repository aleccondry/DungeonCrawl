window.onload = function(){
  console.log("loaded page")
  document.getElementById("mylink").onclick = function () {
      console.log("works");
      readTextFile();
  }
  var player = new Player(document.getElementById('player'));
  window.onkeypress = function(e) {
    player.move(e);
  }
}

function readTextFile(){
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", "art/map.txt", true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        document.getElementById("textSection").innerHTML = allText;
      }
    }
    rawFile.send();
  }
