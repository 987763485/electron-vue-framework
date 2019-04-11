<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
  
      }
    },
    computed: {
      key () {
        return this.$route.fullPath
      }
    }
  }
</script>

<style lang="scss" scoped>
.app-main{
  height: calc(100vh - 46px);
  overflow-y: scroll;
}  
</style>
