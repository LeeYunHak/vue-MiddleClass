<template>
  <div>
      <ul>
        <!-- v-for 돌릴거 in 투두아이템 배열만큼 돌림 v-for를 쓸때는 v-bind:key를 추가해야함  -->
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
          <!-- 콧수염 괄호로 찍으면 됨 -->
          {{ todoItem }}
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fas fa-trash-alt"></i>
          </span>
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
  methods: {
    removeTodo: function(todoItem, index){
      console.log(todoItem,index);
      // 로컬스토리지에 있는 항목 삭제 api
      localStorage.removeItem(todoItem);
      // js 배열 api splice 특정 인덱스에서 하나를 지울 수 있다.
      // 변경해서 새로운 배열은 반환
      this.todoItems.splice(index, 1);
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
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn{
  margin-left: auto;
  color: #b3adad;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted{
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
</style>