<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo : function() {
      // 로컬스토리지에 모든 데이터 지우는 api
      localStorage.clear();
    }
  }
}
</script>
// scoped 해당 컴포넌트에만 적용되는 것
<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn{
  color: #e20303;
  display: block;
}
</style>