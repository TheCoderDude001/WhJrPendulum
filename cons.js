class Cons{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
   
    

    display(){
        

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
                strokeWeight(7);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
                line(pointA.x, pointA.y, pointB.x, pointB.y);                
            pop();
    
    }
    
}