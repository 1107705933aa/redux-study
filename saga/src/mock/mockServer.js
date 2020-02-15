// 使用mockjs提供mock数据
import Mock from "mockjs";
import getList from "./getList";

// 返回接口
export default Mock.mock("/getListData", "post", {
  success: true,
  message: "@cparagraph",
  getList
});
