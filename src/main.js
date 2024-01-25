import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import axios from 'axios'


loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')

console.log("%cim@n47turbo.me", "color: orange; font-style: italic; background-color: blue;padding: 4px; border-radius: 4px; font-size:32px");
