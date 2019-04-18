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
            if (gameId && games[gameId]) {
                res.end(JSON.stringify(games[gameId]));
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
            board: [
                ["", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", ""],
                ["", "", "", "", "", "", "", "", ""],
            ],
            id,
            winner: "",
            turn: "X",
            valid_subgames: [0, 1, 2, 3, 4, 5, 6, 7, 8]
        };
        games.push(newGame);

        return newGame;
    }
}
