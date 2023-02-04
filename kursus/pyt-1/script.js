

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

    let regex = /(.+)on(.+)-aastane ja(.+)m pikk inimene, kellele meeldib(.+)/;

    if(regex.test(value)){
        $("#correct-text").css("display", "block");

        $("#py-output").css("color", "green");
        // alert("Juhhuu! Sinu kood töötab! Võid kas proovida koodi veel täiustada või minna järgmise ülesande juurde");
    }else{
        $("#incorrect-text").css("display", "block");

    }


});

window.addEventListener('error', (event) => {
    const { message, filename, lineno, colno, error } = event;
    console.log('Captured uncaught error:', message, filename, lineno, colno, error.stack);
});