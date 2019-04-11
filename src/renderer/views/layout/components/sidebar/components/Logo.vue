<template>
  <div>
    <div class="logo-box">
      logo     
      <!-- <img src="@/assets/logo.png"> -->
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.logo-box {
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: #fff;
  img {
    width: 50%;
    height: 50%;
  }
}
</style>
