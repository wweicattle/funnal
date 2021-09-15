import Vue from "vue";
import _axios from "./axios"

export function getUerInfo(token) {
  let str = `http://flh.lilanz.com/game/getWXUser?token=${token}`
  return _axios.post(str)
}

