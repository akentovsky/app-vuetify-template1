import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.config.productionTip = false

import ru from 'vuetify/es5/locale/ru';

ru.datePicker.itemsSelected = 'Период';

const vuetify = new Vuetify({
	lang: {
		locales: { ru },
		current: 'ru',
		default: "ru"
	}
});

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
