$(function () {

    //clients toggle
    let clientsAgentBlock = $('.clients-agent__block');
    let clientsClientBlock = $('.clients-client__block');
    let buisnessClientsBlock = $('.buisness_clients_wrap');
    let buisnessAgentBlock = $('.buisness_agent_wrap');
    let train = $('.clients');
    clientsClientBlock.hide();
    buisnessClientsBlock.hide();
    $('.switching__link span').on('click', function () {
        if($(this).css('left') == '35px') {   // show Agents
            $(this).animate({'left':'3px'},500);
            clientsClientBlock.hide();
            clientsAgentBlock.fadeIn().css({'display':'flex', 'height':'470px'});
            train.animate({'backgroundPositionX':'-680px'},1500);
            buisnessClientsBlock.hide();
            buisnessAgentBlock.show().find('.buisness_img').attr('src','img/ticket_sale.png').parents()
                .find('.buisness_clients-item:first-child div').addClass('active');
        } else {   // show Clients
            $(this).animate({'left':'35px'},500);
            clientsAgentBlock.hide();
            clientsClientBlock.fadeIn().css({'display':'flex', 'height':'470px'});
            train.animate({'backgroundPositionX':'1500px'},1500);
            buisnessAgentBlock.hide();
            buisnessClientsBlock.show().find('.buisness_img').attr('src','img/agriculture.png').parents()
                .find('.buisness_clients-list:first-child .buisness_clients-item:first-child div').addClass('active');
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
    //buisness img toggle

    $('.buisness_clients-item').on('click', function () {
        let toImg = $(this).attr('data-show_img');
        $('.buisness_clients-item div').not(this).removeClass('active');
        $(this).find('div').addClass('active');
        $('.buisness_img').attr('src','img/'+toImg+'.png');
    });
});