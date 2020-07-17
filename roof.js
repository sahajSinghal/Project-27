class Roof
{
    constructor(y,height)
    {
        var options = 
        {
            isStatic:true
        }
        this.body = Bodies.rectangle(width/2,y,width,height,options)
        this.body.position.x = width/2;
        this.width = width;
        this.body.position.y = y;
        this.height = height;

        World.add(world,this.body);
    }

    display()
    {
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}