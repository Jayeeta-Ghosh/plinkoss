class particle{
    constructor(x,y,r){
        var options={
         restitution:4,
         stiffness:0.2,
         isstatic:false,
    }
    this.body=Bodies.circle(x,y,this.r,options);
    this.r=2;
    this.color=(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    }
    display(){
        /*push();
        translate();*/
        //ellipseMode(RADIUS);
        //ellipseMode(0,0,this.r,this.r);
        fill("white");
        Stroke("pink");
        //pop();
    }
}