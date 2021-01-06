class plinko
{
 constructor (x,y)
 {
  
 var options={
     'isStatic':true,
    'restitution' : 0.3,
    'friction' : 0.5,
    'density' : 1.2,
 }
 this.body = Bodies.circle(x,y,8,options)
 this.r = 8;
 World.add(world,this.body);
 }

 display()
 {
    var pos = this.body.position;
    push();
    translate(pos.x , pos.y);
   ellipseMode(RADIUS)
   ellipse(pos.x,pos.y,this.r,this.r);  
   pop(); 
 }
}; 