<template>
    <div class="container">
      <video-player class="video-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"
        @ready="playerReadied"
        @timeupdate="onPlayerTimeupdate($event)">
      </video-player>
      <swiper class="swiper-box"
        ref="mySwiper"
        :options="swiperOption">
          <swiper-slide>0s</swiper-slide>
          <swiper-slide>3s</swiper-slide>
          <swiper-slide>6s</swiper-slide>
          <swiper-slide>9s</swiper-slide>
    </swiper>
    </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import 'swiper/dist/css/swiper.css'
import { videoPlayer } from 'vue-video-player'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    videoPlayer,
    swiper,
    swiperSlide
  },
  data () {
    return {
      playerOptions: {
        muted: true,
        language: 'en',
        autoplay: true,
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: 'https://grizzly.oss-cn-shanghai.aliyuncs.com/test/video.mp4'
        }]
      },
      swiperOption: {}
    }
  },
  mounted() {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    },
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    },
    onPlayerTimeupdate(player) {
      if (player.currentTime() >= 2.5) {
        this.swiper.slideTo(1, 500, false)
      } 
      if (player.currentTime() >= 5.5) {
        this.swiper.slideTo(2, 500, false)
      }
      if (player.currentTime() >= 8.5) {
        this.swiper.slideTo(3, 500, false)
      }
    }
  }
}
</script>

<style>
.container {
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.swiper-box {
  width: 1000px;
  margin-top: 50px;
}
.swiper-slide {
  width: 1000px;
  height: 300px;
  background: pink;
  line-height: 300px;
  font-size: 50px;
}
</style>

