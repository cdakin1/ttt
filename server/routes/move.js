module.exports = function (app, games) {
    app.post('/move', function (req, res) {
        console.log(req.body)
        res.setHeader('Content-Type', 'application/json');
        const currentGame = req.body && req.body.id ? games[req.body.id] : null;
        if (!currentGame) {
            return res.end(JSON.stringify({ Error: "Invalid game id" }));
        }

        res.end(JSON.stringify({ test: "move" }));
    });
}
