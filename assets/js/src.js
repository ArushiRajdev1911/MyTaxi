$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2000
    })
console.log('fsdgs');

scrollToTop();

});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth', color: '#fff' });
}