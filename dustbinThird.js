class Dustbin3{
    constructor(x, y, width, height) {
        var options = {
            
            isStatic:true,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);
        fill(66, 141, 6);
        stroke(66, 141, 6);
        rect(685, 500, 10,200);
        
        
      }
}