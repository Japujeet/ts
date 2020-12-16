class Poly {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution:1,
          density:10
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      
      this.image=loadImage("polygon.png");
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
     
      image(this.image, pos.x, pos.y,50,50);
    }
  };
