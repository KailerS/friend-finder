var characters = require("../data/friends");




module.exports = function (app){

    app.get("/api/characters", function(req, res) {
        res.json(characters);
    });

    app.post("/api/characters", function (req, res){
        console.log(req.body);
        var score1 = 0;
        var score2 = 0;
        var score3 = 0;
        for (i=0; i < req.body.scores.length; i++){
            score1 += (Math.abs(parseInt(req.body.scores[i]) - parseInt(characters[0].scores[i])));
        };
        for (i=0; i < req.body.scores.length; i++){
            score2 += (Math.abs(parseInt(req.body.scores[i]) - parseInt(characters[1].scores[i])));
        };
        for (i=0; i < req.body.scores.length; i++){
            score3 += (Math.abs(parseInt(req.body.scores[i]) - parseInt(characters[2].scores[i])));
        };

        if(score1 < score2 && score1 < score3){
            return res.json(characters[0]);
        } else if (score2 < score1 && score2 < score3){
            return res.json(characters[1]);
        }else if (score3 < score1 && score3 < score2){
            return res.json(characters[2])
        } else{
            return res.send("No characters matched");
        };

        console.log(score1);
        console.log(score2);
        console.log(score3);


        res.end();


    });
};
