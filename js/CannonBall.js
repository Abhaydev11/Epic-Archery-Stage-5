class CannonBall {
  constructor(x, y) {
    var options = {
     //add resistution 
      isStatic: true 
    };
//add circle to the body
this.image=loadImage("./assets/cannonball.png");
this.radious=40;


this.ballBody = Bodies.circle(x,y,this.radious,options);   

//loadImage
    World.add(world, this.ballBody);
    
  }

  //add shoot function 
  shoot(){
    var velocity = p5.Vector.fromAngle(cannon.angle)
    velocity.mult(20)
    Matter.Body.setStatic(this.ballBody, false)
    Matter.Body.setVelocity(this.ballBody, {x:velocity.x, y:velocity.y})    
  }
   

  display() {  
    var angle = this.ballBody.angle;
    var pos = this.ballBody.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//call the image function
    image(this.image,0,0,this.radious,this.radious)
    pop();

    }
  }

