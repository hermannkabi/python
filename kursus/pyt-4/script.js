

$("#run-script").click(function (){
    $("#correct-text").css("display", "none");
    $("#incorrect-text").css("display", "none");

    $("#py-output").remove();
    $(".output").append(`<textarea id="py-output" disabled placeholder="Väljund ilmub siia"></textarea>`);
    const code = $(".answer > textarea").val();
    $("#pyscript").html(code);
    brython();


    // Check if the returned value is correct

    //Excercise pyt4

    const value = $("#py-output").val();

    let regex = /(-?\d+(?:.\d+)?) kraadi (.) on (-?\d+(?:.\d+)?) kraadi (.) ja (-?\d+(?:.\d+)?) kraadi (.)/;

    let matches = value.trim().match(regex);



    if(matches){
        let firstNumber = parseFloat(matches[1]);
        let firstUnit = matches[2];

        let secondNumber = parseFloat(matches[3]);
        let secondUnit = matches[4];
        
        let thirdNumber = parseFloat(matches[5]);
        let thirdUnit = matches[6];


        if(firstUnit == "C" && secondUnit == "F" && thirdUnit == "K" && secondNumber == (1.8*firstNumber) + 32 && thirdNumber == firstNumber + 273){
            $("#correct-text").css("display", "block");

            $("#py-output").css("color", "green"); 
            $("#mark-correct-btn").css("display", 'inline');

        }else{
            $("#incorrect-text").text("Vastus on vormistatud õigesti, aga midagi on valesti teisendamisega");
            $("#incorrect-text").css("display", "block");

        }

    }else{
        $("#incorrect-text").text("Kahjuks ei tundu see õige. Veendu, et vormistad vastuse täpselt nagu ülesandes kästud.");

        $("#incorrect-text").css("display", "block");

    }




});


let completed = JSON.parse(window.localStorage.getItem("python-completed-chapters"));
if(completed.includes('pyt-4')){
    $("#mark-correct-btn").css("display", 'inline');
    $("#mark-correct-btn").text("EEMALDA TEHTUTE HULGAST");

}