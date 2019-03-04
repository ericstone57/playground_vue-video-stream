import Vue from 'vue'
import Router from 'vue-router'
import VideoSwiper from './pages/VideoSwiper.vue'
import Video10 from './pages/Video10.vue'
import VideoBack from './pages/VideoBack.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/videoswiper',
            component: VideoSwiper
        },
        {
            path: '/video10/:time',
            component: Video10 
        },
        {
            path: '/videoBack/:time',
            component: VideoBack
        }
    ]
})