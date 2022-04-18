let data6 = {
    drinks: [
        {
            id: 1,
            drinkSrc: './img/section6_slider_Au_lait_sea_salt.png',
            num: 0,
            drinlClassName: 'slider6_0',
            shadowClassName: 'shadow_0',
            mobileDrinkClassName: 'mobile_slider6_0',
            imgClassName:'img_0',
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
            imgClassName:'img_1',
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
            imgClassName:'img_2',
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
            imgClassName:'img_3',
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
            imgClassName:'img_4',
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
            mobileDrinkClassName:'',
            imgClassName:'',
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
            mobileDrinkClassName:'',
            imgClassName:'',
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
             mobileDrinkClassName:'',
             imgClassName:'',
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
             mobileDrinkClassName:'',
             imgClassName:'',
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
             mobileDrinkClassName:'',
             imgClassName:'',
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
             mobileDrinkClassName:'',
             imgClassName:'',
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
             mobileDrinkClassName:'',
             imgClassName:'',
            chName: '台灣青茶',
            enName: 'Taiwanese half - fermented tea',
            content: '嚴選台灣青茶，解決暑氣好選擇。',
        },
    ],
    slider_mobile_width:''
}

let vm6 = new Vue({
    el:'#app6',
    data:data6,
    mounted(){
        // 用onload img的height才抓得到
        window.onload = function(){
            // 抓取寬度給予每一個 mobile_slider6
            this.slider_mobile_width = document.querySelector('.slider_container6_mobile').clientWidth/3
            var viewDrinks = document.querySelectorAll('.mobile_slider6')
            viewDrinks.forEach((item,index)=>{
                var viewDrink = viewDrinks[index]
                viewDrink.style.width = `${this.slider_mobile_width}px`
            })
            // 抓取高度給予 slider_container6_mobile
            var slider_container6_mobile = document.querySelector('.slider_container6_mobile')
            slider_container6_mobile.style.height = `${document.querySelector('.mobile_drink').height}px`
        }
   
    }
})