const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Util = require("./utils");




function Game () {

    this.Allrocks = [];
    this.addAsteroids();



}
Game.BackGroundColor = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 100;


Game.prototype.addAsteroids = function () {

    for (let i = 0; i < 100; i++) {

        this.Allrocks.push(new Asteroid(this.randomPosition()));
    }
};

Game.prototype.randomPosition = function () {

    return [Math.floor(Math.random() * 400), Math.floor(Math.random() * 400)];
};


Game.prototype.draw = function draw (ctx) {
    ctx.clearRect(0,0,Game.DIM_X,Game.DIM_Y);
    ctx.fillStyle = Game.BackGroundColor;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    for (let i = 0; i < this.Allrocks.length; i++) {

        this.Allrocks[i].draw(ctx);
    }
};


// Game.prototype.moveObjects = function (deltaTime) {
Game.prototype.moveObjects = function () {
    for (let i = 0; i < this.Allrocks.length; i++) {


        // this.Allrocks[i].move(deltaTime);
        this.Allrocks[i].move();


    }
};

// Game.prototype.moveCall = function (deltaTime) {
//     this.moveObjects(deltaTime);
// };

Game.prototype.moveCall = function () {
    this.moveObjects();
};




module.exports = Game;

