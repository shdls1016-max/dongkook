
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


//섹션1
/* $('.smallimg li').mouseenter(function(){
    let h3Text = $(this).find('.textinfo').html();
    let smallImg = $(this).find('img').attr('src')
    $('.bigimg .textinfo').html(h3Text);
    $('.bigimg .btn_play').hide();
    $('.bigimg .bigimg1').attr('src',smallImg)
    $('.bigimg .bigimg2 img').attr('src',smallImg)
});

$('.btn_top').click(function(){
    $('html').animate({scrollTop:0},500)
}) */



$(function () {

  // 처음 로딩 시 첫 번째 작은 이미지 기준으로 세팅
  let firstImg = $('.simg li').eq(0).find('img').attr('src');
  let firstSort = $('.simg li').eq(0).find('.sort').html();

  $('.bimg figure img').attr('src', firstImg);
  $('.bimg .sort').html(firstSort);

  // 작은 이미지 클릭 이벤트
  $('.simg li').on('click', function () {
    let imgSrc = $(this).find('img').attr('src');
    let sortHtml = $(this).find('.sort').html();
    $('.bimg figure img').attr('src', imgSrc);
    $('.bimg .sort').html(sortHtml);

  });

});
