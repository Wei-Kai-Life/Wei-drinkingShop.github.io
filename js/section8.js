let data8 = {
    worldDots:[
        {
            id:1,
            className:'world_dot1',
        },
        {
            id:2,
            className:'world_dot2',
        },
        {
            id:3,
            className:'world_dot3',
        }
        ,
        {
            id:4,
            className:'world_dot4',
        }
        ,
        {
            id:5,
            className:'world_dot5',
        }
        ,
        {
            id:6,
            className:'world_dot6',
        }
        ,
        {
            id:7,
            className:'world_dot7',
        }
        ,
        {
            id:8,
            className:'world_dot8',
        }
        ,
        {
            id:9,
            className:'world_dot9',
        }
        ,
        {
            id:10,
            className:'world_dot10',
        }
    ]
}
let vm8 = new Vue({
    el:'#app8',
    data: data8,
    mounted(){
        // 地圖背景置中
        var worldBackground = document.querySelector('.worldBackground')
        if(window.innerWidth < 1350){
            worldBackground.style.marginLeft = `-${(1350-window.innerWidth)/3}px`
        }
    }
})
// console.log(document.querySelector('.worldBackground').clientWidth);



// 地圖背景置中

window.addEventListener('resize', debounce8(app8_Resize, 300))

var dwidth8 = window.innerWidth

function debounce8(fn, wait) {
    var resizeTimer = null
    return function () {
        if (resizeTimer !== null) {
            clearTimeout(resizeTimer)
        }
        resizeTimer = setTimeout(fn, wait)
    }
}
function app8_Resize(){
    var wwidth8 = window.innerWidth
    var worldBackground = document.querySelector('.worldBackground')
    if (dwidth8 !== wwidth8){
        dwidth8 = wwidth8
        if(window.innerWidth < 1350){
            worldBackground.style.marginLeft = `-${(1350-window.innerWidth)/3}px`
        }else{
            worldBackground.style.marginLeft = 'auto'
        }
    }
}


