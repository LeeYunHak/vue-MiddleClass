<template>
  <div class="inputBox shadow">
      <!-- v-model : 인풋에 입력된 텍스트값을 동적으로 바로 바로 뷰인스턴스 안에 맵핑하는 역할 -->
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <!-- <button v-on:click="addTodo">add</button> -->
      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
      </span>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo: function(){
      if(this.newTodoItem !==''){
        // 텍스트 체크 진입값 추가 될때 false로 들어가게 끔
        var obj = {completed: false, item: this.newTodoItem};
        // 저장하는 로직
        // localStorage.setItem(키, 벨류)
        // stringify == 오브젝트 스트링 값으로 바꿔줌
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function(){
      this.newTodoItem = ''; //입력하고 나서 입력창 초기화
    }
  }
}
</script>

<style scopred>
input:focus{
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn{
  color: white;
  vertical-align: middle;
}
</style>