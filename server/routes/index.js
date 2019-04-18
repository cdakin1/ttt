const move = require("./move");
const game = require("./game");

module.exports = (app, games) => {
    game(app, games);
    move(app, games);
}