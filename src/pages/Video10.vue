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

      <button @click="toNext">hit me!</button>
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
      currentTime: 0
    }
  },
  mounted() {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    playerReadied(player) {
      console.log('the player is readied', player)
      player.currentTime(this.$route.params.time)
      // you can use it to do something...
      // player.[methods]
    },
    onPlayerTimeupdate(player) {
        this.currentTime = player.currentTime()
        console.log(this.currentTime)
    },
    toNext() {
        this.$router.push({
            path: `/videoback/${this.currentTime}`
        })
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
</style>

