<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  /* data(){
     return {
       todoItems: []
     }
   },
   methods: {
     addOneItme(todoItem){
        텍스트 체크 진입값 추가 될때 false로 들어가게 끔
         const obj = {completed: false, item: todoItem};
          저장하는 로직
          localStorage.setItem(키, 벨류)
         localStorage.setItem(todoItem, JSON.stringify(obj));
         push 배열 맨 끝에 배열요소 추가
         this.todoItems.push(obj);
     },
     removeOneItem(todoItem, index){
        로컬스토리지에 있는 항목 삭제 api
       localStorage.removeItem(todoItem.item);
        js 배열 api splice 특정 인덱스에서 하나를 지울 수 있다.
        변경해서 새로운 배열은 반환
       this.todoItems.splice(index, 1);
     },
     toggleOneItem(todoItem,index){
        todoItem.completed = !todoItem.completed;
        넘겨온 todo 배열의 해당 index의 completd값에 접근 해서 바꾸기 윗라인 과 아래라인이 같은 동작을 하지만 아랫줄이 컴포넌트 간의 경계를 명확하게 함
       this.todoItems[index].completed = !this.todoItems[index].completed;
        로컬 스토리지 데이터 갱신 부분 삭제하고
       localStorage.removeItem(todoItem.item);
        다시 저장
       localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
     },
     clearAllItems(){
        로컬스토리지에 모든 데이터 지우는 api
       localStorage.clear();
       this.todoItems = [];
     }
   },
   created 뷰 라이프 사이클 중 하나, 뷰 인스턴스가 생성되자마자 호출되는 훅, 생성되는 시점에 이안에 로직이 호출됨 */
  
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}

input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
