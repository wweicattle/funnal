import Vue from "vue";
import _axios from "./axios"

export function getAllMenu() {
  let api = "/dev/become?1";
  let params = {
    "router": "jmsp",
    "method": "getMenu",
    "data": {
      "lx": "jm"
    }
  }
  return _axios.post(api,params)
}
