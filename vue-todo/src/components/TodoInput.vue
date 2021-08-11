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
        // this.$emit('이벤트이름', 인자1, 인자2, ...)
        this.$emit('addTodoItem', this.newTodoItem)
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
  cursor: pointer;
}
</style>