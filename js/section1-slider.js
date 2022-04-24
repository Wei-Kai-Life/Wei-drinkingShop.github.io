// vue
let data2 = {
    img_number: 0,
    direction: null,
    set_auto_play: null,

    btn_switch: 'off',
    btn_time: 0,
    btn_limit_time: null,

    img1s: [
        // 圖片1
        {
            id: 0,
            className: 'drink',
            src: './img/bubble_z_drink1.png'
        },

        // 圖片2
        {
            id: 1,
            className: 'drink_decoration',
            src: './img/bubble_z_icon2_2.png'
        },
        // 圖片3
        {
            id: 2,
            className: 'drink_decoration',
            src: './img/bubble_z_icon3_2.png'
        },


    ],
    img2s: [
        // 圖片1
        {
            id: 0,
            className: 'drink_decoration2',
            src: './img/bubble_z_icon1_1.png'
        },
        // 圖片2
        {
            id: 1,
            className: 'drink',
            src: './img/bubble_z_drink2.png'
        },
        // 圖片3
        {
            id: 2,
            className: 'drink',
            src: './img/bubble_z_drink3.png'
        },
    ],
    img3s: [
        // 圖片1
        {
            id: 0,
            className: 'drink_decoration',
            src: './img//bubble_z_icon1_2.png'
        },
        // 圖片2
        {
            id: 1,
            className: 'drink_decoration2',
            src: './img/bubble_z_icon2_1.png'
        },
        // 圖片3
        {
            id: 2,
            className: 'drink_decoration2',
            src: './img/bubble_z_icon3_1.png'
        },
    ],
    img4s: [
        // 圖片1
        {
            id: 0,
            className: 'drink_text',
            content:'Fresh fruit tea'
        },
        // 圖片2
        {
            id: 1,
            className: 'drink_text',
            content:'Pearl milk tea'
        },
        // 圖片3
        {
            id: 2,
            className: 'drink_text',
            content:'Au lait with sea salt'
        },
    ]
}
let vm2 = new Vue({
    el: '#app2',
    data: data2,
    mounted() {
        // 自動輪播
        this.auto()
    },
    methods: {
        auto() {
            this.set_auto_play = setInterval(() => {
                this.direction = 'right'
                this.img_number = (this.img_number + this.img1s.length + 1) % (this.img1s.length)
            }, 6000)

        },
        clearAuto() {
            clearInterval(this.set_auto_play)
        },

        change(add) {
            // 決定方向
            if (add === 1) {
                this.direction = 'right'
            } else if (add === -1) {
                this.direction = 'left'
            }
            // 關閉進度條 (能再次關閉的間隔時間取決於btn_switch的開關間隔時間)    
            if (this.btn_switch === 'off') {
                $(".button_line").removeClass("active")

            }
            //    手動換圖片
            if (this.btn_switch === 'off') {
                this.img_number = (this.img_number + this.img1s.length + add) % (this.img1s.length)
                this.btn_switch = 'on'
                this.btn_time = 0
                this.btn_limit_time = setInterval(() => {
                    this.btn_time += 1
                    // 設定0.5秒後才能再次觸發  if(this.time === x)   備註:( 幾秒 = x/2 )
                    if (this.btn_time === 1) {
                        this.btn_time = 0
                        this.btn_switch = 'off'
                        clearInterval(this.btn_limit_time)
                    }
                    // 秒數建議跟 el.style.animationDuration 一樣 (目前設為不同)
                }, 1000)
            }
            // 自動換圖片
            this.clearAuto()
            this.auto()
        },


        // 照片位移動畫-動畫結束時清空style
        clearAnimate(el, done) {
            el.addEventListener("animationend", function () {
                el.style.animationName = ""
                done()
            })
        },
        beforeEnter(el) {
        
            // console.log('進入前');
            $(".button_line").removeClass("active")
            // 進場時的appear，之後無用處
            if (this.direction === null) {
                this.direction = 'right'
            }
        },
        // 照片位移動畫-動畫進入
        enterHandler(el, done) {
            // console.log('進入');

            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            if (this.direction === 'right') {
                el.style.animationName = "right-enter"
            } else if (this.direction === 'left') {
                el.style.animationName = "left-enter"
            } else {
                console.log('錯誤');
            }
            el.style.animationDuration = "1s"

            this.clearAnimate(el, done)
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        },
        afterEnter() {
            // console.log('進入後');
            $(".button_line").addClass("active")
        },
        beforeLeave() {
            // console.log('離開前');
        },
        // 照片位移動畫-動畫離開
        leaveHandler(el, done) {
            // console.log('離開');
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            if (this.direction === 'right') {
                el.style.animationName = "right-leave"
            } else if (this.direction === 'left') {
                el.style.animationName = "left-leave"
            } else {
                console.log('錯誤');
            }
            el.style.animationDuration = "1s"
            this.clearAnimate(el, done)
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        },
        afterLeave() {
            // console.log('離開後');

        },
        // methods底
    },
})


// 跳出頁面時停止動作 以節省效能~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// (此功能目前放在section6-intro.js 一起做使用)

// var toggletime = -1
// window.addEventListener('visibilitychange', () => {
//     var img1s_length = vm2.$data.img1s.length
//     toggletime++

//     // 跳出頁面時
//     if (toggletime % 2 === 0) {
//         vm2.clearAuto()
//         vm2.$data.img_number = (vm2.$data.img_number + img1s_length - 1) % img1s_length

//         // 跳回頁面時
//     } else if (toggletime % 2 === 1) {
//         vm2.auto()
//         vm2.$data.img_number = (vm2.$data.img_number + img1s_length + 1) % img1s_length
//         // 例外顯示
//     } else {
//         console.log('錯誤');
//     }
// })



