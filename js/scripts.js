$(document).ready(function() {
  $('input[type="radio"]').click(function() {
      let inputValue = $(this).attr("value");
      let targetBox = $("." + inputValue);
      $(".lang").not(targetBox).hide();
      $(targetBox).show();
    });
  $("button#start").click(function(){
    $("#quiz").show();
  });
  $("button#results").click(function(){
    $("#quiz").hide();
    const name1Input = $("input#name").val()
    $(".nameInput").text(name1Input);
    $("#quizResults").show();
  });
});