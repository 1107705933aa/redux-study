import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionTypes";

const defaultState = {
  inputValue: "write something",
  list: []
};

// state: 指的是原始仓库里的状态。
// action: 指的是action新传递的状态。
export default (state = defaultState, action) => {
  // 深拷贝state
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    // 向仓库返回改变的值
    return newState;
  }

  if (action.type === ADD_ITEM) {
    // 深拷贝state
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    return newState;
  }

  if (action.type === DEL_ITEM) {
    // 深拷贝state
    let newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }

  if (action.type === GET_LIST) {
    // 深拷贝state
    let newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data.list;
    // 把改变的值返回给store
    return newState;
  }

  return state;
};
