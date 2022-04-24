// 用於scroll，等待app7高度訂好後，再執行scroll
var isApp7Onload = false
// 用於scroll，等待app7高度訂好後，再執行scroll

var dwidth7 = window.innerWidth

function debounce7(fn, wait) {

    var resizeTimer = null
    return function () {
        if (resizeTimer !== null) {
            clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(fn, wait)
    }

}
function app7_Resize() {
    var wwidth7 = window.innerWidth
    if (dwidth7 !== wwidth7) {
        dwidth7 = wwidth7
        var container7 = document.querySelector('.container7')
        var text7_2 = document.querySelector('.text7-2')
        if (window.innerWidth > 990) {
            // 抓取高度給予 container7
            container7.style.height = `${document.querySelector('.picture7').height}px`
            // 抓取高度給予 text7-2
            text7_2.style.height = `${document.querySelector('.picture7').height - 92}px`
        }else{
            container7.style.height = ''
            text7_2.style.height = ''
        }


        // var text7_container
    }


}

window.addEventListener('resize', debounce7(app7_Resize, 300))


let data7 = {
    num1: '01',
    num2: '02',
    text7_1: '堅持',
    text7_2: ['現調、現搖、專業、衛生','好水、好茶、健康'],
    text7_3: ['好水、好茶、健康','現調、現搖、專業、衛生'],
    img_number: 0,
    imgs:[
        {
            id:0,
            src:'./img/section7-drink-backgroung.jpg',
            imgClass:'7picture1 7picture1_1'
        },
        {
            id:1,
            src:'./img/section7-fruit-background.jpg',
            imgClass:'7picture2'
        },
        
    ],
    set_auto_play: null,
}
let vm7 = new Vue({
    el: '#app7',
    data: data7,
    mounted() {
        
        if (window.innerWidth > 990) {
            // console.log(12);
            window.onload = function () {
                var container7 = document.querySelector('.container7')
                container7.style.height = `${document.querySelector('.picture7').height}px`

                var text7_2 = document.querySelector('.text7-2')
                text7_2.style.height = `${document.querySelector('.picture7').height - 92}px`
                
                
                isApp7Onload = true
            }
        }else{
            isApp7Onload = true
        }
        // window.onload = function () {
        //     var container7 = document.querySelector('.container7')
        //     container7.style.height = `${document.querySelector('.picture7').height}px`

        //     var text7_2 = document.querySelector('.text7-2')
        //     text7_2.style.height = `${document.querySelector('.picture7').height - 92}px`
        // }

        this.auto()
        
    },

    methods:{
        clearAnimate(el, done) {
            el.addEventListener("animationend", function () {
                
                el.style.position =  ''
                el.style.animationName = ''
               
                done()
            })
        },
        clearAuto() {
            clearInterval(this.set_auto_play)
        },
        auto(){
            this.set_auto_play = setInterval(()=>{
                this.img_number = (this.img_number + this.imgs.length + 1)%(this.imgs.length)
                this.num1 = `0${this.img_number+1}` 
            },4500)
        },
        stopHandler(){
            if(window.innerWidth > 990){
                this.clearAuto()
            }
            
        },
        startHandler(){
            if(window.innerWidth > 990){
                this.auto()
            }
        },



        beforeEnter(){
          

        },
        enterHandler(el, done){
            el.style.animationTimingFunction = 'ease-in-out'
            el.style.animationName = 'imgEnter'
            el.style.animationDuration = "0.6s"
           
            this.clearAnimate(el, done)
        },
        afterEnter(){
            $(".circle7").removeClass("act")
            $(".line7").removeClass("act")
            setTimeout(()=>{
                $(".circle7").addClass("act")
                $(".line7").addClass("act")
            },10)
            
        },
        beforeLeave(){

        },
        leaveHandler(el, done){
           el.style.animationTimingFunction = 'ease-in-out'
           el.style.position =  'absolute'
           el.style.animationName = 'imgLeave'
           el.style.animationDuration = "0.6s"
           this.clearAnimate(el, done)
        },
        afterLeave(){

        }
    },


   
})
// document.querySelector('.picture7').style.position =  'absolute'
