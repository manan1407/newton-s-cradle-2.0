class point {
    constructor (x,y){
      this.body = Bodies.rectangle(x,y,20,20,{isStatic:true});
      this.width = 10;
      this.hieght = 10;
      World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        fill ("red");
        rect(pos.x,pos.y,this.width,this.hieght);
        pop ();
    }
}