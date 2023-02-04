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