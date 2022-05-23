const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;
window.Asteroid= Asteroid;

document.addEventListener("DOMContentLoaded", () => {
   const canvasEl = document.getElementById("game-canvas"); 
   canvasEl.height = 400;
   canvasEl.width = 400;

   const ctx = canvasEl.getContext('2d'); 
   var raf;
   example.draw(ctx);
   example2.draw(ctx);
   example.move(ctx);
   example2.move(ctx);
//    example2.draw(ctx);
//    example.draw(ctx);
})

const example = new MovingObject({ 
    pos: [30, 30],
    vel: [100, 10],
    radius: 5,
    color: "#00FF00"
})

const example2 = new MovingObject({ 
    pos: [70, 230],
    vel: [20, 20],
    radius: 20,
    color: "#00FF00"
})


const rock = new Asteroid([30, 30])
window.rock=rock;
window.example = example;
window.example2 = example2;