<template>
  Edit view {{$route.params.id}}
  <TaskForm :id="$route.params.id"/>
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