import Vue from "vue";
import _axios from "./axios"

let getUserUrl;
if (process.env.NODE_ENV == "development") {
  getUserUrl = "/stockOrder.ashx";
} else {
  getUserUrl = "http://tm.lilanz.com/oa/project/rst2/stockOrder.ashx";
}



// 获取用户信息
export function getUserInfo(token) {
  let api = getUserUrl + "?action=getSession&token=" + token
  return _axios.get(api);
}
