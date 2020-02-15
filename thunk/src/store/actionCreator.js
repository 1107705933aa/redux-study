import { CHANGE_INPUT, ADD_ITEM, DEL_ITEM, GET_LIST } from "./actionTypes";
import axios from "axios";

export const getListAction = data => ({
  type: GET_LIST,
  data
});

export const changeInputAction = value => ({
  type: CHANGE_INPUT,
  value
});

export const addItemAction = () => ({
  type: ADD_ITEM
});

export const delItemAction = index => ({
  type: DEL_ITEM,
  index
});

// 还没调用
export const getList = ()=>{
  return (dispatch)=>{
    axios.post("/getListData").then(res => {
      const data = res.data.getList.data;
      const action = getListAction(data);
      dispatch(action);
    });
  }
}

