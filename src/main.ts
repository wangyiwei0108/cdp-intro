import './style/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'

library.add(faEarthAmericas, faFaceSmile)

import App from './App.vue'
import router from './router'
import i18n from './././locales/index'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.mount('#app')
