$("#submit").on("click", function (event) {
    event.preventDefault();
    
    var newCharacter = {
        name: $("#name").val().trim(),
        photo: $("#image").val().trim(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
        ]
    };

    console.log(newCharacter);

    $.post("api/characters", newCharacter, function (data){
        if (data){
            console.log(data);
            $(".modal-body").append(`<h1>${data.name}`);
            $(".modal-body").append(`<img src=${data.photo}>`);
        }
    })
})