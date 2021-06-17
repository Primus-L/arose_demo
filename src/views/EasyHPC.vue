<template>
    <div class="EasyHPC">
      <iframe v-resize="{log:true}" width="100%" frameborder="0" scrolling="auto" src="http://47.105.54.217/accessservice/initauth/9"></iframe>
    </div>
</template>
<style scoped>
    .EasyHPC{
        display: flex;
        min-height: 800px;
    }
</style>
<script>
  export default {
    name: 'EasyHPC',
    mounted(){
      this.$cookies.set('sessionid','tl0og1ln6t74yjhsuymomo00i013t8mz')
    }
    
  }
</script>
  