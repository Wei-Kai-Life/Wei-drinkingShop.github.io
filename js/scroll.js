// setTimeout(" console.log('對不起，要你久候') ", 3000)


var fix_navbar = document.querySelector('.fix_navbar')
var nav_height = document.querySelector('#header').clientHeight
var page1_height = document.querySelector('#app2').clientHeight
var page2_height = document.querySelector('#section2').clientHeight
var page3_height = document.querySelector('#app3').clientHeight
var page4_height = document.querySelector('#app4').clientHeight
var page5_height = document.querySelector('#app5').clientHeight
var page6_height = document.querySelector('#app6').clientHeight
var page7_height = document.querySelector('#app7').clientHeight



var scrollHandler = function () {

    nav_height = document.querySelector('#header').clientHeight
    page1_height = document.querySelector('#app2').clientHeight
    page2_height = document.querySelector('#section2').clientHeight
    page3_height = document.querySelector('#app3').clientHeight
    page4_height = document.querySelector('#app4').clientHeight
    page5_height = document.querySelector('#app5').clientHeight
    page6_height = document.querySelector('#app6').clientHeight
    page7_height = document.querySelector('#app7').clientHeight
    page8_height = document.querySelector('#app8').clientHeight
    // footer_height = document.querySelector('.footer_section').clientHeight


    // console.log(window.innerWidth);
    // console.log('nav_height', nav_height);
    // console.log('app2:', page1_height);
    // console.log('section2:', page2_height);
    // console.log('app3:', page3_height);
    // console.log('app4:', page4_height);
    // console.log('app5:', page5_height);
    // console.log('app6:', page6_height);
    // console.log('page7_height: ', page7_height);
    // console.log('page8_height', page8_height);


    window.removeEventListener('scroll', heightFilter)


    var fixed_trigger = $('#fixed_hamburger');
    var fixed_burger_container = $('.fixed_burger_container');
    var fixed_burger_nav = $('.fixed_burger_nav');
    fixed_isClosed = true;

    window.addEventListener('scroll', heightFilter, false)
    function heightFilter() {
        
        if(window.innerWidth <= 1400){
            if(window.scrollY > 120){
                fix_navbar.classList.add('act')
            }else{
                fix_navbar.classList.remove('act')
                fixed_burger_nav.removeClass('open')
                fixed_trigger.removeClass('is-open');
                fixed_trigger.addClass('is-closed');
                fixed_isClosed = true;
            }
        }
       
            
        

        // window.innerWidth 大於 767 時
        if (window.innerWidth >= 767) {

            // 飲料intro
            if (window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height + page5_height * 0.2) {
                var app6_animations = document.querySelectorAll('.app6_animation')
                app6_animations.forEach((item, index) => {
                    var app6_animation = app6_animations[index]
                    app6_animation.classList.remove('act')
                })
            }
            if (window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height + page5_height * 0.4 &&
                window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height + page5_height * 0.2) {
                var svg6s = document.querySelectorAll('.svg6')
                svg6s.forEach((item, index) => {
                    var svg6 = svg6s[index]
                    svg6.classList.remove('act')

                })

            }
            if (window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height + page5_height * 0.4 &&
                window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height + page5_height + page6_height) {
                var app6_animations = document.querySelectorAll('.app6_animation')
                app6_animations.forEach((item, index) => {
                    var app6_animation = app6_animations[index]
                    app6_animation.classList.add('act')
                })
            }
            if (window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height + page5_height + page6_height) {
                var app6_animations = document.querySelectorAll('.app6_animation')
                app6_animations.forEach((item, index) => {
                    var app6_animation = app6_animations[index]
                    app6_animation.classList.remove('act')
                })
            }

            // window.innerWidth 大於 990 時
            if (window.innerWidth > 990) {

                var latest_news_boxes = document.querySelectorAll('.latest_news_box')
                latest_news_boxes.forEach((item, index) => {
                    var latest_news_box = latest_news_boxes[index]


                    if (window.scrollY < nav_height + page1_height * 0.3) {
                        latest_news_box.classList.remove('act')
                    }
                    if (window.scrollY >= nav_height + page1_height * 0.3
                        && window.scrollY < nav_height + page1_height + page2_height + page3_height) {
                        latest_news_box.classList.add('act')
                    }
                    if (window.scrollY >= nav_height + page1_height + page2_height + page3_height) {
                        latest_news_box.classList.remove('act')
                    }
                })


                var app4_animations = document.querySelectorAll('.app4_animation')
                app4_animations.forEach((item, index) => {
                    var app4_animation = app4_animations[index]


                    if (window.scrollY < nav_height + page1_height + page2_height * 0.5) {
                        app4_animation.classList.remove('act')
                    }
                    if (window.scrollY >= nav_height + page1_height + page2_height * 0.5 &&
                        window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height * 0.85) {
                        app4_animation.classList.add('act')
                    }
                    if (window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height * 0.85) {
                        app4_animation.classList.remove('act')
                    }
                })

            }
        }


        // window.innerWidth 小於等於 990 時有動畫
        if (window.innerWidth <= 990) {

            var latest_news_boxes = document.querySelectorAll('.latest_news_box')
            latest_news_boxes.forEach((item, index) => {
                var latest_news_box = latest_news_boxes[index]
                latest_news_box.classList.remove('act')
            })

            var app4_animations = document.querySelectorAll('.app4_animation')
            app4_animations.forEach((item, index) => {
                var app4_animation = app4_animations[index]
                app4_animation.classList.remove('act')
            })


            // 飲料intro mobile版
            if (window.innerWidth < 767) {
                if (window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height * 0.9) {
                    var app6_animations = document.querySelectorAll('.app6_animation')
                    app6_animations.forEach((item, index) => {
                        var app6_animation = app6_animations[index]
                        app6_animation.classList.remove('act')
                    })
                }
                if (window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height + page5_height * 0.2 &&
                    window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height * 0.9) {
                    var svg6s = document.querySelectorAll('.svg6')
                    svg6s.forEach((item, index) => {
                        var svg6 = svg6s[index]
                        svg6.classList.remove('act')
                    })

                }
                if (window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height + page5_height * 0.2 &&
                    window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height + page5_height + page6_height) {
                    var app6_animations = document.querySelectorAll('.app6_animation')
                    app6_animations.forEach((item, index) => {
                        var app6_animation = app6_animations[index]
                        app6_animation.classList.add('act')
                    })
                }
                if (window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height + page5_height + page6_height) {
                    var app6_animations = document.querySelectorAll('.app6_animation')
                    app6_animations.forEach((item, index) => {
                        var app6_animation = app6_animations[index]
                        app6_animation.classList.remove('act')
                    })
                }
            }

        }
        // ~~~~~~~~~~~  電腦版與手機板都有動畫效果如下:
        // svg:
        if (window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height * 0.5) {
            var app5_animations = document.querySelectorAll('.app5_animation')
            app5_animations.forEach((item, index) => {
                var app5_animation = app5_animations[index]
                app5_animation.classList.remove('act')
            })
        }
        if (window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height * 0.5 &&
            window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height + page5_height) {
            var app5_animations = document.querySelectorAll('.app5_animation')
            app5_animations.forEach((item, index) => {
                var app5_animation = app5_animations[index]
                app5_animation.classList.add('act')
            })
        }
        if (window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height + page5_height - 10) {
            var app5_animations = document.querySelectorAll('.app5_animation')
            app5_animations.forEach((item, index) => {
                var app5_animation = app5_animations[index]
                app5_animation.classList.remove('act')
            })
        }
        // app7
        if (window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height + page5_height
            + page6_height * 0.3) {
            var app7_animations = document.querySelectorAll('.app7_animation')
            app7_animations.forEach((item, index) => {
                var app7_animation = app7_animations[index]
                app7_animation.classList.remove('act')
            })
        }
        if (window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height + page5_height
            + page6_height * 0.3 && window.scrollY < nav_height + page1_height + page2_height + page3_height
            + page4_height + page5_height + page6_height + page7_height + window.innerWidth * 0.03) {
            var app7_animations = document.querySelectorAll('.app7_animation')
            app7_animations.forEach((item, index) => {
                var app7_animation = app7_animations[index]
                app7_animation.classList.add('act')
            })
        }
        if (window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height + page5_height
            + page6_height + page7_height + window.innerWidth * 0.03) {

            var app7_animations = document.querySelectorAll('.app7_animation')
            app7_animations.forEach((item, index) => {
                var app7_animation = app7_animations[index]
                app7_animation.classList.remove('act')
            })
        }
        // ~~~~~~~~~~~
        // app8
        var app8_animations = document.querySelectorAll('.animation8')
        app8_animations.forEach((item, index) => {
            var app8_animation = app8_animations[index]
            if (window.scrollY < nav_height + page1_height + page2_height + page3_height + page4_height + page5_height
                + page6_height * 0.9) {
                    app8_animation.classList.remove('act')
            }
            if (window.scrollY >= nav_height + page1_height + page2_height + page3_height + page4_height + page5_height
                + page6_height * 0.9) {
                    app8_animation.classList.add('act')
            }
        })

    }

    // console.log('最外層 : ', dwidth);

}


