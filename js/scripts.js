function myFunction() {
  let text = "Do you like to code?\nPress OK for yes or Cancel for no.";
  if (confirm(text) == true) {
    text = "You like to code!";
  } else {
    text = "You don't like to code!";
  }
  document.getElementById("demo").innerHTML = text;
}

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
    $("#quizResults").show();
  });
});