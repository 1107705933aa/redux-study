import React, { Component } from "react";
import store from "./store";
import {
  getList,
  changeInputAction,
  addItemAction,
  delItemAction
} from "./store/actionCreator";
import TodoListUI from "./TodoListUI";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);
    this.delItem = this.delItem.bind(this);
    this.addItem = this.addItem.bind(this);
    // 让组件发生更新
    this.storeChange = this.storeChange.bind(this);
    // 订阅redux的状态
    store.subscribe(this.storeChange);
  }

  componentDidMount() {
    // 修改前
    // axios.post("/getListData").then(res => {
    //   let data = res.data.getList.data;
    //   const action = getListAction(data);
    //   store.dispatch(action);
    // });
    // 修改后
    const action = getList();
    store.dispatch(action);
  }

  storeChange() {
    this.setState(store.getState());
  }

  changeInputValue(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }

  addItem() {
    const action = addItemAction();
    store.dispatch(action);
  }

  delItem(index) {
    const action = delItemAction(index);
    store.dispatch(action);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        changeInputValue={this.changeInputValue}
        addItem={this.addItem}
        delItem={this.delItem}
      />
    );
  }
}

export default TodoList;
