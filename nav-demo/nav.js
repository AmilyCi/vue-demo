let vm = new Vue({
    el:'#app',
    data:{
        active:'home'
    },
    methods:{
        makeActives:function(item){
            this.active = item
        }
    }
})