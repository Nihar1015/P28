class Mango{
    constructor(x,y,r){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1,
        }
        
        this.body = Bodies.circle(x,y,r, options);
        this.radius = r;
        this.image = loadImage("Images/mango.png");

        World.add(world, this.body);
    }

        display(){
            var pos = this.body.position;
            push();
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, this.radius, this.radius);
            pop();
        }
   
}