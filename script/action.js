
//햄버거에서 gnb 클릭시 반응
function gnbAction(){
    let winW = $(window).width();
    let isNavOpen = $('header nav').hasClass('on');

    // 초기화
    $('.gnb > li > a').off('click');
    $('.gnb > li').off('mouseenter');
    $('.gnb > li').removeClass('on');
    $('.gnb > li .lnb').hide();

    // PC + nav 닫힘 상태에서만 hover 허용
    if(winW > 1000 && !isNavOpen){

        $('.gnb > li').on('mouseenter', function(){
            $('.gnb > li .lnb').show();
        });

    }
    // 모바일 or 햄버거 열린 상태
    else {

        $('.gnb > li > a').on('click', function(e){
            e.preventDefault();

            let $li = $(this).parent();

            $li.siblings().removeClass('on')
                .children('.lnb').slideUp(200);

            $li.toggleClass('on');
            $li.children('.lnb').slideToggle(200);
        });
    }
}


gnbAction();

$(window).on('resize', function(){
    gnbAction();
});





//햄버거 모양 변경
$('.hamburger').click(function(){
    $(this).toggleClass('on');
    $('header nav').toggleClass('on');

    if ($('header nav').hasClass('on')){
        $('body').addClass('no-scroll');
    } else{
        $('body').removeClass('no-scroll')
    }

    // lnb 초기화
    if( !$('header nav').hasClass('on') ){
        $('.gnb > li').removeClass('on').children('.lnb').hide();
    }

    //  상태 바뀌었으니 이벤트 재세팅
    gnbAction();
});



$('.simg > li').mouseenter(function(){
    rollingNumber = $(this).index();

    clearInterval(autoRolling);

    $('.simg > li').removeClass('on');
    $(this).addClass('on');
    
    autoRefactoring()

});
$('.simg > li').mouseleave(function(){
    autoRolling = setInterval(imgRolling, 2000);
})


let rollingNumber = 0
let smallImgLength = $('.simg > li').length
$('.simg > li').eq(rollingNumber).addClass('on');

let autoRolling = setInterval(imgRolling, 2000);

function imgRolling(){
    rollingNumber++
    if(rollingNumber > smallImgLength - 1){
        rollingNumber = 0
    }
    $('.simg > li').eq(rollingNumber).addClass('on').siblings().removeClass('on')

    autoRefactoring()

}


function autoRefactoring(){
    let textbox = $('.simg > li').eq(rollingNumber).find('.sort').html();
    let simg = $('.simg > li').eq(rollingNumber).find('figure > img').attr('src')
    $('.bimg .sort').html(textbox);
    $('.bimg > figure > img').attr('src',simg);

}


/* hover되면 bimg에 뜨는 것만!
$('.simg li').mouseenter(function(){
    let textbox = $(this).find('.sort').html();
    let simg = $(this).find('figure > img').attr('src');

    $('.bimg > figure > img').attr('src',simg);
    $('.bimg .sort').html(textbox);
})
 */