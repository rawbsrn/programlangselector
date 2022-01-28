$(document).ready(function() {
  $('input[type="radio"]').click(function() {
      let inputValue = $(this).attr("value");
      let targetBox = $("." + inputValue);
      $(".lang").not(targetBox).hide();
      $(targetBox).show();
    });
  $("button").click(function(){
    $("#results").show();
  });
});