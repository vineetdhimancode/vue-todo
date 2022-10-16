<template>
  <TaskForm :id="$route.params.id" msg="Task updated successfully!"/>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue'
export default {
    components: {
        TaskForm
    }
}
</script>

<style>

</style>