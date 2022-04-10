

let data5 = {
    curves: [
        {
            className: 'curve curve1 app5_animation',
            d: 'M490.8,351c-56.3,33.7-88.9,96.1-84.3,157.9c7,97.1,93.9,141.2,97.5,143'
        },
        {
            className: 'curve curve2 app5_animation',
            d: 'M513.3,344.4c-49.2,46.4-69.2,116.1-51.6,177.8c18.6,68.2,76,119.9,146.6,131.7'
        },
        {
            className: 'curve curve3 app5_animation',
            d: 'M532.2,338.9c-72.7,44.6-110.1,125.5-94.5,198.2c16,76.8,81.4,114.8,92.4,121'
        },
        {
            className: 'curve curve4 app5_animation',
            d: 'M579.1,339.4c70.9,34,115.5,103,113.4,175.1c-2.2,74.2-52.9,121.4-63.3,133.7'
        },
    ],
    grasses:[
        {
            className:'grass1 app5_animation',
            image:'./img/section5_img1.png'
        },
        {
            className:'grass2 app5_animation',
            image:'./img/section5_img2.png'
        },
        {
            className:'grass3 app5_animation',
            image:'./img/section5_img3.png'
        },
        {
            className:'grass4 app5_animation',
            image:'./img/section5_img4.png'
        },
        {
            className:'grass5 app5_animation',
            image:'./img/section5_img5.png'
        },
    ],
    lines:[
        {
            className:'line line1 app5_animation',
            x1:'384.5',
            y1:'523.4',
            x2:'195.5',
            y2:'518.4'
        },
        {
            className:'line line2 app5_animation',
            x1:'378.8',
            y1:'361.2',
            x2:'317.3',
            y2:'294.2'
        },
        {
            className:'line line3 app5_animation',
            x1:'556.5',
            y1:'269.3',
            x2:'556.5',
            y2:'179.2'
        },
        {
            className:'line line4 app5_animation',
            x1:'714.5',
            y1:'394.1',
            x2:'790.4',
            y2:'301.4'
        },
        {
            className:'line line5 app5_animation',
            x1:'731.1',
            y1:'523.4',
            x2:'920.2',
            y2:'518.4'
        },
    ],
    groups:[
        {
            gClassName:'group group1 app5_animation',
            ellipseClassName:'ellipse1 app5_animation',
            cx:'122.3',
            cy:'516.1',
            circleClassName:'circle1 app5_animation',
            matrix:'matrix(1 0 0 1 92.7158 536.7744)',
            textClassName:'text text1 app5_animation',
            text:'香'
        },
        {
            gClassName:'group group2 app5_animation',
            ellipseClassName:'ellipse2 app5_animation',
            cx:'253.9',
            cy:'247.8',
            circleClassName:'circle2 app5_animation',
            matrix:'matrix(1 0 0 1 223.3403 268.0869)',
            textClassName:'text text2 app5_animation',
            text:'濃'
        },
        {
            gClassName:'group group3 app5_animation',
            ellipseClassName:'ellipse3 app5_animation',
            cx:'556.5',
            cy:'115.5',
            circleClassName:'circle3 app5_animation',
            matrix:'matrix(1 0 0 1 526.9971 137.228)',
            textClassName:'text text3 app5_animation',
            text:'醇'
        },
        {
            gClassName:'group group4 app5_animation',
            ellipseClassName:'ellipse4 app5_animation',
            cx:'834.1',
            cy:'248.9',
            circleClassName:'circle4 app5_animation',
            matrix:'matrix(1 0 0 1 804.1387 272.4326)',
            textClassName:'text text4 app5_animation',
            text:'韻'
        },
        {
            gClassName:'group group5 app5_animation',
            ellipseClassName:'ellipse5 app5_animation',
            cx:'995.4',
            cy:'515.4',
            circleClassName:'circle5 app5_animation',
            matrix:'matrix(1 0 0 1 965.2715 535.8682)',
            textClassName:'text text5 app5_animation',
            text:'美'
        },
    ]
}

let vm5 = new Vue({
    el: '#app5',
    data: data5,
    mounted() {
        // 監聽視窗大小來開啟與關閉 latest_news_box 的動畫效果
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // var app5_animations = document.querySelectorAll('.app5_animation')
        // app5_animations.forEach((item, index) => {
        //     var app5_animation = app5_animations[index]
        //     window.addEventListener('scroll', svgHandler, false)
        //     function svgHandler() {

        //         if (window.innerWidth > 990) {
        //             if (window.scrollY <= 1600) {
        //                 app5_animation.classList.remove('act')
        //             }
        //             if (window.scrollY > 1600) {
        //                 app5_animation.classList.add('act')
        //             }
        //             if (window.scrollY > 2800) {
        //                 app5_animation.classList.remove('act')
        //             }
        //         } else {
        //             if (window.scrollY <= 2300) {
        //                 app5_animation.classList.remove('act')
        //             }
        //             if (window.scrollY > 2300) {
        //                 app5_animation.classList.add('act')
        //             }
        //             if (window.scrollY >= 3300) {
        //                 app5_animation.classList.remove('act')
        //             }
        //         }
        //     }
        //     window.addEventListener('resize', () => {
        //         window.addEventListener('scroll', svgHandler)
        //     })
        // })
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
})