var characters = require("../data/friends");




module.exports = function (app){

    app.get("/api/characters", function(req, res) {
        res.json(characters);
    });
};
