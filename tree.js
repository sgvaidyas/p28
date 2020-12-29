class Tree{
    constructor(x,y,w,h){
        var options={
            isStatic:true
        }
        this.image=loadImage("sprites/tree.png")
        this.body=Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

    }
    display(){
        var treepos=this.body.position;
        push()
        translate(treepos.x,treepos.y)
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
        pop()
    }
}