import { takeEvery, put } from "redux-saga/effects";
import { GET_MY_LIST } from "./actionTypes";
import axios from "axios";
import { getListAction } from "./actionCreator";

// generator函数
function* mySaga() {
  // 等待捕获的action
  yield takeEvery(GET_MY_LIST, getList);
}

function* getList() {
  // console.log('wangyanqiu');  // 判断捕获到没

  // 下面注释的代码不能执行，必须根据generator函数翻译出来
  // axios.post("/getListData").then(res => {
  //   let data = res.data.getList.data;
  //   const action = getListAction(data);
  //   store.dispatch(action);
  // });

  // 翻译
  const res = yield axios.post("/getListData");
  const action = getListAction(res.data.getList.data);
  yield put(action);
}

export default mySaga;
