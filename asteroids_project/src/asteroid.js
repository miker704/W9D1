const MovingObject = require("./moving_object.js");
const Util = require("./utils");

const DEFAULT_ASTEROID ={
    COLOR :'gray',
    RADIUS : 5,
    SPEED : 10

}

function Asteroid (options) {
    
    options.color=DEFAULT_ASTEROID.COLOR;
    options.radius=DEFAULT_ASTEROID.RADIUS;
    options.vel = Util.randomVec(DEFAULT_ASTEROID.SPEED);
    options.pos = options.pos;

    // MovingObject.call(this,options);
    
}
Util.inherits(Asteroid,MovingObject);


module.exports = Asteroid;
