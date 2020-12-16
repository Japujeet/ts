class Box{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y,30,30, options);
      
      this.image=loadImage("rectt.png");
      this.Visibility=255;
      World.add(world, this.body);
    }
    display(){
     
          
if(this.body.speed<3){
  push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
 
}
else{
World.remove(world,this.body);
push();
this.Visibility=this.Visibility-5;
tint(255,this.Visibility);
image(this.image,this.body.position.x,this.body.position.y,30,30);
pop();
}

 
    }
    score(){
      if(this.Visibility<0 && this.Visibility>-100){
        score++
      }
    
    }
}

