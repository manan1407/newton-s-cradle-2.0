class bob {
    constructor (x,y){
      this.body = Bodies.circle(x,y,20,{isStatic:false});
      this.radius = 40;
      World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        fill ("blue");
        circle(pos.x,pos.y,this.radius);
        pop ();
    }
}