<template>
  <div class="add-task">
    <div class="task-title" :class="{ major: todo[num].important }">
      <div class="input-title">
        <span></span>
        <input type="text" placeholder="Type Something Here…"
          v-model="todo[num].content" :class="{ major: todo[num].important }">
      </div>
      <div>
        <i class="far fa-star" v-on:click="major()" v-if="todo[num].important == false"></i>  <!-- 空心星號 -->
        <i class="fas fa-star" v-on:click="major()" v-if="todo[num].important == true"></i>  <!-- 實心星號 -->
        <i class="fas fa-edit"></i>  <!-- 實心鉛筆 -->
      </div> 
    </div>
    <ul class="task-detail">
      <li>
        <p><span><i class="far fa-calendar-alt"></i></span>Deadline</p>
        <input type="date" v-model="todo[num].deadlineDate">
        <input type="time" v-model="todo[num].deadlineTime">
      </li>
      <li>
        <p><span><i class="far fa-file"></i></span>File</p>
        <span class="attached"><i class="fas fa-times"></i></span>
      </li>
      <li>
        <p><span><i class="far fa-comment"></i></span>Comment</p>
        <textarea placeholder="Type your memo here…" v-model="todo[num].comment"></textarea>
      </li>
    </ul>
    <div class="btn">
      <button class="btn-cancel" v-on:click="cancel()">
        <i class="fas fa-times"></i> Cancel
      </button>
      <button class="btn-add" v-on:click="Save()">
        <i class="fas fa-times"></i> Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditTask",
  data () {
    return {
      num: this.index,
      todo: JSON.parse(localStorage.getItem('todoTask'))  
    }
  },
  props: {
    index: null
  },
  methods: {
    major () {
      this.todo[this.num].important = !this.todo[this.num].important;
    },
    cancel () {
      this.$bus.$emit('cancelEdit', this.num);
    },
    Save () {
      this.todo[this.num].edit = !this.todo[this.num].edit;
      const object = {
        index: this.num,
        obj: this.todo[this.num]
      }
      this.$bus.$emit('saveEdit', object);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  cursor: pointer;
}
.btn-cancel:hover {
  background: #FDFDFD;
}
.btn-add {
  background: #4A90E2;
  color: #FFFFFF;
  cursor: pointer;
}
.btn-add:hover {
  background: #3982D7;
}
.btn-add i {
  transform: rotate(45deg);
}
</style>
