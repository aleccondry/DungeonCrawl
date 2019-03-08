class Player extends Sprite{
  constructor(element){
    super(20, 20, element);
    this.name = "Dennis";
    this.intelligence = 0;
    this.collegeRank = 12;
    this.multiplier = 3;
  }

  getName(){
    console.log(this.name);
  }

  move(e){
    var multiplier = this.multiplier;
    var key = e.key.toUpperCase();
    switch(key){
      case "W":
        super.setY(-multiplier);
        break;
      case "A":
        super.setX(-multiplier);
        break;
      case "D":
        super.setX(multiplier);
        break;
      case "S":
        super.setY(multiplier);
        break;
    }
    super.setPx();
  }
}
