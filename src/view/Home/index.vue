<template>
  <div class='home'>
    <div>首页</div>
    <div>测试 vuex： {{testText}}</div>
    <button class='btn' v-on:click='changeTitle(new Date().toLocaleString())'>click</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Home',

  data () {
    return {
      
    }
  },

  mounted () {

  },

  computed: {
    ...mapState({
      testText: state => state.global.testText
    })
  },

  methods: {
    ...mapActions({
      changeTitle: 'global/changeTestText'
    })
  }
}
</script>

<style lang='scss' scoped>
  .btn {
    font-size: 14px;
  }
</style>