<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <!-- <TodoList v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <TodoList v-bind:propsdata= "todoItems"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data : function(){
    return {
      todoItems: []
    }
  },
  // created 뷰 라이프 사이클 중 하나, 뷰 인스턴스가 생성되자마자 호출되는 훅, 생성되는 시점에 이안에 로직이 호출됨 
  created: function(){
    if ( localStorage.length > 0 ) {
      for (var i =0; i <localStorage.length ; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          //앞서 인풋에서 스트링으로 변환 시킨걸 다시 obj형으로 바꾸기위해 제이슨 팔스 해줌
          this.todoItems.push((JSON.parse(localStorage.getItem(localStorage.key(i)))));
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
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
