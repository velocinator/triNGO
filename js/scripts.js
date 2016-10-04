$(function(){
    $('.overlay').click(function(){
        $(this).fadeOut();
    });
    $('#submit').click(function(){
        var hidden = $('#url').val();
        $('#hiddenimg').attr("src", hidden);
        $('.initial').toggle();
        $('#image').toggle();
        //$('body').css('background-color', 'fuschia')
    });
});
