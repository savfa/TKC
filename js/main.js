$(function () {

    //clients toggle
    let clientsAgentBlock = $('.clients-agent__block');
    let clientsClientBlock = $('.clients-client__block');
    let train = $('.clients');
    clientsClientBlock.hide();
    $('.switching__link span').on('click', function () {
        if($(this).css('left') == '35px') {
            $(this).animate({'left':'3px'},500);
            clientsClientBlock.hide();
            clientsAgentBlock.fadeIn().css({'display':'flex', 'height':'470px'});
            train.animate({'backgroundPositionX':'-680px'},1500);
        } else {
            $(this).animate({'left':'35px'},500);
            clientsAgentBlock.hide();
            clientsClientBlock.fadeIn().css({'display':'flex', 'height':'470px'});
            train.animate({'backgroundPositionX':'1500px'},1500);
        }
    });

    //sale block show
    $('.sales__switching li').on('click', function () {
        $('.sales__block').hide();
        let dataShow = $(this).attr('data-show');
        $(`.${dataShow}`).fadeIn().css({'display':'flex'});
        $(this).addClass('active');
        $(this).children('div').addClass('circleRed');
        $('.sales__switching li').not(this).removeClass('active').children('div').removeClass('circleRed');
    });
});