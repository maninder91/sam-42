  const Engine = Matter.Engine,
        World = Matter.World,
        Events = Matter.Events,
        Bodies = Matter.Bodies; 
  var raindrop=[] ;
  var maxdrops = 100; 
  var thunder;

  var thunderCreatedFrame =0;

  function preload(){
 thunder1 = loadImage("../pro42-main/project42/thunder.images/1.png");
 thunder2 = loadImage("../pro42-main/project42/thunder.images/2.png");
 thunder3 = loadImage("../pro42-main/project42/thunder.images/3.png");
thunder4 = loadImage("../pro42-main/project42/thunder.images/4.png");
  } 
  
  function setup() {
    createCanvas(500, 750);
    engine = Engine.create();
    world = engine.world;
    umbrella1 = new umbrella(265,367,93);
    umbrella2 = new umbrella(250,600,1,1);
     
  }
  
  function draw() {
    background("black");
    Engine.update(engine);
     //creating thunder
     rand = Math.round(random(1,4));
     if(frameCount%80===0){
         thunderCreatedFrame=frameCount;
         thunder = createSprite(random(10,370), random(10,30), 10, 10);
         switch(rand){
             case 1: thunder.addImage(thunder1);
             break;
             case 2: thunder.addImage(thunder2);
             break; 
             case 3: thunder.addImage(thunder3);
             break;
             case 4: thunder.addImage(thunder4);
             break;
             default: break;
         }
         thunder.scale = random(0.3,0.6)
     }
 
     if(thunderCreatedFrame + 10 ===frameCount && thunder){
         thunder.destroy();
     }
 


      raindrop.push(new raindrops(random(100, 10),0,5));
      //score++;
                                                                              
       
       for(var j = 0; j <raindrop.length;j++){
         raindrop[j].display();
       }
    
      umbrella2.display();
      //umbrella1.display();
      drawSprites(); 
      }
         
      