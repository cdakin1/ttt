module.exports = function (app) {
    app.post('/move', function (req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ test: "move" }));
    });
}
