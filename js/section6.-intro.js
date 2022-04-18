var dwidth6 = window.innerWidth

function debounce(fn, wait) {
    var resizeTimer = null
    return function () {
        if (resizeTimer !== null) {
            clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(fn, wait)
    }
}
function sliderMobileWidth() {
    var wwidth6 = window.innerWidth
    if(dwidth6 !== wwidth6){
        dwidth6 = wwidth6
        window.location.reload()
    }

    
}

window.addEventListener('resize', debounce(sliderMobileWidth, 300))




let data6 = {
    direction: 'left',
    btn_switch: 'off',
    btn_time: 0,
    btn_limit_time: null,
    slider_mobile_width: null,
    countedNum: null,
    drinks: [
        {
            id: 1,
            drinkSrc: './img/section6_slider_Au_lait_sea_salt.png',
            num: 0,
            drinlClassName: 'slider6_0',
            shadowClassName: 'shadow_0',
            mobileDrinkClassName: 'mobile_slider6_0',
            imgClassName: 'img_0',
            chName: '海鹽奶霜',
            enName: 'Au lait with sea salt',
            content: '超強主打海鹽奶霜，喝過的都說讚，沒喝過的您一定得試試。',
        },
        {
            id: 2,
            drinkSrc: './img/section6_slider_fruit_tea.png',
            num: 1,
            drinlClassName: 'slider6_1',
            shadowClassName: 'shadow_1',
            mobileDrinkClassName: 'mobile_slider6_1',
            imgClassName: 'img_1',
            chName: '鮮水果茶',
            enName: 'Fresh fruit tea',
            content: '採用台灣新鮮水果製成，美味健康。',

        },
        {
            id: 3,
            drinkSrc: './img/section6_slider_latte.png',
            num: 2,
            drinlClassName: 'slider6_2',
            shadowClassName: 'shadow_2',
            mobileDrinkClassName: 'mobile_slider6_2',
            imgClassName: 'img_2',
            chName: '鮮奶茶',
            enName: 'Fresh milk tea',
            content: '豐富口感，融合台灣茶與鮮奶香，享受回潤的感覺。',
        },
        {
            id: 4,
            drinkSrc: './img/section6_slider_red_bean_drink.png',
            num: 3,
            drinlClassName: 'slider6_3',
            shadowClassName: 'shadow_3',
            mobileDrinkClassName: 'mobile_slider6_3',
            imgClassName: 'img_3',
            chName: '紅豆系列',
            enName: 'Red bean milk tea',
            content: '紅豆系列產品，下午飢餓小點心首選。',
        },
        {
            id: 5,
            drinkSrc: './img/section6_slider_bubble_milk_tea.png',
            num: 4,
            drinlClassName: 'slider6_4',
            shadowClassName: 'shadow_4',
            mobileDrinkClassName: 'mobile_slider6_4',
            imgClassName: 'img_4',
            chName: '波霸鮮奶茶',
            enName: 'Pearl milk tea',
            content: '鮮奶茶加上QQ的芋圓，給您一天好心情。',
        },
        {
            id: 6,
            drinkSrc: './img/section6_slider_lemon_drink.png',
            num: 5,
            drinlClassName: '',
            shadowClassName: '',
            mobileDrinkClassName: '',
            imgClassName: '',
            chName: '青檸香茶/翡翠檸檬',
            enName: 'Lemon smoothie with green tea / Lemon smoothie with half - fermented tea',
            content: '酸酸甜甜，初戀的好滋味。',
        },
        {
            id: 7,
            drinkSrc: './img/section6_slider_grapefruit.png',
            num: 6,
            drinlClassName: '',
            shadowClassName: '',
            mobileDrinkClassName: '',
            imgClassName: '',
            chName: '葡萄柚系列',
            enName: 'Yakult yogurt with fresh grape fruit juice',
            content: '豐富的層次與口感，新鮮水果補充滿滿元氣。',
        },
        {
            id: 8,
            drinkSrc: './img/section6_slider_apple_tea.png',
            num: 7,
            drinlClassName: '',
            shadowClassName: '',
            mobileDrinkClassName: '',
            imgClassName: '',
            chName: '鮮蘋果綠/青',
            enName: 'Fresh apple green',
            content: '一天一蘋果，每日一杯的好選擇。',
        },
        {
            id: 9,
            drinkSrc: './img/section6_slider_yakult.png',
            num: 8,
            drinlClassName: '',
            shadowClassName: '',
            mobileDrinkClassName: '',
            imgClassName: '',
            chName: '多多綠茶',
            enName: 'Yakult yogurt green tea',
            content: '人氣商品多多綠茶，您今天多多了嗎?',
        },
        {
            id: 10,
            drinkSrc: './img/section6_slider_mango.png',
            num: 9,
            drinlClassName: '',
            shadowClassName: '',
            mobileDrinkClassName: '',
            imgClassName: '',
            chName: '鮮芒果冰沙',
            enName: 'Fresh mango smoothies (seasonai)',
            content: '吃芒果冰沙不用到冰店，阿偉讓您帶著走。',
        },
        {
            id: 11,
            drinkSrc: './img/section6_slider_plum.png',
            num: 10,
            drinlClassName: '',
            shadowClassName: '',
            mobileDrinkClassName: '',
            imgClassName: '',
            chName: '脆梅綠/清',
            enName: 'Plum half - fermented tea',
            content: '酸V阿酸V，梅子綠茶萬年長青款，邀您一同品嘗。',
        },
        {
            id: 12,
            drinkSrc: './img/section6_slider_half _fermented.png',
            num: 11,
            drinlClassName: '',
            shadowClassName: '',
            mobileDrinkClassName: '',
            imgClassName: '',
            chName: '台灣青茶',
            enName: 'Taiwanese half - fermented tea',
            content: '嚴選台灣青茶，解決暑氣好選擇。',
        },
    ],

    introDrinkSrc: './img/section6_slider_fruit_tea.png',
    introDrinkText: 'Fresh fruit tea',
    titleBarName: '鮮水果茶',
    titleBarContent: '採用台灣新鮮水果製成，美味健康。',
}

let vm6 = new Vue({
    el: '#app6',
    data: data6,
    mounted() {
        if (window.innerWidth < 767) {
            window.onload = function () {
                // 抓取寬度給予每一個 mobile_slider6
                this.slider_mobile_width = document.querySelector('.slider_container6_mobile').clientWidth / 3
                var viewDrinks = document.querySelectorAll('.slider6_mobile')
                viewDrinks.forEach((item, index) => {
                    var viewDrink = viewDrinks[index]
                    viewDrink.style.width = `${this.slider_mobile_width}px`
                })
                // 抓取高度給予 slider_container6_mobile
                var slider_container6_mobile = document.querySelector('.slider_container6_mobile')
                slider_container6_mobile.style.height = `${document.querySelector('.mobile_drink').height}px`
            }




            // this.slider_mobile_width = document.querySelector('.slider_container6_mobile').clientWidth/3

            // var slider_container6_mobile = document.querySelector('.slider_container6_mobile')

            // var mobileSliders = document.querySelectorAll('.slider6_mobile');
            // mobileSliders.forEach((item, index) => {
            //     var mobileSlider = mobileSliders[index]
            //     mobileSlider.style.width = `${this.slider_mobile_width}px`
            //     mobileSlider.style.transform = `translate(${this.slider_mobile_width * (index-1)}px)`
            // })
            // console.log(document.querySelector('.mobile_slider6_1').style.width);

        }
        this.auto()
    },
    methods: {
        // 左邊按鈕
        toRight() {
            if (window.innerWidth >= 767) {
                var drink0 = document.querySelector('.slider6_0')
                var drink1 = document.querySelector('.slider6_1')
                var drink2 = document.querySelector('.slider6_2')
                var drink3 = document.querySelector('.slider6_3')
                var drink4 = document.querySelector('.slider6_4')

                drink0.style.animationName = "slider6_0_right"
                drink0.style.animationDuration = '1s'
                drink1.style.animationName = "slider6_1_right"
                drink1.style.animationDuration = '1s'
                drink2.style.animationName = "slider6_2_right"
                drink2.style.animationDuration = '1s'
                drink3.style.animationName = "slider6_3_right"
                drink3.style.animationDuration = '1s'
                drink4.style.animationName = "slider6_4_right"
                drink4.style.animationDuration = '1s'

                var shadow0 = document.querySelector('.shadow_0')
                var shadow1 = document.querySelector('.shadow_1')
                var shadow2 = document.querySelector('.shadow_2')
                var shadow3 = document.querySelector('.shadow_3')
                var shadow4 = document.querySelector('.shadow_4')

                shadow0.style.animationName = "slider6_0_right"
                shadow0.style.animationDuration = '1s'
                shadow1.style.animationName = "slider6_1_right"
                shadow1.style.animationDuration = '1s'
                shadow2.style.animationName = "slider6_2_right"
                shadow2.style.animationDuration = '1s'
                shadow3.style.animationName = "slider6_3_right"
                shadow3.style.animationDuration = '1s'
                shadow4.style.animationName = "slider6_4_right"
                shadow4.style.animationDuration = '1s'


            } else {
                var mobileDrink0 = document.querySelector('.mobile_slider6_0')
                var mobileDrink1 = document.querySelector('.mobile_slider6_1')
                var mobileDrink2 = document.querySelector('.mobile_slider6_2')
                var mobileDrink3 = document.querySelector('.mobile_slider6_3')
                var mobileDrink4 = document.querySelector('.mobile_slider6_4')

                mobileDrink0.style.animationName = "slider6_0_right"
                mobileDrink0.style.animationDuration = '1s'
                mobileDrink1.style.animationName = "slider6_1_right"
                mobileDrink1.style.animationDuration = '1s'
                mobileDrink2.style.animationName = "slider6_2_right"
                mobileDrink2.style.animationDuration = '1s'
                mobileDrink3.style.animationName = "slider6_3_right"
                mobileDrink3.style.animationDuration = '1s'
                mobileDrink4.style.animationName = "slider6_4_right"
                mobileDrink4.style.animationDuration = '1s'
            }
        },
        // 右邊按鈕
        toLeft() {
            if (window.innerWidth >= 767) {
                var drink0 = document.querySelector('.slider6_0')
                var drink1 = document.querySelector('.slider6_1')
                var drink2 = document.querySelector('.slider6_2')
                var drink3 = document.querySelector('.slider6_3')
                var drink4 = document.querySelector('.slider6_4')

                drink0.style.animationName = "slider6_0_left"
                drink0.style.animationDuration = '1s'
                drink1.style.animationName = "slider6_1_left"
                drink1.style.animationDuration = '1s'
                drink2.style.animationName = "slider6_2_left"
                drink2.style.animationDuration = '1s'
                drink3.style.animationName = "slider6_3_left"
                drink3.style.animationDuration = '1s'
                drink4.style.animationName = "slider6_4_left"
                drink4.style.animationDuration = '1s'

                var shadow0 = document.querySelector('.shadow_0')
                var shadow1 = document.querySelector('.shadow_1')
                var shadow2 = document.querySelector('.shadow_2')
                var shadow3 = document.querySelector('.shadow_3')
                var shadow4 = document.querySelector('.shadow_4')

                shadow0.style.animationName = "slider6_0_left"
                shadow0.style.animationDuration = '1s'
                shadow1.style.animationName = "slider6_1_left"
                shadow1.style.animationDuration = '1s'
                shadow2.style.animationName = "slider6_2_left"
                shadow2.style.animationDuration = '1s'
                shadow3.style.animationName = "slider6_3_left"
                shadow3.style.animationDuration = '1s'
                shadow4.style.animationName = "slider6_4_left"
                shadow4.style.animationDuration = '1s'

            } else {
                var mobileDrink0 = document.querySelector('.mobile_slider6_0')
                var mobileDrink1 = document.querySelector('.mobile_slider6_1')
                var mobileDrink2 = document.querySelector('.mobile_slider6_2')
                var mobileDrink3 = document.querySelector('.mobile_slider6_3')
                var mobileDrink4 = document.querySelector('.mobile_slider6_4')



                mobileDrink0.style.animationName = "slider6_0_left"
                mobileDrink0.style.animationDuration = '1s'
                mobileDrink1.style.animationName = "slider6_1_left"
                mobileDrink1.style.animationDuration = '1s'
                mobileDrink2.style.animationName = "slider6_2_left"
                mobileDrink2.style.animationDuration = '1s'
                mobileDrink3.style.animationName = "slider6_3_left"
                mobileDrink3.style.animationDuration = '1s'
                mobileDrink4.style.animationName = "slider6_4_left"
                mobileDrink4.style.animationDuration = '1s'
            }

        },

        auto() {
            this.set_auto_play = setInterval(() => {
                this.direction = 'left'
                this.toLeft()
                var mobileDrink0 = document.querySelector('.mobile_slider6_0')
                var mobileDrink1 = document.querySelector('.mobile_slider6_1')
                var mobileDrink2 = document.querySelector('.mobile_slider6_2')
                var mobileDrink3 = document.querySelector('.mobile_slider6_3')
                var mobileDrink4 = document.querySelector('.mobile_slider6_4')
                this.slider_mobile_width = document.querySelector('.slider_container6_mobile').clientWidth / 3
                mobileDrink0.style.width = `${this.slider_mobile_width}px`
                mobileDrink1.style.width = `${this.slider_mobile_width}px`
                mobileDrink2.style.width = `${this.slider_mobile_width}px`
                mobileDrink3.style.width = `${this.slider_mobile_width}px`
                mobileDrink4.style.width = `${this.slider_mobile_width}px`
                var drinks = this.drinks
                drinks.forEach((item, index) => {
                    var drink = drinks[index]
                    this.countedNum = (drink.num + drinks.length - 1) % drinks.length
                    this.drinks[index].num = this.countedNum
                    this.drinks[index].drinlClassName = `slider6_${this.countedNum}`
                    this.drinks[index].shadowClassName = `shadow_${this.countedNum}`
                    this.drinks[index].mobileDrinkClassName = `slider6_mobile mobile_slider6_${this.countedNum}`
                })
            }, 4000)
        },
        clearAuto() {
            clearInterval(this.set_auto_play)
        },


        numChangeHandler(add) {
            if (add === 1 && this.btn_switch === 'off') {
                this.direction = 'right'
                this.toRight()
            } else if (add === -1 && this.btn_switch === 'off') {
                this.direction = 'left'
                this.toLeft()
            }

            if (this.btn_switch === 'off') {
                if (window.innerWidth >= 767) {
                    var drinks = this.drinks
                    drinks.forEach((item, index) => {
                        var drink = drinks[index]
                        this.countedNum = (drink.num + drinks.length + add) % drinks.length
                        this.drinks[index].num = this.countedNum
                        this.drinks[index].drinlClassName = `slider6_${this.countedNum}`
                        this.drinks[index].mobileDrinkClassName = `slider6_mobile mobile_slider6_${this.countedNum}`
                        this.drinks[index].shadowClassName = `shadow_${this.countedNum}`
                    })
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
                    },
                        1000)
                } else {

                    var mobileDrink0 = document.querySelector('.mobile_slider6_0')
                    var mobileDrink1 = document.querySelector('.mobile_slider6_1')
                    var mobileDrink2 = document.querySelector('.mobile_slider6_2')
                    var mobileDrink3 = document.querySelector('.mobile_slider6_3')
                    var mobileDrink4 = document.querySelector('.mobile_slider6_4')
                    this.slider_mobile_width = document.querySelector('.slider_container6_mobile').clientWidth / 3
                    mobileDrink0.style.width = `${this.slider_mobile_width}px`
                    mobileDrink1.style.width = `${this.slider_mobile_width}px`
                    mobileDrink2.style.width = `${this.slider_mobile_width}px`
                    mobileDrink3.style.width = `${this.slider_mobile_width}px`
                    mobileDrink4.style.width = `${this.slider_mobile_width}px`



                    var drinks = this.drinks
                    drinks.forEach((item, index) => {
                        var drink = drinks[index]
                        this.countedNum = (drink.num + drinks.length + add) % drinks.length
                        this.drinks[index].num = this.countedNum
                        this.drinks[index].drinlClassName = `slider6_${this.countedNum}`
                        this.drinks[index].mobileDrinkClassName = `slider6_mobile mobile_slider6_${this.countedNum}`
                        // this.drinks[index].shadowClassName = `shadow_${this.countedNum}`
                    })





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
                    },
                        1000)
                }

            }
            this.clearAuto()
            this.auto()
        },
        stopHandler() {
            this.clearAuto()
        },
        startHandler() {
            this.auto()
        },

        drinkHandler(el) {
            this.introDrinkSrc = el.drinkSrc
            this.introDrinkText = el.enName
            this.titleBarName = el.chName
            this.titleBarContent = el.content

            document.querySelector('.title_bar').classList.remove('act')
            document.querySelector('.title_line_animate').classList.remove('act')
            document.querySelector('.info').classList.remove('act')
            document.querySelector('.svg_circle').classList.remove('act')
            document.querySelector('.svg_line1').classList.remove('act')
            document.querySelector('.svg_line1-2').classList.remove('act')
            document.querySelector('.svg_line2').classList.remove('act')
            document.querySelector('.svg_line2-2').classList.remove('act')
            document.querySelector('.intro_drink').classList.remove('act')
            document.querySelector('.intro_drink_text_wrap').classList.remove('act')

            setTimeout(() => {
                document.querySelector('.title_bar').classList.add('act')
                document.querySelector('.title_line_animate').classList.add('act')
                document.querySelector('.info').classList.add('act')
                document.querySelector('.svg_circle').classList.add('act')
                document.querySelector('.svg_line1').classList.add('act')
                document.querySelector('.svg_line1-2').classList.add('act')
                document.querySelector('.svg_line2').classList.add('act')
                document.querySelector('.svg_line2-2').classList.add('act')
                document.querySelector('.intro_drink').classList.add('act')
                document.querySelector('.intro_drink_text_wrap').classList.add('act')
            }, 1)

        }

    }
})


var toggletime = -1
window.addEventListener('visibilitychange', () => {
    var img1s_length = vm2.$data.img1s.length
    toggletime++

    // 跳出頁面時
    if (toggletime % 2 === 0) {
        vm2.clearAuto()
        vm2.$data.img_number = (vm2.$data.img_number + img1s_length - 1) % img1s_length
        vm6.clearAuto()


        // 跳回頁面時
    } else if (toggletime % 2 === 1) {
        vm2.auto()
        vm2.$data.img_number = (vm2.$data.img_number + img1s_length + 1) % img1s_length
        vm6.auto()

        // 例外顯示
    } else {
        console.log('錯誤');
    }
})




