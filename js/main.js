$(function () {

    //clients toggle
    let clientsAgentBlock = $('.clients-agent__block');
    let clientsClientBlock = $('.clients-client__block');
    clientsClientBlock.hide();
    let train = $('.clients');
    $('.switching__link span').on('click', function () {
        if($(this).css('left') == '35px') {   // show Agents
            $(this).animate({'left':'3px'},500);
            clientsClientBlock.hide();
            clientsAgentBlock.fadeIn().css({'display':'flex', 'height':'470px'});
            train.animate({'backgroundPositionX':'-680px'},1500);
            $('.switching__client').removeClass('active');
            $('.switching__agent').addClass('active');
        } else {   // show Clients
            $(this).animate({'left':'35px'},500);
            clientsAgentBlock.hide();
            clientsClientBlock.fadeIn().css({'display':'flex', 'height':'470px'});
            train.animate({'backgroundPositionX':'1500px'},1500);
            $('.switching__agent').removeClass('active');
            $('.switching__client').addClass('active');
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

    //business clients toggle and slide img
    let businessClientsBlock = $('.business_clients_wrap');
    let businessAgentBlock = $('.business_agent_wrap');
    businessClientsBlock.hide();
    $('.arrow_prev').on('click', hendlePrev);
    $('.arrow_next').on('click', hendleNext);
    $('.arrow_next').hover(()=>{
            if($('.business_clients_wrap').is(":visible")) {
                $('.arrow_next').removeClass('scale')
            }else {$('.arrow_next').addClass('scale')}
        },
        ()=>{$('.arrow_next').removeClass('scale')}
    );
    $('.arrow_prev').hover(()=>{
            if($('.business_agent_wrap').is(":visible")) {
                $('.arrow_prev').removeClass('scale')
            }else {$('.arrow_prev').addClass('scale')}
        },
        ()=>{$('.arrow_prev').removeClass('scale')}
    );
    function hendlePrev(e) {
        businessClientsBlock.hide();
        businessAgentBlock.show().find('.business_img').attr('src', 'img/ticket_sale.png').parents()
            .find('.business_clients-list:first-child .business_clients-item:first-child div').addClass('active');
        if(businessAgentBlock.is(":visible")) {
            $(this).unbind(e,hendlePrev);
            $('.arrow_next').bind('click',hendleNext);
            imgNameArray=[];
            currentSlide = 0;
            $('.business_agent_wrap .business_clients-item').map((i,item)=>{
                imgNameArray.push($(item).attr('data-show_img'));
                return true
            });
        }
    }

    function hendleNext(e) {
        businessAgentBlock.hide();
        businessClientsBlock.show().find('.business_img').attr('src','img/agriculture.png').parents()
            .find('.business_clients-list:first-child .business_clients-item:first-child div').addClass('active');
        if(businessClientsBlock.is(":visible")) {
            $(this).unbind(e,hendleNext);
            $('.arrow_prev').bind('click',hendlePrev);
            imgNameArray=[];
            currentSlide = 0;
            $('.business_clients_wrap .business_clients-item').map((i,item)=>{
                imgNameArray.push($(item).attr('data-show_img'));
                return true
            });
        }
    }

    //buisness slider
    var imgNameArray=[];
    var currentSlide = 0;
    $('.business_agent_wrap .business_clients-item').map((i,item)=>{
        imgNameArray.push($(item).attr('data-show_img'));
        return true
    });
    setInterval(()=> {
        imgNameArray[currentSlide].className = 'slide';
            $('.business_img').attr('src','img/'+imgNameArray[currentSlide]+'.png');
            if ( $(`[data-show_img=${imgNameArray[currentSlide]}`) ) {
                let el = $(`[data-show_img=${imgNameArray[currentSlide]}`);
                $('.business_clients-item div').not(el).removeClass('active');
                $(el).children().addClass('active');
            }
            currentSlide++;
            if(currentSlide == imgNameArray.length) {currentSlide=0}
    },2000);
    $('.business_clients-item').on('click', function () {
        let toImg = $(this).attr('data-show_img');
        $('.business_clients-item div').not(this).removeClass('active');
        $(this).find('div').addClass('active');
        $('.business_img').attr('src','img/'+toImg+'.png');
        currentSlide = imgNameArray.indexOf( toImg);
    });

    //reviews slider
    $('.reviews__slider').slick({
        infinite: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left-red.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right-red.png"></button>',
    });


    //reviews slider switching
    $('.reviews__slider').hide();
    $('.slider__agent').show();
    $('.reviews__switching-list a').on('click', function(e) {
        e.preventDefault;
        $(this).addClass('active');
        $('.reviews__switching-list a').not(this).removeClass('active');
        var slider = $(this).attr('data-slider_class');
        $('.reviews__slider').hide();
        $('.'+slider).show();
    });

    //menu
    $(".menu__trigger__line").click(function(e){
        $(this).toggleClass('is-active');
        $(".nav").slideToggle("slow");
    });
});