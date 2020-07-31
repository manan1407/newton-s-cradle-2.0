class roof {
    constructor (x,y){
      this.body = Bodies.rectangle(x,y,100,20,{isStatic:true});
      this.width = 250;
      this.hieght = 20;
      World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push ();
        fill ("yellow");
        rect(pos.x,pos.y,this.width,this.hieght);
        pop ();
    }
}