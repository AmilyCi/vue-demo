Vue.filter('currency',function(value){
    return '$' + value.toFixed(2);
});
let vm = new Vue({
    el:'#app',
    data:{
        services:[
            {name:'coffee',price:19.00000,active:true},
            {name:'milk',price:20.00000,active:false},
            {name:'juice',price:38.00000000,active:false},
            {name:'water',price:12.00000,active:false}
        ]
    },
    methods:{
        toggleActive:function(s){
            s.active = !s.active;
        },
        total:function(){
            let total=0;
            this.services.forEach(item=>{
                if(item.active){
                    total+=item.price;
                }
            })
            return total
        }
    }
})