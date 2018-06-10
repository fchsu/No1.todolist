<template>
  <div class="wrap-component">
    <button v-on:click="addTask()" v-if="addinput == false"><span>+</span>Add Task</button>
    <div class="add-task" v-if="addinput == true">
      <div class="task-title" :class="{ major: todo.important }">
        <div class="input-title">
          <span></span>
          <input type="text" placeholder="Type Something Here…"
            v-model="todo.content" :class="{ major: todo.important }">
        </div>
        <div>
          <i class="far fa-star" v-on:click="major()" v-if="todo.important == false"></i>  <!-- 空心星號 -->
          <i class="fas fa-star" v-on:click="major()" v-if="todo.important == true"></i>  <!-- 實心星號 -->
          <i class="fas fa-edit"></i>  <!-- 實心鉛筆 -->
        </div> 
      </div>
      <ul class="task-detail">
        <li>
          <p><span><i class="far fa-calendar-alt"></i></span>Deadline</p>
          <input type="date" v-model="todo.deadlineDate">
          <input type="time" v-model="todo.deadlineTime">
        </li>
        <li>
          <p><span><i class="far fa-file"></i></span>File</p>
          <span class="attached"><i class="fas fa-times"></i></span>
        </li>
        <li>
          <p><span><i class="far fa-comment"></i></span>Comment</p>
          <textarea placeholder="Type your memo here…" v-model="todo.comment"></textarea>
        </li>
      </ul>
      <div class="btn">
        <button class="btn-cancel" v-on:click="cancel()">
          <i class="fas fa-times"></i> Cancel
        </button>
        <button class="btn-add" v-on:click="add()">
          <i class="fas fa-times"></i> Add Task
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      addinput: false,
      todo: {
        No: '',
        content: '',
        comment: '',
        complete: false,
        deadlineDate: '',
        deadlineTime: '',
        edit: false,
        file: '',
        important: false
      },
      todoTask: JSON.parse(localStorage.getItem('todoTask')) || []    
    }
  },
  mounted () {
    this.$bus.$on('finishAddTask', this.finishAddTask);
    this.$bus.$on('unfinishAddTask', this.unfinishAddTask);
    this.$bus.$on('editTodoOn', this.editTodoOn);
  },
  methods: {
    finishAddTask (array) {
      const Len = this.todoTask.length;
      const LenArray = array.length;
      this.todoTask.splice(0, Len);
      for (let i = 0; i < LenArray; i++) {
        this.todoTask.push(array[i]);
      }
    },
    unfinishAddTask (array) {
      const Len = this.todoTask.length;
      const LenArray = array.length;
      this.todoTask.splice(0, Len);
      for (let i = 0; i < LenArray; i++) {
        this.todoTask.push(array[i]);
      }
    },
    addTask () {
      this.addinput = !this.addinput;
      this.$bus.$emit('addInputOn', true);
    },
    major () {
      this.todo.important = !this.todo.important;
    },
    cancel () {
      this.addinput = !this.addinput;
      this.todo = {
        No: '',
        content: '',
        comment: '',
        complete: false,
        deadlineDate: '',
        deadlineTime: '',
        edit: false,
        file: '',
        important: false
      }
    },
    add () {
      this.todo.No = this.todoTask.length + 1;
      this.todoTask.push(this.todo);
      localStorage.setItem('todoTask', JSON.stringify(this.todoTask));
      this.$bus.$emit('transferData', this.todoTask);
      this.addinput = !this.addinput;
      this.todo = {
        No: '',
        content: '',
        comment: '',
        complete: false,
        deadlineDate: '',
        deadlineTime: '',
        edit: false,
        file: '',
        important: false
      }
    },
    editTodoOn (boolean) {
      if (this.addinput == boolean) {
        this.cancel ();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap-component {
  font-family: 'Roboto-Medium', 'Avenir', Helvetica, Arial, sans-serif;
  margin-bottom: 24px;
}
button {
  width: 100%;
  height: 65px;
  background: #FFFFFF;
  border: 2px solid #C8C8C8;
  border-radius: 5px;
  font-family: 'Roboto-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 24px;
  color: #C8C8C8;
  padding: 0 31px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
button span {
  font-size: 42px;
  margin-right: 14px;
}
.add-task {
  background: #F2F2F2;
  box-shadow: 0 4px 4px 0 #C8C8C8;
  border-radius: 5px;
}
.task-title {
  height: 76px;
  border-radius: 5px 5px 0 0;
  border-bottom: 2px solid #C8C8C8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
}
.input-title {
  display: flex;
  align-items: center;
  width: 70%;
}
.task-title span {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: #FFFFFF;
  border-radius: 2px;
  margin-right: 16px;
}
.task-title input {
  font-size: 24px;
  background: #F2F2F2;
  border: none;
  width: 89.7%;
}
.task-title i {
  font-size: 24px;
}
.fa-star {
  margin-right: 32px;
  cursor: pointer;
}
.fas.fa-star {
  color: #F5A623;
  cursor: pointer;
}
.fas.fa-edit {
  color: #4A90E2;
}
.add-task .major {
  background: #FFF2DC;
}
.task-detail {
  padding: 24px 78px 2px 72px;
}
.task-detail li {
  margin-bottom: 22px;
}
.task-detail p {
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}
.task-detail p span {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  margin-right: 7px;
  font-size: 16px;
}
input[type="date"], .attached, textarea {
  margin-left: 25px;
}
.attached {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: #C8C8C8;
  border-radius: 2px;
  cursor: pointer;
}
.attached .fas.fa-times {
  transform: rotate(45deg);
}
textarea {
  width: calc(100% - 25px);
  height: 120px;
}
input, textarea {
  background: #FFFFFF;
  border-radius: 2px;
  border: none;
}
input:focus, textarea:focus {
  box-shadow: 0 0 4px 0 #4A90E2;
}
.btn {
  display: flex;
}
.btn button {
  border: none;
  border-radius: 0; 
  width: 50%;
  height: 60px;
  font-family: 'Roboto-Regular', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 24px;
  display: flex;
  justify-content: center;
}
.btn i {
  margin-right: 14px;
} 
.btn-cancel {
  background: #FFFFFF;
  color: #D0021B;
}
.btn-cancel:hover {
  background: #FDFDFD;
}
.btn-add {
  background: #4A90E2;
  color: #FFFFFF;
}
.btn-add:hover {
  background: #3982D7;
}
.btn-add i {
  transform: rotate(45deg);
}
</style>
