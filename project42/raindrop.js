class raindrops {
   constructor(x, y,r) {

       var options ={
           friction:0.1,
           isStatic:false
       }

       this.r=r;
       this.x = random(10,500);
       this.y = 100;
       this.body = Bodies.circle(random(10,500), 10, this.r,options);       
       //this.color=color(random(0, 255), random(0, 255), random(0, 255));
       World.add(world, this.body);

   }
   /*updateY(){ 
       if(this.rain.position.y > height) {
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)}) 
    }  
    } */
   display() {

       var pos = this.body.position;
       var angle = this.body.angle;

       push();
       translate(pos.x, pos.y);
       rotate(angle);
       //imageMode(CENTER);
                                                     
       noStroke();
       fill("darkblue")
       ellipseMode(RADIUS);
       ellipse(0, 0, this.r,this.r);
       pop();
   }

}