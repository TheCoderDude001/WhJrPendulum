class rectan {

    constructor(x,y,w,h){

        this.body = Bodies.rectangle(x, y, w, h);

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        World.add(world, this.body);



    }


    display(){


        rect(this.x, this.y, this.width, this.height);


    }

}