var intervals = [];
window.onload = function(){
  console.log("loaded page")
  document.getElementById("mylink").onclick = function () {
      console.log("works");
      readTextFile();
  }
  var player = new Player(document.getElementById('player'));
  
  var keyDown = {};
  var moveInterval = -1;
  var directions = [];
  window.onkeydown = function(e) {
    if(keyDown[e.key]!=null) return;
    console.log('processing: ' + e.key);
    keyDown[e.key] = directions.length;
    directions.push(e);
    if(directions.length == 1){
        moveInterval = setInterval(function(){
            for(var direction of directions){
                player.move(direction)
            }
        }, 100);
    }
  }
  window.onkeyup = function(e){
    directions.splice(keyDown[e.key], 1);
    for(var x in directions) keyDown[directions[x].key] = x;
    keyDown[e.key] = null;
    if(directions.length == 0){
        clearInterval(moveInterval);
    }
    moveInterval = -1;
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
