<template>
    <div class="EasyHPC">
      <iframe v-resize="{log:true}" width="100%" frameborder="0" scrolling="yes" src="https://easyhpc.net/course"></iframe>
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
  }
</script>
  