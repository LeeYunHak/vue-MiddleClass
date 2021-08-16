import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          //앞서 인풋에서 스트링으로 변환 시킨걸 다시 obj형으로 바꾸기위해 제이슨 팔스 해줌
          arr.push(
            JSON.parse(localStorage.getItem(localStorage.key(i)))
          );
          // this.todoItems.push(localStorage.key(i));
        }
      }
    }
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItme(state, todoItem){
        // 텍스트 체크 진입값 추가 될때 false로 들어가게 끔
        const obj = {completed: false, item: todoItem};
        // 저장하는 로직
        // localStorage.setItem(키, 벨류)
        localStorage.setItem(todoItem, JSON.stringify(obj));
        //push 배열 맨 끝에 배열요소 추가
        state.todoItems.push(obj);
    }
  }
});
