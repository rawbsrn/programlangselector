$(document).ready(function() {

  $("button#start").click(function(){
    $("#quiz").show();
  });
  $("button#results").click(function(){
    $("#quiz").hide();
    const name1Input = $("input#name").val()
    const likeSnakes = $("input:radio[name=likeSnakes]:checked").val()
    const likeTetanus = $("input:radio[name=likeTetanus]:checked").val()
    const likeBoardGames = $("input:radio[name=likeBoardGames]:checked").val()
    const beverage = $("#beverage").val()
    let langChoice = ""

    if (likeSnakes === "snakesYes"){
      langChoice = "Python"
    }
      else if (likeTetanus === "tetanusYes"){
      langChoice = "Rust";
    }
      else if (likeBoardGames === "boardGamesYes"){
      langChoice = "Go";
    }
      else{
    langChoice = beverage;
  }
    $(".nameInput").text(name1Input);
    $(".langInput").text(langChoice);
    $("#quizResults").show();
  });

  $('input[type="radio"]').click(function() {
    let inputValue = $(this).attr("value");
    let targetLang = $("." + inputValue);
    $(".lang").not(targetLang).hide();
    $(targetLang).show();
  });
});