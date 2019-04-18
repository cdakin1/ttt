module.exports = function (app) {
    app.post('/game', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ test: "game" }));
    });
}
