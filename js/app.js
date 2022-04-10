let data={
    scrolled:'0'
}
let vm = new Vue({
    el:'#app',
    data: data,
    mounted(){
        window.addEventListener('scroll',()=>{
            this.scrolled = window.scrollY
        })
    }
})