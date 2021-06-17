
<template>
    <div class="SHCS">
      <iframe  id='appcenter' width="100%" frameborder="0" scrolling="yes" src="http://xfinity.net.cn:28080/appCenter.jsp"></iframe>
    </div>
</template>
<style scoped>
    .SHCS{
        display: flex;
        min-height: 800px;
    }
</style>
<script>
  export default {
    name: 'SHCS',
    mounted() {
      let iframe = document.getElementsByTagName('iframe')[0];
      iframe.onload = function(){
          
          console.log('complete')
      };
  },
  }
  
</script>
  