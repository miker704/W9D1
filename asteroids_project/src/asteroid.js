const MovingObject = require("./moving_object.js");
const Util = require("./utils");

const DEFAULT_ASTEROID ={
    COLOR :'#C0C0C0',
    RADIUS : 20,
    SPEED : 10

}

function Asteroid (pos) {
    this.color=DEFAULT_ASTEROID.COLOR;
    this.radius=DEFAULT_ASTEROID.RADIUS;
    this.vel = Util.randomVec(DEFAULT_ASTEROID.SPEED);
    this.pos = pos

    
}
Util.inherits(Asteroid,MovingObject);


module.exports = Asteroid;
