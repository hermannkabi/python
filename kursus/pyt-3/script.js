

$("#run-script").click(function (){
    $("#correct-text").css("display", "none");
    $("#incorrect-text").css("display", "none");

    $("#py-output").remove();
    $(".output").append(`<textarea id="py-output" disabled placeholder="Väljund ilmub siia"></textarea>`);
    const code = $(".answer > textarea").val();
    $("#pyscript").html(code);
    brython();


    // Check if the returned value is correct

    //Excercise pyt3

    const value = $("#py-output").val();

    let regex = /Arvude (-?\d+(?:.\d+)?), (-?\d+(?:.\d+)?) ja (-?\d+(?:.\d+)?) keskmine on (-?\d+(?:.\d+)?)/;

    let matches = value.match(regex);


    if(matches){
        let firstNumber = parseInt(matches[1]);
        let secondNumber = parseInt(matches[2]);
        let thirdNumber = parseInt(matches[3]);
        let averageNumber = parseInt(matches[4]);

        if((firstNumber + secondNumber + thirdNumber)/3 == averageNumber){
            $("#correct-text").css("display", "block");

            $("#py-output").css("color", "green");    
        }else{
            $("#incorrect-text").text("Vastus on vormistatud õigesti, aga nende arvude keskmine ei ole"+ averageNumber.toString());
            $("#incorrect-text").css("display", "block");

        }

    }else{
        $("#incorrect-text").text("✖ Kahjuks ei tundu see õige. Veendu, et vormistad vastuse täpselt nagu ülesandes kästud.");

        $("#incorrect-text").css("display", "block");

    }




});
