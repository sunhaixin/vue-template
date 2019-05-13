<template>
  <div class='page1'>
    <div>This Home</div>
    <div>{{title}}</div>
    <button class='btn' v-on:click='changeTitle(new Date().toLocaleString())'>click</button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'home',
    data () {
      return {
        age: 20
      }
    },

    mounted () {

    },

    computed: {
      ...mapState({
        title: state => state.home.title
      })
    },

    methods: {
      ...mapActions({
        changeTitle: 'home/changeTitle'
      })
    }
  }
</script>

<style lang='scss' scoped>
  .btn {
    font-size: 14px;
  }
</style>