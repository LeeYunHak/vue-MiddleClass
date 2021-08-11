<template>
  <div>
      <ul>
        <!-- v-for 돌릴거 in 투두아이템 배열만큼 돌림 v-for를 쓸때는 v-bind:key를 추가해야함  -->
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="shadow">
          <!-- completed false 면 클래스 명안뜨고 true 면 추가 v-bind:class 동적으로 -->
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
            v-on:click="toggleComplete(todoItem, index)"></i>
          <!-- 콧수염 괄호로 찍으면 됨 -->
          <!-- v-bind : html 속성에 동적인 값을 부여 completed 속성에 따라서 class명 부여함 현재 태그에선 false or true -->
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    removeTodo: function(todoItem, index){
      console.log(todoItem,index);
      // 로컬스토리지에 있는 항목 삭제 api
      localStorage.removeItem(todoItem);
      // js 배열 api splice 특정 인덱스에서 하나를 지울 수 있다.
      // 변경해서 새로운 배열은 반환
      this.todoItems.splice(index, 1);
    },
    toggleComplete : function(todoItem){
      //설정 값 바꾸기 false - > true
      todoItem.completed = !todoItem.completed;
      // 로컬 스토리지 데이터 갱신 부분 삭제하고
      localStorage.removeItem(todoItem.item);
      // 다시 저장
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  
}
</script>

<style scoped>
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