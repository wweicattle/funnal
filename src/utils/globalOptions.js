import Vue from "vue";
import WebStorageCache from "web-storage-cache";
import { Loading ,Message} from "element-ui";
var wsCache = new WebStorageCache();
Vue.prototype.$Message = Message;
Vue.prototype.wsCache=wsCache;
Vue.prototype.$Loading = Loading;
