<template>
  <div class="nav-bar">    
    <window-state class="state" style="-webkit-app-region: no-drag;"></window-state>
  </div>
</template>

<script>
import WindowState from './components/WindowState'
export default {
  name: '',
  components: {
    WindowState
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar{
  display: block;
}
.state{
  height: 46px;
  line-height: 46px;
}
</style>
