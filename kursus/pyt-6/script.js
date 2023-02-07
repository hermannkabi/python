

$("#run-script").click(function (){
    $("#correct-text").css("display", "none");
    $("#incorrect-text").css("display", "none");

    $("#py-output").remove();
    $(".output").append(`<textarea id="py-output" disabled placeholder="Väljund ilmub siia"></textarea>`);
    const code = $(".answer > textarea").val();
    $("#pyscript").html(code);
    brython();


    // Check if the returned value is correct

    //Excercise pyt6

    const value = $("#py-output").val();

    let regex = /Teie kehamassiindeks on (-?\d+(?:\.\d+)?). Olete (.+)kaalus/;

    let matches = value.trim().match(regex);


    if(matches){
        let bmi = matches[1];

        let desc = matches[2];


        if(bmi == parseFloat(bmi) && parseFloat(bmi) > 0){
            if((desc == "üle" && bmi > 24.9) || (desc == "ala" && bmi < 18.5) || (desc == "normaal" && bmi >= 18.5 && bmi <= 24.9)){
                $("#correct-text").css("display", "block");

                $("#py-output").css("color", "green"); 
                $("#mark-correct-btn").css("display", 'inline');    
            }else{
                $("#incorrect-text").text("Vaata üle, et hinnang oleks vastavuses indeksiga, ja et vormistad vastuse täpselt!");
                $("#incorrect-text").css("display", "block");
    
            }
        }else{
            $("#incorrect-text").text("Vastus on vormistatud õigesti, aga midagi on valesti kehamassiindeksi väärtusega. ");
            $("#incorrect-text").css("display", "block");
        }

    }else{
        $("#incorrect-text").text("✖ Kahjuks ei tundu see õige. Veendu, et vormistad vastuse täpselt nagu ülesandes kästud.");

        $("#incorrect-text").css("display", "block");

    }




});


let completed = JSON.parse(window.localStorage.getItem("python-completed-chapters"));
if(completed.includes('pyt-6')){
    $("#mark-correct-btn").css("display", 'inline');
    $("#mark-correct-btn").text("EEMALDA TEHTUTE HULGAST");

}