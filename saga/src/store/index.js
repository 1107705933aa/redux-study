import { createStore, applyMiddleware, compose } from "redux"; // 引入createStore方法
import reducer from "./reducer";
import mySagas from "./saga";
// import thunk from "redux-thunk"; // 引入thunk
import createSagaMiddleware from "redux-saga"; // 引入saga
const sagaMiddleware = createSagaMiddleware(); // 创建saga插件

// compose增强函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

//------关键代码----start-----------
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
//------关键代码----end-----------

// const enhancer = composeEnhancers(applyMiddleware (thunk));

const store = createStore(reducer, enhancer); // 创建数据存储库
// 运行saga
sagaMiddleware.run(mySagas);
export default store; //暴露方法


