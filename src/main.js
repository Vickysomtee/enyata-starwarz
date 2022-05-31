import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from "moment";

const app = createApp({
    render: ()=>h(App)
});

app.config.globalProperties.moment = moment;

app.use(store).use(router).mount('#app')
