<template>
    <div class="EasyHPC">
      <iframe v-resize="{log:true}" width="100%" frameborder="0" scrolling="auto" src="https://easyhpc.net/"></iframe>
    </div>
</template>
<style>
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
  