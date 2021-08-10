<template>
  <div>
      <!-- v-model : 인풋에 입력된 텍스트값을 동적으로 바로 바로 뷰인스턴스 안에 맵핑하는 역할 -->
      <input type="text" v-model="newTodoItem">
      <button v-on:click="addTodo">add</button>
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
      console.log(this.newTodoItem);
      // 저장하는 로직
      // localStorage.setItem(키, 벨류)
      localStorage.setItem(this.newTodoItem, this.newTodoItem)

      this.newTodoItem = ''; //입력하고 나서 입력창 초기화
    }
  }
}
</script>

<style>

</style>