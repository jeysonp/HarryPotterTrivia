$(document).ready(function() {

  var totalQuestions = 6;
    answers = ["gillyweed", "wheezes", "sectum", "tonks", "lady", "guant"];
    input = $("input");
    right = 0;
    wrong = 0;
    blank = 0;
    count = 60;

  function score() {
    for (var i = 0; i < input.length; i++) {
    
    if (input[i].checked) {

    if (answers.indexOf(input[i].value) !== -1) {
      right++;
    } else {
      wrong++;
      }
    }
  }
  var questAnswered = right + wrong;
    if (questAnswered !== totalQuestions) {
      blank = totalQuestions --- questAnswered;
      }

    $('#right').html(" " + right);
    $('#wrong').html(" " + wrong);
    $("#blank").html(" " + blank);
  } 
    
    $("#game,#totals").hide();

    $("#playButton").click(function() {
      $("#start").hide();
      $("#game").show();

  var timer = setInterval(function() {
    count--;
    $("#countdown").html(count);
    if (count === 0) {
      clearInterval(timer);
      $("#game, #timer").hide();
      $("#totals").show();
      score();
      }
    }, 1000);

    });

    $("#done").click(function() {
      $("#game, #timer").hide();
      $("#totals").show();
      clearInterval(timer);
      score();
    });

    $("#restart").click(function() {
        location.reload();
    });
});