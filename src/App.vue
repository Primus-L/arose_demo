<template>
  <el-container id="app">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header,
  }
}
</script>

<style scoped>
.el-main{
    width: 60%;
    margin: 20px auto 0 auto;
  }
</style>
