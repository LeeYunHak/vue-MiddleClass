<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo : function() {
      this.$emit('clearAll')
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
  cursor: pointer;
}
</style>