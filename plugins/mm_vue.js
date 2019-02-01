import $ from 'jquery';
import Vue from 'vue';

let mm = {};
mm.host = "",
	mm.install = function(Vue, options) {
		if (options) {
			this.host = options.host;
		}
		Vue.prototype.getApi = function(url, fun) {
			return $.http.get(this.host + url, fun);
		};
		Vue.prototype.postApi = function(url, param, fun) {
			return $.http.post(this.host + url, param, fun);
		};
	};
export default mm;
