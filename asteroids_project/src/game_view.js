const game = require("./game");


function GameView (game, ctx) {
    this.ctx = ctx;
    this.game = game;

}



GameView.prototype.start = function () {

   
    //NOOOOO
    // setInterval(requestAnimationFrame(this.moveObjects.bind(this)),100);
    // setInterval(this.game.moveObjects.bind(this),this.game.draw(this.ctx),1000)
    setInterval( () => {
         this.lastSeconds = 0;
         this.game.moveCall(this);
        // requestAnimationFrame(this.moveObjects.bind(this));
         this.game.draw(this.ctx);
    }, 200); // BRUH!!!! WTF it finally works !!!! 
};



GameView.prototype.moveObjects = function (time) {
    const timeDelta = time - this.lastSeconds;
    this.game.moveCall(timeDelta);
    this.game.draw(this.ctx);
    this.lastSeconds = time;
    // requestAnimationFrame(this.moveObjects.bind(this));
    // setInterval(requestAnimationFrame(this.moveObjects.bind(this)), 1000);
    //  this.moveObjects.bind(this);
    // setInterval(this.moveObjects.bind(this));
     requestAnimationFrame(this.moveObjects.bind(this));
};  

module.exports = GameView;

