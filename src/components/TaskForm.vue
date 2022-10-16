<template>
  <form action="" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="input-text" id="title" v-model="title">
        <div class="error" v-if="errorTitle">{{errorTitle}}</div>
      </div>
      <div class="form-group">
        <label for="desc">Description</label>
        <input type="text" class="input-text" id="desc" v-model="desc">
        <div class="error" v-if="errorDesc">{{errorDesc}}</div>
      </div>
      <div class="form-group">
        <label for="completed">Completed</label>
        <input type="checkbox" id="completed" v-model="completed">
      </div>
      <button>{{id ? 'Save' : 'Add'}}</button>
  </form>
</template>

<script>
export default {
    props: ['id'],
    name: 'TaskForm',
    data() {
        return {
            title: '',
            completed: false,
            desc: '',
            errorDesc: null,
            errorTitle: null,
        }
    },
    methods: {
        handleSubmit() {
            let tasks = this.getTask()
            if (this.id) {
                let objIndex = tasks.findIndex((task => task.id == this.id));
                tasks[objIndex].title = this.title
                tasks[objIndex].desc = this.desc
                tasks[objIndex].completed = this.completed
            } else {
                let task = {
                    id: (tasks.length  ? tasks[tasks.length - 1].id : 0) + 1,
                    title: this.title,
                    desc: this.desc,
                    completed: this.completed
                }
                tasks.push(task);
            }
            this.title = '';
            this.desc = '';
            this.completed = '';
            this.saveTask(tasks)
        },
        getTask() {
            let tasks =  localStorage.getItem('tasks')
            if (!tasks) {
                tasks = []
            } else {

                tasks = JSON.parse(tasks)
            }
            return tasks
        },
        saveTask(tasks) {
            localStorage.setItem('tasks', JSON.stringify(tasks))
        }
    },
    mounted() {
        if (!this.id) {
            return
        }
        let tasks = this.getTask()
        let currentTask = tasks.filter(task => task.id == this.id)
        this.title = currentTask[0].title;
        this.desc = currentTask[0].desc;
        this.completed = currentTask[0].completed;
    }
}
</script>

<style>

form {
    background: #eeeded;
    padding: 30px;
    width: 40%;
    border-radius: 10px;
    margin: 0 auto;
}

.form-group {
    margin: 10px 0px;
    text-align: left;
}

.form-group .input-text {
    width: 100%;
    padding: 10px;
    border: none;
}

.form-group .input-text:focus {
    border: none;
    border-bottom: 1px solid #42b983;
}

input[type="checkbox"] {
    margin-left: 15px
}

form button {
    padding: 10px 20px;
    border: none;
    outline: none;
    background: rgb(0, 89, 255);
    color: white;
    border-radius: 5px;
}

form button:focus {
    background: rgb(0, 57, 179);
}
</style>