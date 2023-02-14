$("#mark-correct-btn").click(function (){

    const id = $(this).attr("chapter");
    console.log(id);

    let completed = JSON.parse(window.localStorage.getItem("python-completed-chapters"));

    if(completed == null){
        window.localStorage.setItem("python-completed-chapters", JSON.stringify([id]));
        $(this).text("EEMALDA TEHTUTE HULGAST");
    }else{
        if(!completed.includes(id)){
            completed.push(id);
            $(this).text("EEMALDA TEHTUTE HULGAST");
        }else{
            $(this).text("MÄRGI TEHTUKS √");

            const ind = completed.indexOf(id);
            if (ind > -1) { 
                completed.splice(ind, 1);
            
            }
        }
        window.localStorage.setItem("python-completed-chapters", JSON.stringify(completed))

    }

    
});