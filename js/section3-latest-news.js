let data3 = {
    latest_news_box: [
        {
            id: 0,
            className: 'latest_news_box latest_news_box1',
            imgSrc: './img/latest_news_pic1.jpg',
            date: '2022/03/23',
            content: '新店開幕!!!'
        },
        {
            id: 1,
            className: 'latest_news_box latest_news_box2',
            imgSrc: './img/latest_news_pic2.jpg',
            date: '2022/02/22',
            content: '大里塗城二店價格調整敬請包涵'
        },
        {
            id: 2,
            className: 'latest_news_box latest_news_box3',
            imgSrc: './img/latest_news_pic3.jpg',
            date: '2022/03/23',
            content: '新年到!賀新年!BubbleZ阿偉飲品新年營業時間'
        }
    ]
}
let vm3 = new Vue({
    el: '#app3',
    data: data3,
    mounted() {
        // 監聽視窗大小來開啟與關閉 latest_news_box 的動畫效果
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        // var latest_news_boxes = document.querySelectorAll('.latest_news_box')
        // latest_news_boxes.forEach((item, index) => {
        //     var latest_news_box = latest_news_boxes[index]
        //     window.addEventListener('scroll', imgHandler, false)
        //     function imgHandler() {

        //         if (window.innerWidth > 990) {
        //             latest_news_box.classList.remove('mobile')
        //             if (window.scrollY <= 300) {
        //                 latest_news_box.classList.remove('act')
        //             }
        //             if (window.scrollY > 300) {
        //                 latest_news_box.classList.add('act')
        //             }
        //             if (window.scrollY >= 1250) {
        //                 latest_news_box.classList.remove('act')
        //             }
        //         } else {
        //             window.removeEventListener('scroll', imgHandler)
        //             latest_news_box.classList.remove('act')
        //             latest_news_box.classList.add('mobile')
        //         }
        //     }
        //     window.addEventListener('resize', () => {
        //         window.addEventListener('scroll', imgHandler)
        //     })
        // })
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
})




