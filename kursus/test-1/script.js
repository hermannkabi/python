function timeRanOut(){
    alert("Vihmauss sõi sind ära! Leht laetakse nüüd uuesti, et saaksid veel proovida.");
    window.location.reload();
}


$(".choice").click(function (){
    if($(this).hasClass("correct")){
        $(this).children(".choice-nr").css("background-color", "green");
        $(this).children(".choice-nr").css("border-color", "green");


        // How many questions are there?

        setTimeout(() => {
            const questionsCount = 10;
            $(".question").fadeOut(300);
            setTimeout(() => {
                if($(this).parent().attr("question-nr") < questionsCount){
                    $(".question[question-nr=\""+(parseInt($(this).parent().attr("question-nr")) + 1)+"\"]").fadeIn(300);
                }else{
                    $(".question-end").fadeIn(300);
                    $(".code-debugging").fadeIn(300);
                }
            }, 300);
        }, 500);

    }else{
        $(this).children(".choice-nr").css("color", "red");
        $(this).children(".choice-nr").css("border-color", "red");
        $(this).children(".choice-nr").addClass("incorrect-clicked");
        $(this).off("click");

        $(".incorrect-result").fadeIn(300);
        setTimeout(() => {
            $(".incorrect-result").fadeOut(300);   
        }, 800);



        timeLeft -= 10;
    }
});


var timeLeft = 900;


var interval;


$(document).ready(function (){

    // Hide every question except for the first one

    $(".question").hide();
    $(".question[question-nr=\"1\"]").show();

    const zeroPad = (num, places) => String(num).padStart(places, '0');


    interval = setInterval(() => {
        timeLeft --;
        
        $("#timer-minutes").text(zeroPad(Math.trunc(timeLeft/60), 2));
        $("#timer-seconds").text(zeroPad(timeLeft - Math.trunc(timeLeft/60)*60, 2));
        if(timeLeft <= 0){
            $("#timer-minutes").text("00");
            $("#timer-seconds").text("00");
    
            setTimeout(() => {
                timeRanOut();
                clearInterval(interval);
            }, 200);
            
        }
        if(timeLeft <= 10){
            $("#timer-counter").css("color", timeLeft%2==0?"red":"white");
        }
        
    }, 1000);
});



let completed = JSON.parse(window.localStorage.getItem("python-completed-chapters"));
if(completed != null && completed.includes('test-1')){
    $("#mark-correct-btn").css("display", 'inline');
    $("#mark-correct-btn").text("EEMALDA TEHTUTE HULGAST");

}


$(".code-debugging > .answer > #run-script").click(function (){
    $("#py-output").remove();
    $(".code-debugging > .answer > .output").append(`<textarea id="py-output" disabled placeholder="Väljund ilmub siia"></textarea>`);
    const code = $(".code-debugging > .answer > textarea").val();
    $("#pyscript").html(code);
    brython();

    // Code checker
    let result = $("#py-output").val();


    if($(this).hasClass("code-writing")){
        let regex = /Vihmauss pääseb koopast välja!/

        let falseRegex = /.+ ei pääse koopast välja/

        if(regex.test(result)){
            $(".code-debugging").fadeOut(300);
            setTimeout(() => {
                $(".code-writing-correct").fadeIn(300);
            }, 300);
            clearInterval(interval);
            $(".timer").fadeOut(300);
            $(".ending").fadeIn(300);
            setTimeout(() => {
                $(".ending > h1").fadeOut(300);
                setTimeout(() => {
                    $(".ending > h1").text("Kuidas sa välja said??");
                    $(".ending > h1").fadeIn(300);
                }, 300);
                setTimeout(() => {
                    $(".ending > h1").fadeOut(300);
                    setTimeout(() => {
                        $(".ending > h1").text("Ma tahtsin su ära süüa,...");
                        $(".ending > h1").fadeIn(300);
                    }, 300);
                    setTimeout(() => {
                        $(".ending > h1").fadeOut(300);
                        setTimeout(() => {
                            $(".ending > h1").text("...aga nüüd pean leppima putukatega!");
                            $(".ending > h1").fadeIn(300);
                        }, 300);
                        setTimeout(() => {
                            $(".ending > h1").fadeOut(300);
                            setTimeout(() => {
                                $(".ending > .answer").fadeIn(300);
                            }, 300);
        
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);

        }else if(falseRegex.test(result)){
            $("#incorrect-text").text("Kood töötab õigesti, aga vihmauss ei lase sind välja!").show();
        }else{
            $("#incorrect-text").text("See ei tundu õige!").show();

        }
        
    }else{

        let lines = result.split("\n");
    
        let regex1 = /Sisestasid arvu (-?\d+(?:.\d+)?)/
    
        let regex2 = /Sellest arvust ühe võrra suurem on (-?\d+(?:.\d+)?)/

        if(parseInt(lines[0].match(regex1)[1]) + 1 == parseInt(lines[1].match(regex2)[1])){
            setTimeout(() => {
                $(".code-debugging").fadeOut(300);
                setTimeout(() => {
                    $(".code-debugging-correct").fadeIn(300);
                    setTimeout(() => {
                        $(".answer > textarea").val("");
                        $("#run-script").addClass("code-writing");
                        $(".answer > h2").text("Tahad mu koopast põgeneda? Ole valmis vaeva nägema!");
                        $(".answer > h5").text("Kirjuta programm, mis küsib kasutaja nime, kui see on 'Vihmauss', prindib 'Vihmauss pääseb koopast välja!', muidu 'NIMI ei pääse koopast välja!'");
                    
    
                        $(".code-debugging").fadeIn(300);   
                    }, 300);
    
                }, 300);
            }, 500);
    
            
    
        }
    
    }



    


});

