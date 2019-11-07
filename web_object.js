var obj = []; 

function setup() {
  createCanvas(900, 900);
  
  for (var i=0; i<4; i++) {
    obj.push(new postion(0));
    obj.push(new postion(1));
  }
}

function draw() {  
  background(245,245,237);
  for (var i=0; i<obj.length; i++) {
    obj[i].displayThick();
  }
  noStroke();
  fill(245,245,237);
  rect(0,0,450,900);
  for (var i=0; i<obj.length; i++) {
    obj[i].display();
  }
}

// postion class
function postion(c) {
  this.check=c;
  this.speed1=random(-1,1);
  this.speed2=random(-1,1);
  
  if(this.check==0){
    this.x1 = -100;
    this.x2 = 1000;
    this.y1 = random(height);
    this.y2 = random(height);
  }
  else{
    this.x1 = random(height);
    this.x2 = random(height);
    this.y1 = -100;
    this.y2 = 1000;
  }
  
  this.displayThick = function() {
    stroke(0);
    strokeWeight(100);
    
    if(this.check==0){
      line(this.x1,this.y1+this.speed1*mouseX,this.x2,this.y2+this.speed2*mouseY);
    }
    else{
      line(this.x1+this.speed1*mouseX,this.y1,this.x2+this.speed2*mouseY,this.y2);
    }    
  };

  this.display = function() {
  
    stroke(0);
    strokeWeight(1);
    
    if(this.check==0){
      line(this.x1,this.y1+this.speed1*mouseX,this.x2,this.y2+this.speed2*mouseY);
    }
    else{
      line(this.x1+this.speed1*mouseX,this.y1,this.x2+this.speed2*mouseY,this.y2);
    }    
  };
}
