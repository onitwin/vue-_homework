import Vue from 'vue';

document.addEventListener('DOMContentLoaded',()=>{
  new Vue({
    el:"#app",
    data: {
      todo:[
        {task: "Wash Clothes",priority:"red"},
        {task: "Get Haircut",priority:"green"},
        {task:"Do coding homework",priority:"amber"}
      ],
      newTask:"", //this is gained from the form, and fed down to method using 'this.'
      priority:""

    },
    methods: {
      saveNewTask:function(){
        this.todo.push({
          task:this.newTask,
          priority:this.priority
        });
        this.newTask="" // this is a block scope new item?
      }
      //next method would go here
    }







  });







});
