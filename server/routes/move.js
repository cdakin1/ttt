module.exports = function (app, games) {
    app.post('/move', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        const currentGame = req.body && req.body.id ? games[req.body.id] : null;
        if (!currentGame) {
            return res.end(JSON.stringify({ Error: "Invalid game id" }));
        }
        const { id, subgame, cell } = req.body;
        console.log(currentGame.valid_subgames)
        if (!currentGame.valid_subgames.includes(+subgame)) {
            return res.end(JSON.stringify({ Error: "Invalid subgame" }))
        }


        if (currentGame.board[subgame][cell]) {
            return res.end(JSON.stringify({ Error: "Cell occupied" }));
        }
        currentGame.board[subgame][cell] = currentGame.turn === "X" ? "X" : "O";

        currentGame.valid_subgames = [+cell];
        currentGame.turn = currentGame.turn === "X" ? "O" : "X";
        res.end(JSON.stringify(currentGame));
    });

}