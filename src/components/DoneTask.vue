<template>
  <ul>
    <li v-for="(item, i) in doneTask" :key="item.No" :class="{ major: item.important }">
      <div class="input-title">
        <span v-on:click="DoneOrNot(i)" :class="{ checkbox: item.complete }">
          <i class="fas fa-check" v-if="item.complete == true"></i>
        </span>
        <p>{{ item.content }}</p>
      </div>
      <div class="content">
        <i class="far fa-star" v-if="item.important == false"></i>  <!-- 空心星號 -->
        <i class="fas fa-star" v-if="item.important == true"></i>  <!-- 實心星號 -->
        <i class="far fa-edit" ></i>  <!-- 空心鉛筆 -->
      </div>
    </li>
  </ul>     
</template>

<script>
export default {
  name: "DoneTask",
  data () {
    return {
      todoTask: JSON.parse(localStorage.getItem('todoTask')) || [],
      doneTask: JSON.parse(localStorage.getItem('doneTask')) || []
    }
  },
  mounted () {
    this.$bus.$on('finishDoneTask', this.finishDoneTask);
    this.$bus.$on('finishTodoTask', this.finishTodoTask);
  },
  methods: {
    finishDoneTask (array) {
      const Len = this.doneTask.length;
      const LenArray = array.length;
      this.doneTask.splice(0, Len);
      for (let i = 0; i < LenArray; i++) {
        this.doneTask.push(array[i]);
      }
    },
    finishTodoTask (array) {
      const Len = this.todoTask.length;
      const LenArray = array.length;
      this.todoTask.splice(0, Len);
      for (let i = 0; i < LenArray; i++) {
        this.todoTask.push(array[i]);
      }
    },
    DoneOrNot (index) {
      this.doneTask[index].complete = !this.doneTask[index].complete;
      const todoArray = this.doneTask.splice(index, 1);
      this.todoTask.push(todoArray[0]);
      const LenTodo = this.todoTask.length;
      for (let i = 0; i < LenTodo; i++) {
        this.todoTask[i].No = i + 1;
      }
      const LenDone = this.doneTask.length;
      for (let i = 0; i < LenDone; i++) {
        this.doneTask[i].No = i + 1;
      }
      localStorage.setItem('todoTask', JSON.stringify(this.todoTask));
      localStorage.setItem('doneTask', JSON.stringify(this.doneTask));
      this.$bus.$emit('unfinishAddTask', this.todoTask);
      this.$bus.$emit('unfinishTodoTask', this.todoTask);
      this.$bus.$emit('unfinishDoneTask', this.doneTask);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 76px;
  padding: 0 32px;
  background: #F2F2F2;
  margin-bottom: 8px;
}
li.major {
  background: #FFF2DC;
}
.input-title {
  display: flex;
  align-items: center;
  width: 70%;
  margin-bottom: 15px;
  font-family: 'Roboto-Medium', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 24px;
  color: #000000;
}
.input-title span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background: #FFFFFF;
  border-radius: 2px;
  margin-right: 16px;
  cursor: pointer;
  box-shadow: 2px 2px 2px 0 #C8C8C8;
}
.input-title .checkbox {
  background: #4A90E2;
}
.input-title p {
  color: #9B9B9B;
  text-decoration: line-through;
}
.checkbox i {
  font-size: 16px;
  color: #ffffff;
}
.far.fa-star, .fas.fa-star,
.far.fa-edit{
  font-size: 24px;
}
.far.fa-star, .fas.fa-star {
  margin-right: 32px;
}
.fas.fa-star {
  color: #F5A623;
}
</style>
