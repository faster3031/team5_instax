//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
    // 클릭시 점멸
    function flash(e) {
        $(".flash")
        .show() //show the hidden div
        .animate({ opacity: 1 }, 100)
        .fadeOut(500)
        .css({ opacity: 0.5 });
    }
    $(".flash").hide();
    $(".visual-camera").click(function (e) {
        flash(e);
    });

    // 각 섹션의 위치값(세로스크롤 위치)
    const sectionYpos = [1000, 2000, 3000, 4000, 5000];
    // 클래스 nav 의 li 를 찾아라
    // 저장한다. 재활용하기 위해서
    const navLis = $(".nav ul li");
    // li 에 a 태그를 클릭을 해서 스크롤을 이동
    const navLisA = $(".nav ul li a");
    // 클릭 기능 구현
    $.each(navLisA, function (index, item) {
      // item 은 a 태그를 말합니다.
      // item 을 클릭을 할 겁니다.
      // item 은 html 태그 (jQuery 용도)
        $(this).click(function (event) {
            // a 태그의 href 막기
            event.preventDefault();
            // li 의 모든 클래스 제거
            navLis.removeClass("focus-active");
            // 클릭된 li 에 focus-active 추가하기
            navLis.eq(index).addClass("focus-active");
            // 2. 클릭하면 스크롤바가 움직인다.
            $("html, body").animate(
            {scrollTop: sectionYpos[index],},
            "slow"
            );
        });
    });

    /* 슬라이드 */
    var slide_hero = $('.detail-slide');
    slide_hero.owlCarousel({
        items: 3,
        loop: true,
        nav: true,
        center: true,
        callbacks: true,
        // autoplay: true,
        // autoplayTimeout: 5000,
        // autoplayHoverPause: false,
    });
});

// 멀티미디어 리소스 로딩 완료 후 실행
window.onload = function(){
    
};

// swiper
window.addEventListener("load", function () {
    const swiper = new Swiper(".sample-slider", {
        loop: true,
        speed: 1000,
        slidesPerView: 5,
        spaceBetween: 150,
        autoplay: {delay: 0},
    });
    
    // top 버튼 스크롤 기능
    const topBtn = document.getElementById("top-btn");
    topBtn.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(window.scrollY);
        if (window.scrollY == 0) {
            window.scrollTo({
            top: 99999,
            behavior: "smooth",
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    });
    // 화살표 이미지 회전
    const topBtnImg = document.getElementById("top-btn-img");
    window.addEventListener("scroll", function (scTop) {
        scTop = this.document.documentElement.scrollTop;
        if (scTop > 0) {
            topBtnImg.classList.add("up");
        } else {
            topBtnImg.classList.remove("up");
        }
    });

    //헤더 스크롤 기능
    //스크롤바의 상단위치
    let scy = 0;
    let scActive = 50;
    scy = window.document.documentElement.scrollTop;
    let header = document.querySelector(".header");
    header.addEventListener("mouseenter", function () {
        header.classList.add("header-active");
    });
    header.addEventListener("mouseleave", function () {
        if (scy < scActive) {
            header.classList.remove("header-active");
        }
    });
    //새로고침 시 적용
    if (scy > scActive) {
        header.classList.add("header-active");
    }
    window.addEventListener("scroll", function () {
        scy = window.document.documentElement.scrollTop;
        // console.log(scy);
        if (scy > scActive) {
            header.classList.add("header-active");
        } else {
            header.classList.remove("header-active");
        }
    });

    // 스크롤 시 movie 배경 변환.
    let scb = 900;
    let scr = 980;
    let movie = document.querySelector(".movie");
    window.addEventListener("scroll", function () {
        scb = window.document.documentElement.scrollTop;
        if (scb > scr) {
            movie.classList.add("movie-active");
        } else {
            movie.classList.remove("movie-active");
        }
    });
    // 스크롤 시 mini section active 
    let mini = document.querySelector(".mini");
    let miniscr = 1700;
    window.addEventListener("scroll", function () {
      scb = window.document.documentElement.scrollTop;
      console.log(miniscr)
        if (scb > miniscr) {
          mini.classList.add("mini-active");
        } else {
          mini.classList.remove("mini-active");
        }
    });
    // 스크롤 시 square section active 
    let square = document.querySelector(".square");
    let squarescr = 2880;
    window.addEventListener("scroll", function () {
      scb = window.document.documentElement.scrollTop;
        if (scb > squarescr) {
          square.classList.add("square-active");
        } else {
          square.classList.remove("square-active");
        }
    });
       // 스크롤 시 wide section active 
       let wide = document.querySelector(".wide");
       let widescr = 3800;
       window.addEventListener("scroll", function () {
         scb = window.document.documentElement.scrollTop;
           if (scb > widescr) {
            wide.classList.add("wide-active");
           } else {
            wide.classList.remove("wide-active");
           }
       });
});