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
  console.log(completed);
  
  if(completed != null){
    console.log(completed);
    completed.forEach(element => {
      $("#"+element).html("<span style='color:green; font-family: monospace'>[√]</span>"+$("#"+element).html());
    });
  }
};

window.onunload = function(){}; 