class Sprite {
  constructor(x, y, element){
    this.element = element;
    this.coords = [x, y];
  }

  getCoords(){
    return this.coords;
  }

  setCoords(x, y){
    this.coords = [x, y];
  }

  setPx(){
    this.element.style.top = this.coords[1] + "px";
    this.element.style.left = this.coords[0] + "px";
  }

  setX(deltaX){
    this.coords = [this.coords[0] + deltaX, this.coords[1]];
  }

  setY(deltaY){
    this.coords = [this.coords[0], this.coords[1] + deltaY];
  }

  draw(){

  }

  setParent(element){
    this.element.parent = element;
  }

}
