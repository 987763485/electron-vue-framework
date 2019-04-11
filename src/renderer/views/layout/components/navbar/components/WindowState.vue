<template>
  <div class="state">
    <div class="min" @click="windowMin">
      <svg-icon icon-class="min"></svg-icon>
    </div>
    <div class="max" @click="windowMax">
      <svg-icon icon-class="max"></svg-icon>
    </div>
    <div class="close" @click="windowClose">
      <svg-icon icon-class="close"></svg-icon>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
export default {
  name: '',
  data () {
    return {}
  },
  methods: {
    windowMin () {
      ipcRenderer.send('min')
    },
    windowMax () {
      ipcRenderer.send('max')
    },
    windowClose () {
      ipcRenderer.send('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.state {
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 1000;
  div {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    padding: 2px;
    margin: 0 16px;
    color: #707070;
    svg {
      display: block;
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }
}
</style>
