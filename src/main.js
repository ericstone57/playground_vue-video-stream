import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueVideoPlayer from 'vue-video-player'
import 'videojs-contrib-hls'

Vue.use(VueVideoPlayer, {
  options: {
    hls: true
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
