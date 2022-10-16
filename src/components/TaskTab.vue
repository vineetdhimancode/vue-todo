<template>
   <div :class="{'task': true, 'task-completed': completed}" @dblclick="toggleTask(id)">
       <div class="title">
        <h1>{{title}}</h1>
       </div>
       <div class="action">
           <button @click="deleteTask(id)"><i class="fa fa-trash"></i></button>
           <button @click="editTask(id)"><router-link :to="{name: 'edit', params: {'id': id}}"><i class="fa fa-pencil"></i></router-link></button>
       </div>
   </div>
</template>

<script>
let tasksObj = require('../js/commonFunction.js')

export default {
    name: 'TaskTab',
    props: ['title', 'completed', 'id'],
    methods: {
        toggleTask(id) {
            this.$emit('updateTask', id)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        editTask(id) {
            this.$emit('editTask', id)
        }
    }
}
</script>

<style>

.task {
    width: 500px;
    background: #f6f5f5;
    border-radius: 10px;
    padding: 30px;
    margin: 5px auto;
    display: flex;
}

.task:hover {
    cursor: pointer;
    background: rgb(226, 226, 226);
    transition: 0.3s;
}

.title {
    width: 80%;
    text-align: left;
}

.action {
    padding: 30px 0;
}

.action button {
    border: none;
    background: transparent;
}

.action button a {
    color: unset;
}

.fa {
    font-size: 1.5em;
}

.fa:hover {
    transition: 0.3s;
    color:#42b983;
}

.task-completed {
    border-left: 2px solid #42b983
}

</style>