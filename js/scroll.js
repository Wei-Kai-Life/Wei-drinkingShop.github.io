

var scrollHandler = function () {
    var nav_height = document.querySelector('#header').clientHeight
    var page1_height = document.querySelector('#app2').clientHeight
    var page2_height = document.querySelector('#section2').clientHeight
    var page3_height = document.querySelector('#app3').clientHeight
    var page4_height = document.querySelector('#app4').clientHeight
    var page5_height = document.querySelector('#app5').clientHeight


    // console.log(window.innerWidth);
    // console.log('nav_height', nav_height);
    // console.log('app2:', page1_height);
    // console.log('section2:', page2_height);
    // console.log('app3:', page3_height);
    // console.log('app4:', page4_height);
    // console.log('app5:', page5_height);



    window.addEventListener('scroll', heightFilter, false)
    function heightFilter() {
        // 大於 990 時有動畫
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

         // 小於等於 990 時有動畫
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


        }
        // ~~~~~~~~~~~  電腦版與手機板都有動畫效果如下:

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
        // ~~~~~~~~~~~




    }

    window.addEventListener('resize', () => {
        window.removeEventListener('scroll', heightFilter)
        scrollHandler()
    })
}


scrollHandler()





