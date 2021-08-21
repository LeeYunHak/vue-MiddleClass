<template>
  <div>
      <transition-group name="list" tag="ul">
        <!-- v-for 돌릴거 in 투두아이템 배열만큼 돌림 v-for를 쓸때는 v-bind:key를 추가해야함  -->
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
          <!-- completed false 면 클래스 명안뜨고 true 면 추가 v-bind:class 동적으로 -->
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"
            v-on:click="toggleComplete({todoItem, index})"></i>
          <!-- 콧수염 괄호로 찍으면 됨 -->
          <!-- v-bind : html 속성에 동적인 값을 부여 completed 속성에 따라서 class명 부여함 현재 태그에선 false or true -->
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>
      </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    })
  },
  computed: {
    ...mapGetters(['storedTodoItems'])
  }
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
  cursor: pointer;
}
.checkBtn{
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
  cursor: pointer;
}
.checkBtnCompleted{
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
/* lㄹ스트 아이템 트렌지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>