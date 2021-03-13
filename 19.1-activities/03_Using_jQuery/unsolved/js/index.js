// Use jQuery to target the <h1> tag and make it red.
$("h1").css("color","black");
// Use jQuery to target the blue class and make it blue.
$(".blue").css("color","black");
// Use jQuery to target the addMe ID and change its HTML to Hello.
$("#addMe").html("Goodbye");


$("#addMe").on('click', function() {
    $("h1").css("color","orange");
    $(".blue").css("color","yellow");
    $("#addMe").html("You Got It");
});