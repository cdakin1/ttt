const move = require("./move");
const game = require("./game");

module.exports = app => {
    game(app);
    move(app);
}