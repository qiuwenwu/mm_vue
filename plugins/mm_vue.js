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
	Vue.filter('double', function (value) {
		return parseFloat(value).toFixed(2)
	})
};

Vue.mixin(Vue.extend(
{
	methods:{
		$lang: function(key){
			return this.$store.state.lang.dict[key];
		}
	}
}));
export default mm;
