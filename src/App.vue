<template>
  <router-view/>
</template>
<script>
import { core } from './config/pluginInit'

export default {
  name: 'App',
  components: {
  },
  mounted () {
    core.mainIndex()
  }
}
</script>
<style lang="scss">
  @import "assets/scss/style.scss";
  .img-fluid {
    max-height: 100px !important; /* 图片最大高度为容器高度 */
  }

  .right-sidebar-toggle .setting-toggle{
    display: none;
  }
</style>
