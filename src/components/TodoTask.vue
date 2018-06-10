<template>
  <div class="todoList">
    <ul>
      <li v-for="(item, i) in todoTask" :key="item.No">
        <div class="todo-list" v-if="item.edit == false" :class="{ major: item.important }">
          <div class="title">
            <div class="input-title">
              <span v-on:click="DoneOrNot(i)" :class="{ checkbox: item.complete }">
                <i class="fas fa-check" v-if="item.complete == true"></i>
              </span>
              <p>{{ item.content }}</p>
            </div>
            <div>
              <i class="far fa-star" v-on:click="major(i)" v-if="item.important == false"></i>  <!-- 空心星號 -->
              <i class="fas fa-star" v-on:click="major(i)" v-if="item.important == true"></i>  <!-- 實心星號 -->
              <i class="far fa-edit" v-on:click="write(i)"></i>  <!-- 空心鉛筆 -->
            </div>
          </div>
          <div class="content">
            <span v-if="item.deadlineDate != ''"><i class="far fa-calendar-alt"></i>{{ item.deadlineDate }}</span>
            <span v-if="item.file != ''"><i class="far fa-file"></i></span>
            <span v-if="item.comment != ''"><i class="far fa-comment"></i></span>
          </div>
        </div>
        <EditTask v-if="item.edit == true" :index="i"></EditTask>
      </li>
    </ul>
  </div>
</template>

<script>
import EditTask from '@/components/EditTask'
export default {
  name: 'TodoTask',
  data () {
    return {
      todoTask: JSON.parse(localStorage.getItem('todoTask')) || [],
      doneTask: JSON.parse(localStorage.getItem('doneTask')) || []
    }
  },
  mounted () {
    this.$bus.$on('transferData', this.transferData);
    this.$bus.$on('cancelEdit', this.cancelEdit);
    this.$bus.$on('saveEdit', this.saveEdit);
    this.$bus.$on('unfinishTodoTask', this.unfinishTodoTask);
    this.$bus.$on('unfinishDoneTask', this.unfinishDoneTask);
    this.$bus.$on('addInputOn', this.addInputOn);
  },
  components: { EditTask },
  methods: {
    transferData (array) {
      const Len = this.todoTask.length;
      const LenArray = array.length;
      this.todoTask.splice(0, Len);
      for (let i = 0; i < LenArray; i++) {
        this.todoTask.push(array[i]);
      }
    },
    unfinishTodoTask (array) {
      const Len = this.todoTask.length;
      const LenArray = array.length;
      this.todoTask.splice(0, Len);
      for (let i = 0; i < LenArray; i++) {
        this.todoTask.push(array[i]);
      }
    },
    unfinishDoneTask (array) {
      const Len = this.doneTask.length;
      const LenArray = array.length;
      this.doneTask.splice(0, Len);
      for (let i = 0; i < LenArray; i++) {
        this.doneTask.push(array[i]);
      }
    },
    addInputOn (boolean) {
      const Len = this.todoTask.length;
      for (let i = 0; i < Len; i++) {
        if (this.todoTask[i].edit == boolean) {
          this.cancelEdit (i);
        }
      }
    },
    DoneOrNot (index) {
      this.todoTask[index].complete = !this.todoTask[index].complete;
      const doneArray = this.todoTask.splice(index, 1);
      this.doneTask.push(doneArray[0]);
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
      this.$bus.$emit('finishAddTask', this.todoTask);
      this.$bus.$emit('finishTodoTask', this.todoTask);
      this.$bus.$emit('finishDoneTask', this.doneTask);
    },
    major (index) {
      this.todoTask[index].important = !this.todoTask[index].important;
      localStorage.setItem('todoTask', JSON.stringify(this.todoTask));
    },
    write (index) {
      this.todoTask[index].edit = !this.todoTask[index].edit;
      this.$bus.$emit('editTodoOn', true);
      localStorage.setItem('todoTask', JSON.stringify(this.todoTask));
    },
    cancelEdit (index) {
      this.todoTask[index].edit = !this.todoTask[index].edit;
      localStorage.setItem('todoTask', JSON.stringify(this.todoTask));
    },
    saveEdit (object) {
      this.todoTask.splice(object.index, 1, object.obj);
      localStorage.setItem('todoTask', JSON.stringify(this.todoTask));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todoList li {
  margin-bottom: 8px;
}
.todo-list {
  height: 102px;
  background: #F2F2F2;
  padding: 28px 32px 17px 32px;
}
.title {
  display: flex;
  justify-content: space-between;
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
.input-title P {
  width: 89.7%;
  word-break: keep-all;
}
.checkbox i {
  font-size: 16px;
  color: #ffffff;
}
.far.fa-star, .fas.fa-star,
.far.fa-edit{
  font-size: 24px;
  cursor: pointer;
}
.far.fa-star, .fas.fa-star {
  margin-right: 32px;
}
.fas.fa-star {
  color: #F5A623;
}
.todo-list.major {
  background: #FFF2DC;
}
.content {
  height: 18px;
  font-family: 'Roboto-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #757575;
  margin-left: 40px;
}
.content span {
  margin-right: 16px;
}
.content i {
  margin-right: 8px;
}
</style>
