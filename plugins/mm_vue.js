import $ from 'jquery';
import Vue from 'vue';

let mm = {};
	mm.install = function(Vue, options) {
		var host = "";
		if (options) {
			host = options.host;
		}
		Vue.prototype.getApi = $.http.get;
		Vue.prototype.postApi = $.http.post;
		Vue.prototype.cookie = $.cookie;
	};

export default mm;
