import $ from 'jquery';
import Vue from 'vue';

let mm = {};
	mm.install = function(Vue, options) {
		var host = "";
		if (options) {
			host = options.host;
		}
		Vue.prototype.getApi = function(url, fun, headers) {
			return $.http.get(host + url, fun, headers);
		};
		Vue.prototype.postApi = function(url, param, fun, headers) {
			return $.http.post(host + url, param, fun, headers);
		};
	};
export default mm;
