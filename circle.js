class circ {

    constructor(x,y,r){

        this.body = Bodies.circle(x, y, r);
        this.radius = r;
        this.x = x;
        this.y = y;
        World.add(world, this.body);



    }


    display(){


        circle(this.x, this.y, this.radius);


    }

}