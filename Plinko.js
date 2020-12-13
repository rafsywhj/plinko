class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.r = 15;
        this.body = Bodies.circle(x,y,15,options);
        World.add(world, this.body);
    }
    display(){
    var pos=this.body.position;		
    // // push();
    // translate(pos.x, pos.y);
   
    stroke("black");
    strokeWeight(4);
    fill("green");
    ellipseMode(RADIUS);
    ellipse(pos.x,pos.y,this.r, this.r);
    // pop();
    }
}