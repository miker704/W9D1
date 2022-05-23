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

MovingObject.prototype.move = function(ctx) {
    targetX = this.pos[0] + this.vel[0];
    targetY = this.pos[1] + this.vel[1];
    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1], this.radius, 0, 2 * Math.PI );
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    if (!this.pos[0] === targetX) {
        this.pos[0] += 1;
    }
    if (!this.pos[1] === targetY) {
        this.pos[1] += 1;
    }

}

module.exports = MovingObject;