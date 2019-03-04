<template>
  <div id="app">
    <HelloWorld msg="Welcome!"/>
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :options="playerOptions"
      :playsinline="true"
      @ready="playerReadied">
  </video-player>
  </div>
</template>

<script>
/* eslint-disable no-console */
import HelloWorld from './components/HelloWorld.vue'
import 'video.js/dist/video-js.css'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      playerOptions: {
        // videojs options
        sources: [{
          withCredentials: false,
          type: "application/x-mpegURL",
          src: "http://live.e0x233.com/test/stream.m3u8?auth_key=1550478198-0-0-fb8052a6c0a6d887668f414bd87f5cf1"
        }],       
        language: 'zh-CN',
        live: true,
        autoplay: true,
        muted: true,
        controls: true,
        preload: 'auto',
        aspectRatio: '16:9',
        fluid: true,
        width: document.documentElement.clientWidth
      }
    }
  },
  mounted() {
    console.log('this is current player instance object', this.player)
    console.log(this.playerOptions)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      
      console.log('player play!', player)
    },
    onPlayerPause(player) {
      console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
      // var hls = player.tech({ IWillNotUseThisInPlugins: true }).hls
      // player.tech_.hls.xhr.beforeRequest = function(options) {
        // console.log(options)
        // return options
      // }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
