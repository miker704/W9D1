class MovingObject {
    constructor(options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
    }
}

MovingObject.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2 * Math.PI );
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
}

const FRAME_TIMER_DELTA  = 1000/60;

// MovingObject.prototype.move = function move(timeDelta) {
MovingObject.prototype.move = function move() {

    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    
    // const velocityScale = timeDelta / FRAME_TIMER_DELTA,
    // offsetX = this.vel[0] * velocityScale,
    // offsetY = this.vel[1] * velocityScale;

    // this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];   
    

}


module.exports = MovingObject;