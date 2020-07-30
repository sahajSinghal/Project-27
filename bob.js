class Bob
{
    constructor(x,y)
    {
        var options = 
        {
            isStatic:false,
            restitution:1,
            friction:0,
            density:2
        }

        this.body = Bodies.circle(x,y,25,options);
        this.radius = 25;
    
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position  

        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x,pos.y,2*(this.radius),2*(this.radius)); 
    }
};