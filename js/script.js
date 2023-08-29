//  dom (html 태그 로딩 완료시 실행)
$(document).ready(function () {
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
    
}
