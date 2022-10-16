<template>
  <div class="home">
    <h1>Task list</h1>

    <div v-if="!isEdit">
      <div v-for="task in tasks" :key="task.title">
        <TaskTab :completed="task.completed" :id="task.id" :title="task.title"
        @updateTask="updateT" @deleteTask="deleteT" @editTask="editT"/>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
let tasksObj = require('../js/commonFunction.js')
import TaskTab from '../components/TaskTab.vue'

export default {
  name: 'HomeView',
  components: {
    TaskTab,
  },
  data() {
    return {
      tasks: [],
      isEdit: false,
      currentTask: null
    }
  },
  methods: {
    updateT(id) {
      let tasks = tasksObj.getTasks();
      let objIndex = tasks.findIndex((task => task.id == id));
      tasks[objIndex].completed = !tasks[objIndex].completed
      tasksObj.saveTask(tasks)
      this.tasks = tasksObj.getTasks()
    },
    deleteT(id) {
      let tasks = tasksObj.getTasks();
      tasks = tasks.filter((task) => task.id !== id)
      tasksObj.saveTask(tasks)
      this.tasks = tasksObj.getTasks()
    },
    editT(id) {
      this.isEdit = true;
    }
  },
  mounted() {
    this.tasks = tasksObj.getTasks()
  },
}
</script>
