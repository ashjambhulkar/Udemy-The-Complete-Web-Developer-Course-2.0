
//Hovering over the menu bar
$(".toggleButton").hover(function(){

    $(this).addClass("highlightedButton");

}, function(){

    $(this).removeClass("highlightedButton");
});

$(".toggleButton").click(function(){

    $(this).toggleClass("active");
});



