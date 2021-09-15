import Vue from "vue";
import WebStorageCache from "web-storage-cache";
import { Loading } from "element-ui";
var wsCache = new WebStorageCache();
Vue.prototype.wsCache=wsCache;
Vue.prototype.$Loading = Loading;
