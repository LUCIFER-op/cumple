class dustbin {
  constructor(x,y,width,height)
  {
      this.body=Bodies.rectangle(x,y,width,height,{isStatic:true});
      this.width=width;
      this.height=height;
      World.add(world,this.body);
      this.dustbingreen=loadImage("dustbingreen.png")

  }
       
  display()
  {
      var pos=this.body.position;
      image=this.dustbingreen
      //var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      imageMode(CENTER)
      image(this.dustbingreen,40,50,10,10)
      rect(0,0,this.width,this.height);
      pop();

  }
}