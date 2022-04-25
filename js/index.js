window.addEventListener('scroll', (e) => {
    
})

$(function() {
    $(window).scroll(function() {
        const scrollTop = document.documentElement.scrollTop ||document.body.scrollTop
        if(scrollTop > 0) {
            $('.hd-navbar').addClass('hd-navbar__hide')
            $('.nav-btn').addClass('nav-btn__show')
        }else {
            $('.hd-navbar').removeClass('hd-navbar__hide')
            $('.nav-btn').removeClass('nav-btn__show')
        }
    })

    $('.hd-navbar').mouseover(function() {
        $('.hd-navbar').removeClass('hd-navbar__hide')
        $('.nav-btn').removeClass('nav-btn__show')
    })
    $('.hd-navbar').mouseout(function() {
        const scrollTop = document.documentElement.scrollTop ||document.body.scrollTop
        if(scrollTop === 0) return;
        $('.hd-navbar').addClass('hd-navbar__hide')
        $('.nav-btn').addClass('nav-btn__show')
    })
})