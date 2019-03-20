$(".top-left").click(function(){
    $(".top-left").text("clicking on me");
    $(".top-left").css("background-color", "green");
});


$(".top-right").click(function(){
    $(".top-right").text("double-clicking on me");
    $(".top-right").css("background-color", "blue");
});
$(".bottom-left").mouseenter(function(){
    $(".bottom-left").text("Thank you for hovering on me");
    $(".bottom-left").css("background-color","yellow");
});