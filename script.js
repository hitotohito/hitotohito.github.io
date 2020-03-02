$(function(){

$('#bars').click(function(){
    $('#top-modal').fadeIn();
    $('#times').fadeIn();

});

$('#times').click(function(){
    $('#top-modal').fadeOut();
});

$('.list-btn').click(function(){
    $('#top-modal').fadeOut();
});

$('#angle-up').click(function(){
    $('html,body').animate({scrollTop:0},"500");
});



})