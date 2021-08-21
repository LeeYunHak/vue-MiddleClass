const addOneItme = (state, todoItem) => {
  // 텍스트 체크 진입값 추가 될때 false로 들어가게 끔
  const obj = { completed: false, item: todoItem };
  // 저장하는 로직
  // localStorage.setItem(키, 벨류)
  localStorage.setItem(todoItem, JSON.stringify(obj));
  //push 배열 맨 끝에 배열요소 추가
  state.todoItems.push(obj);
};

const removeOneItem = (state, payload) => {
  // 로컬스토리지에 있는 항목 삭제 api
  localStorage.removeItem(payload.todoItem.item);
  // js 배열 api splice 특정 인덱스에서 하나를 지울 수 있다.
  // 변경해서 새로운 배열은 반환
  state.todoItems.splice(payload.index, 1);
};

const toggleOneItem = (state, payload) => {
  // todoItem.completed = !todoItem.completed;
  // 넘겨온 todo 배열의 해당 index의 completd값에 접근 해서 바꾸기 윗라인 과 아래라인이 같은 동작을 하지만 아랫줄이 컴포넌트 간의 경계를 명확하게 함
  state.todoItems[payload.index].completed = !state.todoItems[payload.index]
    .completed;
  // 로컬 스토리지 데이터 갱신 부분 삭제하고
  localStorage.removeItem(payload.todoItem.item);
  // 다시 저장
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
};
const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItme, removeOneItem, toggleOneItem, clearAllItems }
