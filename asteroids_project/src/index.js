const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
   const canvasEl = document.getElementById("game-canvas"); 
   canvasEl.height = 400;
   const ctx = canvasEl.getContext('2d'); 
   example.draw(ctx);
   example2.draw(ctx);
   example.move(ctx);
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

window.example = example;
window.example2 = example2;