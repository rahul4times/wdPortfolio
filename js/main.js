$(document).ready(function(){

  var mySkills = $('.skills');
  $(mySkills).hide();

  $(window).scroll(function(){
    $(mySkills).fadeIn(2000);
  });


  // Typing animation
  function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function typeWrite(span){
  $('#'+span).addClass('cursor')
  var text = $('#'+span).text();
  var randInt = 0
  for (var i = 0; i < text.length; i++) {
    randInt += parseInt(randomIntFromInterval(40,300));
    var typing = setTimeout(function(y){
      $('#'+span).append(text.charAt(y));
    },randInt, i);
  };
}

typeWrite('typing');







});
