let nav_items = document.querySelectorAll('.nav-item')
let nav_imgs = document.querySelectorAll('.nav-img')
var nav_img_Interval
var clear_nav_img_Interval
var nav_running

// logo 電腦版 動畫
nav_items.forEach((item, index) => {
    const nav_item = nav_items[index]
    const nav_img = nav_imgs[index]

    // 滑鼠進入logo時的動畫function
    nav_item.addEventListener('mouseenter', function () {
        nav_running = false

        // 清除mouseenter的計時方程式
        clearInterval(clear_nav_img_Interval)

        if (nav_running == false) {
            nav_img.classList.remove("animate")
            nav_img.classList.remove("animate2")

            // 設定mouseenter後 0.1秒 後執行動作
            nav_img_Interval = setInterval(() => {
                nav_img.classList.add("animate")
                nav_running = true
            }, 100);
            nav_running = true

        }
    })

    //    滑鼠離開logo時的動畫function
    nav_item.addEventListener('mouseleave', function () {

        // 清除mouseleave的計時方程式
        clearInterval(nav_img_Interval)

        if (nav_running == true) {
            nav_img.classList.remove("animate")
            nav_img.classList.remove("animate2")

            // 設定mouseleave後 0.1秒 後執行動作
            clear_nav_img_Interval = setInterval(() => {
                nav_img.classList.add("animate2")
                nav_running == false
            }, 100);
            nav_running = false

        }
    })
})