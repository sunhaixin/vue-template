<template>
  <div class='page1'>
    <div>This Page1</div>
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
      console.log('----title', this.title, this.age, this.$store)
    },

    computed: {
      ...mapState({
        title: state => state.page1.title
      })
    },

    methods: {
      ...mapActions({
        changeTitle: 'page1/changeTitle'
      })
    }
  }
</script>