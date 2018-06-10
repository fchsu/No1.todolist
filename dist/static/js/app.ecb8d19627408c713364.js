webpackJsonp([0],{"6WHL":function(t,s){},GOQt:function(t,s){},JSty:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=a("7+uW"),e=a("mvHQ"),n=a.n(e),i={name:"AddTask",data:function(){return{addinput:!1,todo:{No:"",content:"",comment:"",complete:!1,deadlineDate:"",deadlineTime:"",edit:!1,file:"",important:!1},todoTask:JSON.parse(localStorage.getItem("todoTask"))||[]}},mounted:function(){this.$bus.$on("finishAddTask",this.finishAddTask),this.$bus.$on("unfinishAddTask",this.unfinishAddTask),this.$bus.$on("editTodoOn",this.editTodoOn)},methods:{finishAddTask:function(t){var s=this.todoTask.length,a=t.length;this.todoTask.splice(0,s);for(var o=0;o<a;o++)this.todoTask.push(t[o])},unfinishAddTask:function(t){var s=this.todoTask.length,a=t.length;this.todoTask.splice(0,s);for(var o=0;o<a;o++)this.todoTask.push(t[o])},addTask:function(){this.addinput=!this.addinput,this.$bus.$emit("addInputOn",!0)},major:function(){this.todo.important=!this.todo.important},cancel:function(){this.addinput=!this.addinput,this.todo={No:"",content:"",comment:"",complete:!1,deadlineDate:"",deadlineTime:"",edit:!1,file:"",important:!1}},add:function(){this.todo.No=this.todoTask.length+1,this.todoTask.push(this.todo),localStorage.setItem("todoTask",n()(this.todoTask)),this.$bus.$emit("transferData",this.todoTask),this.addinput=!this.addinput,this.todo={No:"",content:"",comment:"",complete:!1,deadlineDate:"",deadlineTime:"",edit:!1,file:"",important:!1}},editTodoOn:function(t){this.addinput==t&&this.cancel()}}},d={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wrap-component"},[0==t.addinput?a("button",{on:{click:function(s){t.addTask()}}},[a("span",[t._v("+")]),t._v("Add Task")]):t._e(),t._v(" "),1==t.addinput?a("div",{staticClass:"add-task"},[a("div",{staticClass:"task-title",class:{major:t.todo.important}},[a("div",{staticClass:"input-title"},[a("span"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.content,expression:"todo.content"}],class:{major:t.todo.important},attrs:{type:"text",placeholder:"Type Something Here…"},domProps:{value:t.todo.content},on:{input:function(s){s.target.composing||t.$set(t.todo,"content",s.target.value)}}})]),t._v(" "),a("div",[0==t.todo.important?a("i",{staticClass:"far fa-star",on:{click:function(s){t.major()}}}):t._e(),t._v(" "),1==t.todo.important?a("i",{staticClass:"fas fa-star",on:{click:function(s){t.major()}}}):t._e(),t._v(" "),a("i",{staticClass:"fas fa-edit"})])]),t._v(" "),a("ul",{staticClass:"task-detail"},[a("li",[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.deadlineDate,expression:"todo.deadlineDate"}],attrs:{type:"date"},domProps:{value:t.todo.deadlineDate},on:{input:function(s){s.target.composing||t.$set(t.todo,"deadlineDate",s.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.deadlineTime,expression:"todo.deadlineTime"}],attrs:{type:"time"},domProps:{value:t.todo.deadlineTime},on:{input:function(s){s.target.composing||t.$set(t.todo,"deadlineTime",s.target.value)}}})]),t._v(" "),t._m(1),t._v(" "),a("li",[t._m(2),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todo.comment,expression:"todo.comment"}],attrs:{placeholder:"Type your memo here…"},domProps:{value:t.todo.comment},on:{input:function(s){s.target.composing||t.$set(t.todo,"comment",s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"btn"},[a("button",{staticClass:"btn-cancel",on:{click:function(s){t.cancel()}}},[a("i",{staticClass:"fas fa-times"}),t._v(" Cancel\n      ")]),t._v(" "),a("button",{staticClass:"btn-add",on:{click:function(s){t.add()}}},[a("i",{staticClass:"fas fa-times"}),t._v(" Add Task\n      ")])])]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[s("i",{staticClass:"far fa-calendar-alt"})]),this._v("Deadline")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("span",[s("i",{staticClass:"far fa-file"})]),this._v("File")]),this._v(" "),s("span",{staticClass:"attached"},[s("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[s("i",{staticClass:"far fa-comment"})]),this._v("Comment")])}]};var c={name:"App",data:function(){return{color:["#ffffff","#00408B","#00408B"]}},components:{AddTask:a("VU/8")(i,d,!1,function(t){a("rTTN")},"data-v-4ec09734",null).exports},methods:{colorChange:function(t){this.color.length=0,this.color=["#00408B","#00408B","#00408B"],this.color.splice(t,1,"#ffffff"),this.$bus.$emit("addInputOn",!0),this.$bus.$emit("editTodoOn",!0)}}},r={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("ul",{staticClass:"nav"},[a("li",{on:{click:function(s){t.colorChange(0)}}},[a("router-link",{style:{color:t.color[0]},attrs:{to:"/MyTasks"}},[t._v("My Tasks")])],1),t._v(" "),a("li",{on:{click:function(s){t.colorChange(1)}}},[a("router-link",{style:{color:t.color[1]},attrs:{to:"/InProgress"}},[t._v("In Progress")])],1),t._v(" "),a("li",{on:{click:function(s){t.colorChange(2)}}},[a("router-link",{style:{color:t.color[2]},attrs:{to:"/Completed"}},[t._v("Completed")])],1)]),t._v(" "),a("div",{staticClass:"wrap"},[a("AddTask"),t._v(" "),a("router-view")],1)])},staticRenderFns:[]};var l=a("VU/8")(c,r,!1,function(t){a("tpyX")},null,null).exports,u=a("/ocq"),m={name:"EditTask",data:function(){return{num:this.index,todo:JSON.parse(localStorage.getItem("todoTask"))}},props:{index:null},methods:{major:function(){this.todo[this.num].important=!this.todo[this.num].important},cancel:function(){this.$bus.$emit("cancelEdit",this.num)},Save:function(){this.todo[this.num].edit=!this.todo[this.num].edit;var t={index:this.num,obj:this.todo[this.num]};this.$bus.$emit("saveEdit",t)}}},h={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"add-task"},[a("div",{staticClass:"task-title",class:{major:t.todo[t.num].important}},[a("div",{staticClass:"input-title"},[a("span"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.todo[t.num].content,expression:"todo[num].content"}],class:{major:t.todo[t.num].important},attrs:{type:"text",placeholder:"Type Something Here…"},domProps:{value:t.todo[t.num].content},on:{input:function(s){s.target.composing||t.$set(t.todo[t.num],"content",s.target.value)}}})]),t._v(" "),a("div",[0==t.todo[t.num].important?a("i",{staticClass:"far fa-star",on:{click:function(s){t.major()}}}):t._e(),t._v(" "),1==t.todo[t.num].important?a("i",{staticClass:"fas fa-star",on:{click:function(s){t.major()}}}):t._e(),t._v(" "),a("i",{staticClass:"fas fa-edit"})])]),t._v(" "),a("ul",{staticClass:"task-detail"},[a("li",[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.todo[t.num].deadlineDate,expression:"todo[num].deadlineDate"}],attrs:{type:"date"},domProps:{value:t.todo[t.num].deadlineDate},on:{input:function(s){s.target.composing||t.$set(t.todo[t.num],"deadlineDate",s.target.value)}}}),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.todo[t.num].deadlineTime,expression:"todo[num].deadlineTime"}],attrs:{type:"time"},domProps:{value:t.todo[t.num].deadlineTime},on:{input:function(s){s.target.composing||t.$set(t.todo[t.num],"deadlineTime",s.target.value)}}})]),t._v(" "),t._m(1),t._v(" "),a("li",[t._m(2),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todo[t.num].comment,expression:"todo[num].comment"}],attrs:{placeholder:"Type your memo here…"},domProps:{value:t.todo[t.num].comment},on:{input:function(s){s.target.composing||t.$set(t.todo[t.num],"comment",s.target.value)}}})])]),t._v(" "),a("div",{staticClass:"btn"},[a("button",{staticClass:"btn-cancel",on:{click:function(s){t.cancel()}}},[a("i",{staticClass:"fas fa-times"}),t._v(" Cancel\n    ")]),t._v(" "),a("button",{staticClass:"btn-add",on:{click:function(s){t.Save()}}},[a("i",{staticClass:"fas fa-times"}),t._v(" Save\n    ")])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[s("i",{staticClass:"far fa-calendar-alt"})]),this._v("Deadline")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[s("span",[s("i",{staticClass:"far fa-file"})]),this._v("File")]),this._v(" "),s("span",{staticClass:"attached"},[s("i",{staticClass:"fas fa-times"})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("span",[s("i",{staticClass:"far fa-comment"})]),this._v("Comment")])}]};var f={name:"TodoTask",data:function(){return{todoTask:JSON.parse(localStorage.getItem("todoTask"))||[],doneTask:JSON.parse(localStorage.getItem("doneTask"))||[]}},mounted:function(){this.$bus.$on("transferData",this.transferData),this.$bus.$on("cancelEdit",this.cancelEdit),this.$bus.$on("saveEdit",this.saveEdit),this.$bus.$on("unfinishTodoTask",this.unfinishTodoTask),this.$bus.$on("unfinishDoneTask",this.unfinishDoneTask),this.$bus.$on("addInputOn",this.addInputOn)},components:{EditTask:a("VU/8")(m,h,!1,function(t){a("bCos")},"data-v-696a3afa",null).exports},methods:{transferData:function(t){var s=this.todoTask.length,a=t.length;this.todoTask.splice(0,s);for(var o=0;o<a;o++)this.todoTask.push(t[o])},unfinishTodoTask:function(t){var s=this.todoTask.length,a=t.length;this.todoTask.splice(0,s);for(var o=0;o<a;o++)this.todoTask.push(t[o])},unfinishDoneTask:function(t){var s=this.doneTask.length,a=t.length;this.doneTask.splice(0,s);for(var o=0;o<a;o++)this.doneTask.push(t[o])},addInputOn:function(t){for(var s=this.todoTask.length,a=0;a<s;a++)this.todoTask[a].edit==t&&this.cancelEdit(a)},DoneOrNot:function(t){this.todoTask[t].complete=!this.todoTask[t].complete;var s=this.todoTask.splice(t,1);this.doneTask.push(s[0]);for(var a=this.todoTask.length,o=0;o<a;o++)this.todoTask[o].No=o+1;for(var e=this.doneTask.length,i=0;i<e;i++)this.doneTask[i].No=i+1;localStorage.setItem("todoTask",n()(this.todoTask)),localStorage.setItem("doneTask",n()(this.doneTask)),this.$bus.$emit("finishAddTask",this.todoTask),this.$bus.$emit("finishTodoTask",this.todoTask),this.$bus.$emit("finishDoneTask",this.doneTask)},major:function(t){this.todoTask[t].important=!this.todoTask[t].important,localStorage.setItem("todoTask",n()(this.todoTask))},write:function(t){this.todoTask[t].edit=!this.todoTask[t].edit,this.$bus.$emit("editTodoOn",!0),localStorage.setItem("todoTask",n()(this.todoTask))},cancelEdit:function(t){this.todoTask[t].edit=!this.todoTask[t].edit,localStorage.setItem("todoTask",n()(this.todoTask))},saveEdit:function(t){this.todoTask.splice(t.index,1,t.obj),localStorage.setItem("todoTask",n()(this.todoTask))}}},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"todoList"},[a("ul",t._l(t.todoTask,function(s,o){return a("li",{key:s.No},[0==s.edit?a("div",{staticClass:"todo-list",class:{major:s.important}},[a("div",{staticClass:"title"},[a("div",{staticClass:"input-title"},[a("span",{class:{checkbox:s.complete},on:{click:function(s){t.DoneOrNot(o)}}},[1==s.complete?a("i",{staticClass:"fas fa-check"}):t._e()]),t._v(" "),a("p",[t._v(t._s(s.content))])]),t._v(" "),a("div",[0==s.important?a("i",{staticClass:"far fa-star",on:{click:function(s){t.major(o)}}}):t._e(),t._v(" "),1==s.important?a("i",{staticClass:"fas fa-star",on:{click:function(s){t.major(o)}}}):t._e(),t._v(" "),a("i",{staticClass:"far fa-edit",on:{click:function(s){t.write(o)}}})])]),t._v(" "),a("div",{staticClass:"content"},[""!=s.deadlineDate?a("span",[a("i",{staticClass:"far fa-calendar-alt"}),t._v(t._s(s.deadlineDate))]):t._e(),t._v(" "),""!=s.file?a("span",[a("i",{staticClass:"far fa-file"})]):t._e(),t._v(" "),""!=s.comment?a("span",[a("i",{staticClass:"far fa-comment"})]):t._e()])]):t._e(),t._v(" "),1==s.edit?a("EditTask",{attrs:{index:o}}):t._e()],1)}))])},staticRenderFns:[]};var v=a("VU/8")(f,p,!1,function(t){a("Q49A")},"data-v-4e19bcbf",null).exports,T={name:"DoneTask",data:function(){return{todoTask:JSON.parse(localStorage.getItem("todoTask"))||[],doneTask:JSON.parse(localStorage.getItem("doneTask"))||[]}},mounted:function(){this.$bus.$on("finishDoneTask",this.finishDoneTask),this.$bus.$on("finishTodoTask",this.finishTodoTask)},methods:{finishDoneTask:function(t){var s=this.doneTask.length,a=t.length;this.doneTask.splice(0,s);for(var o=0;o<a;o++)this.doneTask.push(t[o])},finishTodoTask:function(t){var s=this.todoTask.length,a=t.length;this.todoTask.splice(0,s);for(var o=0;o<a;o++)this.todoTask.push(t[o])},DoneOrNot:function(t){this.doneTask[t].complete=!this.doneTask[t].complete;var s=this.doneTask.splice(t,1);this.todoTask.push(s[0]);for(var a=this.todoTask.length,o=0;o<a;o++)this.todoTask[o].No=o+1;for(var e=this.doneTask.length,i=0;i<e;i++)this.doneTask[i].No=i+1;localStorage.setItem("todoTask",n()(this.todoTask)),localStorage.setItem("doneTask",n()(this.doneTask)),this.$bus.$emit("unfinishAddTask",this.todoTask),this.$bus.$emit("unfinishTodoTask",this.todoTask),this.$bus.$emit("unfinishDoneTask",this.doneTask)}}},k={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",t._l(t.doneTask,function(s,o){return a("li",{key:s.No,class:{major:s.important}},[a("div",{staticClass:"input-title"},[a("span",{class:{checkbox:s.complete},on:{click:function(s){t.DoneOrNot(o)}}},[1==s.complete?a("i",{staticClass:"fas fa-check"}):t._e()]),t._v(" "),a("p",[t._v(t._s(s.content))])]),t._v(" "),a("div",{staticClass:"content"},[0==s.important?a("i",{staticClass:"far fa-star"}):t._e(),t._v(" "),1==s.important?a("i",{staticClass:"fas fa-star"}):t._e(),t._v(" "),a("i",{staticClass:"far fa-edit"})])])}))},staticRenderFns:[]};var _=a("VU/8")(T,k,!1,function(t){a("GOQt")},"data-v-54ccd4a3",null).exports,g={name:"MyTasks",data:function(){return{}},components:{TodoTask:v,DoneTask:_}},$={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("TodoTask"),this._v(" "),s("DoneTask")],1)},staticRenderFns:[]};var C=a("VU/8")(g,$,!1,function(t){a("JSty")},"data-v-c0dee5ca",null).exports,b={name:"InProgress",data:function(){return{}},components:{TodoTask:v}},D={render:function(){var t=this.$createElement;return(this._self._c||t)("TodoTask")},staticRenderFns:[]};var N=a("VU/8")(b,D,!1,function(t){a("iFKO")},"data-v-50998219",null).exports,y={name:"Completed",data:function(){return{}},components:{DoneTask:_}},S={render:function(){var t=this.$createElement;return(this._self._c||t)("DoneTask")},staticRenderFns:[]};var x=a("VU/8")(y,S,!1,function(t){a("6WHL")},"data-v-6e42f112",null).exports;o.a.use(u.a);var E=new u.a({routes:[{path:"/MyTasks",name:"MyTasks",component:C},{path:"/InProgress",name:"InProgress",component:N},{path:"/Completed",name:"Completed",component:x}]}),O=(a("R90W"),new o.a);Object.defineProperty(o.a.prototype,"$bus",{get:function(){return this.$root.bus}});var I=O;o.a.config.productionTip=!1,new o.a({el:"#app",data:function(){return{bus:I}},router:E,components:{App:l},template:"<App/>"})},Q49A:function(t,s){},R90W:function(t,s){},bCos:function(t,s){},iFKO:function(t,s){},rTTN:function(t,s){},tpyX:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.ecb8d19627408c713364.js.map