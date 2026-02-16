
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


/* 
!!!!!!!너비 1000이하일때는 섹션1 돌아가는 거 없애려면 이걸로 바꾸면 됨!!!!!!!!!!
let rollingNumber = 0;
let smallImgLength = $('.simg > li').length;
let autoRolling = null;

function autoRefactoring(){
    let textbox = $('.simg > li').eq(rollingNumber).find('.sort').html();
    let simg = $('.simg > li').eq(rollingNumber).find('figure > img').attr('src');
    $('.bimg .sort').html(textbox);
    $('.bimg > figure > img').attr('src', simg);
}

function imgRolling(){
    rollingNumber++;
    if(rollingNumber >= smallImgLength){
        rollingNumber = 0;
    }
    $('.simg > li').eq(rollingNumber)
        .addClass('on')
        .siblings().removeClass('on');

    autoRefactoring();
}

function s1Action(){
    let winW = $(window).width();

    // 이벤트 초기화
    $('.simg > li').off('mouseenter mouseleave');
    clearInterval(autoRolling);

    if(winW > 1000){
        // PC
        $('.simg > li').on('mouseenter', function(){
            rollingNumber = $(this).index();
            clearInterval(autoRolling);

            $('.simg > li').removeClass('on');
            $(this).addClass('on');

            autoRefactoring();
        });

        $('.simg > li').on('mouseleave', function(){
            autoRolling = setInterval(imgRolling, 2000);
        });

        autoRolling = setInterval(imgRolling, 2000);

    } else {
        // 모바일: autoRefactoring 사용 안 함
        $('.simg > li').removeClass('on');
        clearInterval(autoRolling);
    }
}

// 최초 실행
s1Action();

// 리사이즈 대응
$(window).on('resize', function(){
    s1Action();
});

*/




/* sub2-1 */
$('.pagenation > li > a.num').mouseenter(function(){
    $(this).addClass('on')
})
$('.pagenation > li > a.num').mouseleave(function(){
    $(this).removeClass('on')
})



/* login */
$('.searchBox.login > button').click(function(){
    let target = $(this).siblings('input.password');

    if(target.attr('type') === 'password'){
        target.attr('type','text');
        $(this).find('img.iconEye').attr('src','images/sub/eye.png')
    }

    else{
        target.attr('type','password');
        $(this).find('img').attr('src','images/sub/eye-off.png')
    }
})

/* //사용가능한 서브페이지 표시용도
$(function(){
    const $gnb = $('.gnb')
    const $canuse = $('.canuse')

    if($canuse.length === 0) return;

    const $canuseParent = $canuse.closest('.gnb>li');

    function blinkCanUse(){
        $canuse.removeClass('blink');
        $canuse[0].offsetWidth;

        $canuse.addClass('blink');
    }

    //pc
    $gnb.on('mouseenter',function(){
        if(!$('.hamburger.mo').is(':visible')){
            blinkCanUse();
        }
    });

    //mo
    $canuseParent.on('mouseenter',function(){
        if($('.hamburger.mo').is(':visible')){
            blinkCanUse();
        }
    });
});

$(function () {
  const $loginLink = $('.loginbox a[href*="login"]');

  // 로그인 링크가 없는 페이지는 자동 종료
  if ($loginLink.length === 0) return;

  setTimeout(function () {
    // 기존 애니메이션 초기화
    $loginLink.removeClass('blink');
    $loginLink[0].offsetWidth; // reflow

    // 확실하게 보이도록 직접 애니메이션 적용
    $loginLink.css({
      animation: 'blink 0.8s ease-in-out 3'
    });
  }, 100);
});

$(function () {
  const $hamburger = $('.hamburger.mo');
  const $loginLink = $('nav .loginbox.mo a[href*="login"]');

  if ($hamburger.length === 0 || $loginLink.length === 0) return;

  function blinkLogin() {
    $loginLink.css('animation', 'none');
    $loginLink[0].offsetWidth; // reflow
    $loginLink.css('animation', 'blink 0.8s ease-in-out 3');
  }

  $hamburger.on('click', function () {
    setTimeout(function () {
      if ($hamburger.hasClass('on')) {
        blinkLogin();
      }
    }, 300);
  });
}); */