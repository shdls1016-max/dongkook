
//햄버거에서 gnb 클릭시 반응
function gnbAction(){
    let winW = $(window).width()   //window = 한화면, document = 전체화면
    
    $('.gnb li').off();   // 기존이벤트 제거
    
    if(winW < 391){
        $('.gnb li').click(function(){
            $('.lnb').slideUp();
            $(this).children('.lnb').stop().slideToggle(200);
        });
    }
}

gnbAction()   //새로고침할때 실행

$(window).resize(function(){    //창사이즈조절할때마다 실행
    gnbAction()
})







//햄버거 모양 변경
$('.hamburger').click(function(){
    $('.hamburger').toggleClass('on')
    $('header nav').toggleClass('on')
})




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