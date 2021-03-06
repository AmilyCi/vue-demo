Vue.component('todoItem',{
    template:'<li>{{title}}<button v-on:click="$emit(\'remove\')">Remove</button></li>',
    props:['title']
})
let vm =new Vue({
    el:'#todoList',
    data:{
        todoText:'',
        todos:[{
            id:1,
            title:'apple'
        },{
            id:2,
            title:'banana'
        },{
            id:3,
            title:'orange'
        }],
        todoId:4
    },
    methods:{
        addNewTodo:function(){
            this.todos.push({
                id:this.todoId++,
                title:this.todoText
            })
            this.todoText="";
        }
    }
})