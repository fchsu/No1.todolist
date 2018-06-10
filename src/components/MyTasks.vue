<template>
  <div>
    <TodoTask></TodoTask>
    <DoneTask></DoneTask>
  </div>
</template>

<script>
import TodoTask from '@/components/TodoTask'
import DoneTask from '@/components/DoneTask'
export default {
  name: 'MyTasks',
  data () {
    return {
      
    }
  },
  components: { TodoTask, DoneTask }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
