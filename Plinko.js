class Plinko {
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.radius = 10;
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        ellipse(0, 0, this.radius);
        pop();
      }
}