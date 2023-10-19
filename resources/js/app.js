import { createApp } from "vue";
import router from "./router/router.js";
import App from './App.vue';

import 'vuetify/styles'
import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
    // make sure to also import the coresponding css
    import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
    import "@fortawesome/fontawesome-free/css/all.css";
    

const vuetify = createVuetify({
  components,
  directives,
})


const app = createApp(App);
app.use(vuetify,{
  rtl:true,
});
app.use(router);
app.mount('#app');
