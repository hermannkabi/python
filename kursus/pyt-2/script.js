

$("#run-script").click(function (){
    $("#correct-text").css("display", "none");
    $("#incorrect-text").css("display", "none");

    $("#py-output").remove();
    $(".output").append(`<textarea id="py-output" disabled placeholder="Väljund ilmub siia"></textarea>`);
    const code = $(".answer > textarea").val();
    $("#pyscript").html(code);
    brython();


    // Check if the returned value is correct

    //Excercise pyt2

    const value = $("#py-output").val();

    let regex = /(-?\d+) on (.+) kui (-?\d+)/;

    let matches = value.match(regex);


    if(value.trim() == "Tubli, arvasid ära!"){
            $("#correct-text").css("display", "block");

            $("#py-output").css("color", "green");
            $("#mark-correct-btn").css("display", 'inline');

    }else if(matches){
        let firstNumber = parseInt(matches[1])
        console.log(firstNumber)
        let sone = matches[2]
        let secondNumber = parseInt(matches[3])
        if((firstNumber > secondNumber && sone == 'suurem') || (firstNumber < secondNumber && sone == "väiksem")){
            $("#correct-text").css("display", "block");

            $("#py-output").css("color", "green");   
            $("#mark-correct-btn").css("display", 'inline');

        }else{
            $("#incorrect-text").css("display", "block");
        }
    }else{
        $("#incorrect-text").css("display", "block");
    }


});


let completed = JSON.parse(window.localStorage.getItem("python-completed-chapters"));

if(completed.includes('pyt-2')){
    $("#mark-correct-btn").css("display", 'inline');
    $("#mark-correct-btn").text("EEMALDA TEHTUTE HULGAST");

}