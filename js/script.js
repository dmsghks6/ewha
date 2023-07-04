$(document).ready(function(){

    // let windowWidth = $(window).width();  // 초기 윈도우 창 크기 설정

    // $(window).resize(function() {
    // windowWidth = $(window).width();  // 윈도우 창 크기 업데이트
    // });

    
    var swiper = new Swiper(".mySwiper", {
        effect : "fade",
        loop : true,
        speed: 900,
        autoplay : {
            delay : 3500,
            disableOnInteraction : false,

        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });

    var swiper = new Swiper(".secondSwiper",{
        direction:"vertical",
        slidesPerView : 'auto',
        speed : 2000,
        loop : true,

        autoplay:{
            delay : 1500,
            disableOnInteraction:false,
        }

    })
    



    $('.sec-4 .tab-head').click(function(){
        const tabHas = $(this).siblings('.tab-body-open').hasClass('on');
        const headHas = $(this).hasClass('on');
        const hasOn = $('.tab-body-open').hasClass('on')

        $('.tab-body-open').addClass('on');
        $(this).parent().siblings().children('.tab-body-open').removeClass('on');
        $(this).addClass('on');


        //* tab-body-open에 on이 없다면 tab-head 에 on을 제거 
    
        if(hasOn == true){
            $(this).parent().siblings().children('.tab-head').removeClass('on');
       
        }else if(hasOn != true){
            $(this).parent().siblings().children('.tab-head').addClass('on')
            

        
        }




    });

    
    $('.hamburger').click(function(){

        console.log('hihi')

        $('.hamburger span:first-child').toggleClass('on');
        $('.hamburger span:last-child').toggleClass('on');
        $('.header-area .bottom-header .main-menu').toggleClass('on')
        
    });

    
    


    media();

    function media(){
        let windowWidth = $(window).width();

        if(windowWidth >= 1800){
            $('.main-menu li').mouseenter(function(){
                let result = $(this).attr('data-alt');
        
                $('.sub-menu-head').removeClass('on');
                $(`#${result}`).addClass('on');
        
                $('.open-menu-area').addClass('top');
            });
        
             $('.open-menu-area').mouseleave(function(){
                    $(this).removeClass('top');
                    $(this).removeClass('bottom');
            });
                
            
            
            $(window).scroll(function(){
                const btn = $('.top-btn');
                const sct = $(window).scrollTop();
            
                
        
                if(sct >= 300){
                    $('.top-header').addClass('on'); 
                    // 헤더의 위에 부분 없어지게 하기
                    $('.bottom-header .scroll-logo').addClass('on');
                    // 로고 밑에줄에 생기게 하기 
                    $('.header-area .bottom-header').addClass('on')
                    // bottom-heade 높이 100px -> 90px로 변경
                    
                    // $('.header-area .bottom-header .main-menu').addClass('on')
                    // 한줄짜리 header일때 글씨 좀 떨어지게 하기 
                    $('.open-menu-area').removeClass('top');
        
                   
                   
        
                }else {
                    $('.top-header').removeClass('on');   
                    $('.bottom-header .scroll-logo').removeClass('on');
                    $('.header-area .bottom-header').removeClass('on')
                    $('.header-area .bottom-header .main-menu').removeClass('on')
                    // $('.open-menu-area').removeClass('active')
                
                  
                }
               
                
            $('.main-menu li').mouseenter(function(){
                const sct = $(window).scrollTop();
                
                if(sct >= 300){
                    $('.open-menu-area').addClass('bottom');
                    $('.open-menu-area').removeClass('top');
        
                    // 스크롤 300 이상이면 top값 조정 되게 
                }else{
                    $('.open-menu-area').removeClass('bottom');


                }
            });
              
               
            });


            
            $('.sec-3 .tab-btn li').click(function(){
                $(this).siblings().removeClass('on');
                $(this).addClass('on').slideDown('.tab-body');
                
                const result = $(this).attr('data-alt');
        
                $('.sec-3 .tab-right > div').removeClass('on');
                $(`#${result}`).addClass('on').slideDown('.tab-body');
        
            });

            
        }else if(windowWidth < 1000){


            $('.mobile-head').click(function(){
                    const menuHas = $(this).parent('.mobile-btn').hasClass('on')
                    
                    if(menuHas == true){
                        //'.mobile-btn' 에 on 클래스가 있는경우
                        $(this).parent('.mobile-btn').removeClass('on');
            
                    }else{
                        //'.mobile-btn' 에 on 클래스가 없는경우
                        $(this).parent('.mobile-btn').addClass('on');
                        $(this).parent('.mobile-btn').siblings().removeClass('on');
                        // $(this).parent('.mobile-btn').css({height: 'auto'});
                    }
                });
        }
    }


    let btn = $('.top-btn');
    $(window).scroll(function(){
        if($(window).scrollTop() > 400){
            btn.fadeIn();
        }else{
            btn.fadeOut();
        }
    });
    btn.on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    });
            

     


});//end

