import React from "react";
import { connect } from "react-redux"; // 引入连接器

const TodoList = (props) => {
  // 解构函数
  let { inputValue, handleChange, clickBtn, list } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleChange} />
        <button onClick={clickBtn}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => {
          return <li key={index}> {item}</li>;
        })}
      </ul>
    </div>
  );
};

// 制作映射关系stateProps
const stateProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

// 制作映射关系DispatchToProps
const dispatchToProps = dispatch => {
  return {
    handleChange(e) {
      // console.log(e.target.value);
      let action = {
        type: "change_input",
        value: e.target.value
      };
      dispatch(action);
    },
    clickBtn() {
      // console.log(1111);
      let action = { type: "add_item" };
      dispatch(action);
    }
  };
};

export default connect(stateProps, dispatchToProps)(TodoList);
