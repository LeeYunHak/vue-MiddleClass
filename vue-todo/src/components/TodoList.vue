<template>
  <div>
      <ul>
        <!-- v-for 돌릴거 in 투두아이템 배열만큼 돌림 v-for를 쓸때는 v-bind:key를 추가해야함  -->
        <li v-for="todoItem in todoItems" v-bind:key="todoItem">
          <!-- 콧수염 괄호로 찍으면 됨 -->
          {{ todoItem }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  // created 뷰 라이프 사이클 중 하나, 뷰 인스턴스가 생성되자마자 호출되는 훅, 생성되는 시점에 이안에 로직이 호출됨 
  created: function(){
    if ( localStorage.length > 0 ) {
      for (var i =0; i <localStorage.length ; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(localStorage.key(i));
        }
        // console.log(localStorage.key(i));
      }
    }
  }
}
</script>

<style>

</style>