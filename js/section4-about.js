let data4 = {
    main_about_decoration: [
        {
            className: 'main_about_decoration main_about_decoration1 layer',
            imgSrc: './img/main_about_decoration1.png',
            data_depth:3
        },
        {
            className: 'main_about_decoration main_about_decoration2 layer',
            imgSrc: './img/main_about_decoration2.png',
            data_depth:1
        },
        {
            className: 'main_about_decoration main_about_decoration3 layer',
            imgSrc: './img/main_about_decoration3.png',
            data_depth:12
        },
        {
            className: 'main_about_decoration main_about_decoration4 layer',
            imgSrc: './img/main_about_decoration4.png',
            data_depth:15
        },
        {
            className: 'main_about_decoration main_about_decoration5 layer',
            imgSrc: './img/main_about_decoration5.png',
            data_depth:6
        },
        {
            className: 'main_about_decoration main_about_decoration6 layer',
            imgSrc: './img/main_about_decoration6.png',
            data_depth:8
        },
        {
            className: 'main_about_decoration main_about_decoration7 layer',
            imgSrc: './img/main_about_decoration7.png',
            data_depth:0.5
        },
        {
            className: 'main_about_decoration main_about_decoration8 layer',
            imgSrc: './img/main_about_decoration8.png',
            data_depth:3
        },
    ]
}
let vm4 = new Vue({
    el: '#app4',
    data: data4,
    mounted() {
       
        // 監聽視窗大小來開啟與關閉 latest_news_box 的動畫效果
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // var app4_animations = document.querySelectorAll('.app4_animation')
        // app4_animations.forEach((item,index)=>{
        //     var app4_animation = app4_animations[index]
        //     window.addEventListener('scroll', section4Handler, false)
        // function section4Handler() {
        //     if (window.innerWidth > 990) {
        //         app4_animation.classList.remove('mobile')
        //         if (window.scrollY <= 700) {
        //             app4_animation.classList.remove('act')
        //         }

        //         if (window.scrollY > 700) {
        //             app4_animation.classList.add('act')
        //         }
        //         if (window.scrollY >= 1800) {
        //             app4_animation.classList.remove('act')
        //         }
        //     } else {
        //         window.removeEventListener('scroll', section4Handler)
        //         app4_animation.classList.remove('act')
        //         app4_animation.classList.add('mobile')
        //     }
        // }
        // window.addEventListener('resize', () => {
        //     window.addEventListener('scroll', section4Handler)
        // })
        // })
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
})
var main_about_decoration1 = document.querySelector('.main_about_decoration1')
var main_about_decoration2 = document.querySelector('.main_about_decoration2')
var main_about_decoration3 = document.querySelector('.main_about_decoration3')
var main_about_decoration4 = document.querySelector('.main_about_decoration4')
var main_about_decoration5 = document.querySelector('.main_about_decoration5')
var main_about_decoration6 = document.querySelector('.main_about_decoration6')
var main_about_decoration7 = document.querySelector('.main_about_decoration7')
var main_about_decoration8 = document.querySelector('.main_about_decoration8')
var parallaxInstance1 = new Parallax(main_about_decoration1)
var parallaxInstance2 = new Parallax(main_about_decoration2)
var parallaxInstance3 = new Parallax(main_about_decoration3)
var parallaxInstance4 = new Parallax(main_about_decoration4)
var parallaxInstance5 = new Parallax(main_about_decoration5)
var parallaxInstance6 = new Parallax(main_about_decoration6)
var parallaxInstance7 = new Parallax(main_about_decoration7)
var parallaxInstance8 = new Parallax(main_about_decoration8)
 


