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

axios.post('https://api.hamwiki.kr/board/iplog.php')
    .then(response => {
    })
    .catch(error => {
    });
                                        
console.log(`%c
██╗  ██╗ █████╗ ███╗   ███╗██╗    ██╗██╗██╗  ██╗██╗
██║  ██║██╔══██╗████╗ ████║██║    ██║██║██║ ██╔╝██║
███████║███████║██╔████╔██║██║ █╗ ██║██║█████╔╝ ██║
██╔══██║██╔══██║██║╚██╔╝██║██║███╗██║██║██╔═██╗ ██║
██║  ██║██║  ██║██║ ╚═╝ ██║╚███╔███╔╝██║██║  ██╗██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚══╝╚══╝ ╚═╝╚═╝  ╚═╝╚═╝                                                  
`, "color:blue");
console.log("%cConsole은 왜 여신거죠?", "color: white; background-color: red;padding: 4px; border-radius: 4px; font-size:30px");
console.log("%chamwiki@protonmail.com", "color: orange; font-style: italic; background-color: blue;padding: 4px; border-radius: 4px; font-size:32px");
