<template>
  <div>
    <logo class="logo"></logo>
    <el-menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"      
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item :routes="routes"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import Logo from './components/Logo'
import SidebarItem from './components/SidebarItem'
export default {
  name: '',
  components: {
    Logo,
    SidebarItem
  },
  data () {
    return {}
  },
  computed: {
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: 16rem;
  display: flex;
  align-items: center;
}
.el-menu{
  background-color: inherit;
  border-right: none;
}
</style>
