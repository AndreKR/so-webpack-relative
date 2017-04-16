import Vue from 'vue';
import App from '../vue/app.vue';

new Vue({
		el: '#mountpoint',
		render: function (h) {
			return h(App);
		}
});
