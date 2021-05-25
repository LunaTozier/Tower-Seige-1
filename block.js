class Block{
  constructor(x, y){
    var options={
      restitution:0.4,
      density:1,
      friction:1.2,
    }
    this.body=Bodies.rectangle(x,y,40,40,options);
    this.x=x;
    this.y=y;
    this.width=40;
    this.height=40;
    World.add(world,this.body)
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,40,40);
    pop();
  }
}
