<template>
    <div>
        <div>time is {{time}}</div>
        <button @click="onPrev">hit me!</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            time: 0      
        }
    },
    mounted () {
        this.time = this.$route.params.time
    },
    methods: {
        onPrev () {
            this.$router.push({
                path: `/video10/${this.time}`
            })
        }
    }
}
</script>

<style>

</style>