var dwidth = window.innerWidth
function debounce2(fn, wait) {
    var resizeTimer = null
    return function () {
        if (resizeTimer !== null) {
            clearTimeout(resizeTimer)
        }
        clearTimeout(resizeTimer)
        resizeTimer = setTimeout(fn, wait)
    }
}

function handle2() {
    var wwidth = window.innerWidth
    if (dwidth !== wwidth) {
        dwidth = wwidth
        scrollHandler()
    }
}

window.addEventListener('resize', debounce2(handle2, 1000))



var loadNum = 0

var setHeightHandler = setInterval(() => {
    // console.log('計時');
    // console.log(isApp7Onload);
    if (isApp7Onload === true) {
        if (window.innerWidth < 767) {
            ($('.mobile_drink')).each(function () {
                $(this).bind('load', function () {
                    loadNum++
                    if (loadNum === 5) {
                        scrollHandler()
                        clearInterval(setHeightHandler)
                    }
                })
            })
        } else {
            scrollHandler()
            clearInterval(setHeightHandler)
        }
    }
}, 1)


// if (window.innerWidth < 767) {
//     ($('.mobile_drink')).each(function () {
//         $(this).bind('load', function () {
//             loadNum++
//             if (loadNum === 5) {
//                 scrollHandler()
//             }
//         })
//     })
// } else {
//     scrollHandler()
// }





