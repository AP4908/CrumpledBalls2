class Paper{
   constructor(x, y, radius) {
        var options = {
            
          isStatic:false,
          restitution:0.3,
            friction:0.5,
            density:1
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.width = radius;
        this.height = radius;

        this.image = loadImage("paper.png");
        
        
        World.add(world, this.body);
      }
      display(){

        if(keyDown(UP_ARROW)){
         
          Matter.Body.applyForce(this.body, this.body.position,{x:10,y:-20});


        }

       
        
        
        
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y,1, 1);

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 70, 70);
        
      }
    }