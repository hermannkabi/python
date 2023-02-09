

$("#run-script").click(function (){
    $("#correct-text").css("display", "none");
    $("#incorrect-text").css("display", "none");

    $("#py-output").remove();
    $(".output").append(`<textarea id="py-output" disabled placeholder="Väljund ilmub siia"></textarea>`);
    const code = $(".answer > textarea").val();
    $("#pyscript").html(code);
    brython();


    // Check if the returned value is correct

    //Excercise pyt7

    const value = $("#py-output").val();

    const regex = /Arvude (-?\d+(?:\.\d+)?) ja (-?\d+(?:\.\d+)?) (.+) on (-?\d+(?:\.\d+)?)/;

    let matches = value.trim().match(regex);

    console.log(matches);

    if(matches){
        let first = parseFloat(matches[1]);

        let second = parseFloat(matches[2]);

        let operation = matches[3];

        let result = parseFloat(matches[4]);

        if(operation == "summa"){
            if(first + second == result){
                $("#correct-text").css("display", "block");

                $("#py-output").css("color", "green"); 
                $("#mark-correct-btn").css("display", 'inline');    
            }else{
                $("#incorrect-text").text("✖ Nende arvude summa ei ole "+result.toString());

                $("#incorrect-text").css("display", "block");        
            }
        }

        if(operation == "vahe"){
            if(first - second == result){
                $("#correct-text").css("display", "block");

                $("#py-output").css("color", "green"); 
                $("#mark-correct-btn").css("display", 'inline');    
            }else{
                $("#incorrect-text").text("✖ Nende arvude vahe ei ole "+result.toString());

                $("#incorrect-text").css("display", "block");        
            }
        }

        if(operation == "korrutis"){
            if(first * second == result){
                $("#correct-text").css("display", "block");

                $("#py-output").css("color", "green"); 
                $("#mark-correct-btn").css("display", 'inline');    
            }else{
                $("#incorrect-text").text("✖ Nende arvude korrutis ei ole "+result.toString());

                $("#incorrect-text").css("display", "block");        
            }
        }

        if(operation == "jagatis"){
            if(first / second == result){
                $("#correct-text").css("display", "block");

                $("#py-output").css("color", "green"); 
                $("#mark-correct-btn").css("display", 'inline');    
            }else{
                $("#incorrect-text").text("✖ Nende arvude jagatis ei ole "+result.toString());

                $("#incorrect-text").css("display", "block");        
            }
        }

    }else{
        $("#incorrect-text").text("✖ Kahjuks ei tundu see õige. Veendu, et vormistad vastuse täpselt nagu ülesandes kästud.");

        $("#incorrect-text").css("display", "block");

    }




});


let completed = JSON.parse(window.localStorage.getItem("python-completed-chapters"));
if(completed.includes('pyt-7')){
    $("#mark-correct-btn").css("display", 'inline');
    $("#mark-correct-btn").text("EEMALDA TEHTUTE HULGAST");

}