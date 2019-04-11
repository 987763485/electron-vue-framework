<template>
  <el-container>
    <el-aside style="-webkit-app-region: no-drag;-webkit-user-select: none;">
      <side-bar></side-bar>
    </el-aside>
    <el-container>
      <el-header  style="-webkit-user-select: none;">
        <nav-bar></nav-bar>
      </el-header>
      <el-main style="-webkit-app-region: no-drag;-webkit-user-select: none;">
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { AppMain, NavBar, SideBar } from './components'
export default {
  name: '',
  components: {
    AppMain,
    NavBar,
    SideBar
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-aside {
  width: 16rem !important;
  height: 100vh;
  font-size: 14px;
  background-color: rgb(47, 65, 86);
  z-index: 1;
}
.el-header{
  height: 46px !important;
  padding: 0px;
  // border-bottom: 1px solid #e1e1e1;
  background-color: #f1f1f1;
  box-shadow: 0px -3px 18px 1px #888888;
}
.el-main{
  font-size: 12px;
  overflow: hidden;
  background-color: #ffffff;
  padding: 0px;
  z-index: -1;
}  
</style>
