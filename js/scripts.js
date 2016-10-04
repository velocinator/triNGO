$(function(){
    $('.overlay').click(function(){
        $(this).fadeOut();
    });
    $('#submit').click(function(){
        var hidden = $('#url').val();
        $('#image_container').css("background-image", 'url(\'' + hidden + '\')');
        $('.initial').toggle();
        $('#image').toggle();
        $('body').css('background-color', '#00ff00')
    });
});
