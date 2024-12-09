import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faSearch,
  faChevronLeft,
  faChevronDown,
  faCartShopping,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'

library.add(
  faSearch,
  faChevronLeft,
  faChevronDown,
  faHeart,
  faCartShopping,
  faUser,
  faBars,
  faClose,
)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('fa-icon', FontAwesomeIcon)

app.mount('#app')
