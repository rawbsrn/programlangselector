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

    if ($("input:radio[name=likeSnakes]:checked").val() === "snakesYes"){
      let langChoice = "python"
      $(".nameInput").text(name1Input);
      $(".langInput").text(langChoice);
      $("#quizResults").show();
    }

    else if ($("input:radio[name=likeTetanus]:checked").val() === "tetanusYes"){
      let langChoice = "rust";
      $(".nameInput").text(name1Input);
      $(".langInput").text(langChoice);
      $("#quizResults").show();
  }

    else if ($("input:radio[name=likeBoardGames]:checked").val() === "boardGamesYes"){
      let langChoice = "go";
      $(".nameInput").text(name1Input);
      $(".langInput").text(langChoice);
      $("#quizResults").show();
}
  else{
    let langChoice = "anything else";
    $(".nameInput").text(name1Input);
    $(".langInput").text(langChoice);
    $("#quizResults").show();
  }
  });

});