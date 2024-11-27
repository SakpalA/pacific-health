// jQuery
$(document).ready(function () {
    $(window).scroll(function () {
        // scroll-up-btn show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        };
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css('scrollBehavior', 'auto');
    });

    // toggle menu
    $('.menu-btn').click(function () {
        $('.nav-list').toggleClass('active');
        // toggle between menu and close btn
        $('.menu-btn i').toggleClass('active');
    });

    function adjustCardLayout() {
        const windowWidth = $(window).width();
        // Add horizontal scrolling for tablet and mobile screens
        if (windowWidth <= 1018) {
            $('.card-section').css({
                'display': 'flex',
                'flex-wrap': 'nowrap',
                'overflow-x': 'auto',
                'scroll-padding-left': '10px',
            });

            $('.card').css({
                'flex': '0 0 80%', // Cards take 80% width for scrolling
                'margin-right': '20px',
            });
        } else {
            // Reset styles for larger screens
            $('.card-section').css({
                'display': 'flex',
                'flex-wrap': 'wrap',
                'overflow-x': 'visible',
            });

            $('.card').css({
                'flex': '1 0 calc(33.33% - 40px)', // 3 cards per row
                'margin-right': '0',
            });
        }
    }

    // Call the function on page load and window resize
    adjustCardLayout();
    $(window).resize(adjustCardLayout);
});


// GSAP animation
var tl = gsap.timeline()
tl.from(".nav-logo-div", {
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})

tl.from(".nav-list li", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})

tl.from(".menu-btn i", {
    y: -20,
    opacity: 0,
    duration: 1,
})

var herotl = gsap.timeline()
herotl.from(".hero-span", {
    opacity: 0,
    duration: 0.3,
    delay: 0.3
})

herotl.from(".hero-head", {
    opacity: 0,
})

herotl.from(".hero-para",{
    opacity: 0,
})