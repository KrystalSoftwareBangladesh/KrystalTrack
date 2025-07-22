import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import "@/assets/tailwind.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";


const app = createApp(App)

app.use(router)
app.mount('#app')
