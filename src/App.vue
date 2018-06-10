<template>
  <div id="app">
    <ul class="nav">
      <li v-on:click="colorChange(0)">
        <router-link to="/MyTasks" :style="{color: color[0]}">My Tasks</router-link>
      </li>
      <li v-on:click="colorChange(1)">
        <router-link to="/InProgress" :style="{color: color[1]}">In Progress</router-link>
      </li>
      <li v-on:click="colorChange(2)">
        <router-link to="/Completed" :style="{color: color[2]}">Completed</router-link>
      </li>
    </ul>
    <div class="wrap">
      <AddTask></AddTask>
      <router-view/>
    </div>
  </div>
</template>

<script>
import AddTask from '@/components/AddTask'
export default {
  name: 'App',
  data () {
    return {
      color: ['#ffffff', '#00408B', '#00408B']
    }
  },
  components: { AddTask },
  methods: {
     colorChange (num) {
       this.color.length = 0;
       this.color = ['#00408B', '#00408B', '#00408B']
       this.color.splice(num, 1, '#ffffff');
       this.$bus.$emit('addInputOn', true);
       this.$bus.$emit('editTodoOn', true);
     }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  max-width: 1024px;
  margin: 0 auto;
  background: #E1E1E1;
}
.nav {
  height: 76px;
  background: #4A90E2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav li {
  width: 220px;
  height: 100%;
  text-align: center;
}
.nav li a {
  display: inline-block;
  width: 80%;
  height: 100%;
  font-family: 'Roboto-Medium', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 24px;
  line-height: 76px;
}
.nav li a:hover {
  border-bottom: 5px solid #00408B;
}
.wrap {
  max-width: 620px;
  min-height: calc(100vh - 76px);
  margin: 0 auto;
  padding: 24px 0;
}
</style>
