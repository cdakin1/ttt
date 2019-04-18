module.exports = function (app, games) {
    app.post('/game', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        const newGame = createGame();
        res.end(JSON.stringify(newGame));
    });

    app.get('/game', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        const gameId = req.query ? req.query.id : null;

        if (gameId) {
            if (gameId && games[id]) {
                res.end(JSON.stringify(games[id]));
            } else {
                res.end(JSON.stringify({ Error: "Invalid id" }));
            }
        }
        else {
            res.end(JSON.stringify({ Error: "Please specify a game id" }));
        }
    });

    const createGame = () => {
        const id = games.length;
        const newGame = {
            board: new Array(9).fill(new Array(9).fill(""), ""),
            id,
            winner: "",
            turn: "X",
            valid_subgames: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        };
        games.push(newGame);

        return newGame;
    }
}
