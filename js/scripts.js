$(document).ready(function() {

  $("button#start").click(function(){
    $("#quiz").show();

  });
  $("button#results").click(function(){
    $("#quiz").hide();
    const name1Input = $("input#name").val()

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
    let langChoice = $("#beverage").val();
    $(".nameInput").text(name1Input);
    $(".langInput").text(langChoice);
    $("#quizResults").show();

  }
  });

  $('input[type="radio"]').click(function() {
    let inputValue = $(this).attr("value");
    let targetLang = $("." + inputValue);
    $(".lang").not(targetLang).hide();
    $(targetLang).show();
  });
});