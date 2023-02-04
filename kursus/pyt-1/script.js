

$("#run-script").click(function (){
    $("#correct-text").css("display", "none");
    $("#incorrect-text").css("display", "none");

    $("#py-output").remove();
    $(".output").append(`<textarea id="py-output" disabled placeholder="Väljund ilmub siia"></textarea>`);
    const code = $(".answer > textarea").val();
    $("#pyscript").html(code);
    brython();


    // Check if the returned value is correct

    //Excercise pyt1

    const value = $("#py-output").val();

    let regex = /(.+) on (.+)-aastane (.+) m pikk inimene, kellele meeldib (.+)/;

    console.log(value)

    if(regex.test(value.trim())){
        $("#correct-text").css("display", "block");

        $("#py-output").css("color", "green");
        $("#mark-correct-btn").css("display", 'inline');
    }else{
        $("#incorrect-text").css("display", "block");

    }


});

let completed = JSON.parse(window.localStorage.getItem("python-completed-chapters"));

if(completed.includes('pyt-1')){
    $("#mark-correct-btn").css("display", 'inline');
    $("#mark-correct-btn").text("EEMALDA TEHTUTE HULGAST");

}