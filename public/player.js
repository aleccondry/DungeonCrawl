class Player extends Sprite{
  constructor(element){
    super(0, 0, element);
    this.name = "Dennis";
    this.intelligence = 0;
    this.collegeRank = 12;
  }

  getName(){
    console.log(this.name);
  }

  move(e){
    var key = e.key.toUpperCase();
    console.log(key);
    switch(key){
      case "W":
        super.setY(-1);
        break;
      case "A":
        super.setX(-1);
        break;
      case "D":
        super.setX(1);
        break;
      case "S":
        super.setY(1);
        break;
      default:
        console.log("Key not found");
        break;
    }
  }
}
