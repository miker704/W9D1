const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView= require("./game_view.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView=GameView;

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.height = Game.DIM_X;
    canvasEl.width = Game.DIM_Y;

    const ctx = canvasEl.getContext('2d');
    //    var raf;
    //    rock.draw(ctx);
    //    example.draw(ctx);
    //    example2.draw(ctx);
    //    example.move(ctx);
    //    example2.move(ctx);
    //    example2.draw(ctx);
    //    example.draw(ctx);
    const game = new Game();
    // game.draw(ctx);
    // game.moveObjects();
        
    new GameView(game,ctx).start();

});

const example = new MovingObject({
    pos: [30, 30],
    vel: [100, 10],
    radius: 5,
    color: "#00FF00"
});

const example2 = new MovingObject({
    pos: [70, 230],
    vel: [20, 20],
    radius: 20,
    color: "#00FF00"
});


// const rock = new Asteroid([50, 50])
// window.rock=rock;
// window.example = example;
// window.example2 = example2;