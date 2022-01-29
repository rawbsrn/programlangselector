$(document).ready(function() {

  $('input[type="radio"]').click(function() {
      let inputValue = $(this).attr("value");
      let targetLang = $("." + inputValue);
      $(".lang").not(targetLang).hide();
      $(targetLang).show();
    });
  $("button#start").click(function(){
    $("#quiz").show();
  });
  $("button#results").click(function(){
    $("#quiz").hide();
    const name1Input = $("input#name").val()
    // let langChoice = prompt("testprompt");
    let langChoice = $("input:radio[name=likeSnakes]:checked").val();

    $(".nameInput").text(name1Input);
    $(".langInput").text(langChoice);
    $("#quizResults").show();
  });

});