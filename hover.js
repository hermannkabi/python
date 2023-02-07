const activeColor = "white";
const inactiveColor = "#567189";





$(function() {
    $('.navigation, .navigation > h1').hover(function() {
      $('.navigation > h1:not(:hover)').css('color', inactiveColor);

      $('.navigation > h1:hover').css('color', activeColor);
    }, function() {

      $('.navigation > h1').css('color', activeColor);

    });
});

$(".navigation > h1").click(function (){
  const id = $(this).attr('id');
  console.log("Her");
  window.location.href = "kursus/"+id+"/index.html";
});

window.onload = function (){

  

  let completed = JSON.parse(window.localStorage.getItem("python-completed-chapters"));
  
  if(completed != null){
    completed.forEach(element => {
      $("#"+element).html("<span style='color:green; font-family: monospace'>[√]</span>"+$("#"+element).html());
    });
  }

  const chaptersRaw = {
    "chapter-1":["pyt-1", "pyt-3", "pyt-4", "pyt-5"],
  };

  var chapters = new Map(Object.entries(chaptersRaw));

  const values = Array.from(chapters.values());

  console.log(values.length);

  for(var i = 0; i<values.length; i++){
    if(values[i].every(el=>completed.includes(el))){
      $("#"+Array.from(chapters.keys()).at(i)).html("<span style='color:green; font-family: monospace'>[√]</span> " + $("#"+Array.from(chapters.keys()).at(i)).text());
      $("#"+Array.from(chapters.keys()).at(i)).css("color", "green");
    }
  }
};

window.onunload = function(){}; 