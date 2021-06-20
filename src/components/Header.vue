<template>
    <el-row type="flex">
        <el-col :span="5" :offset="5">
                <el-link :underline="false" style="font-size:18px;">
                    <el-image :src=logo_url fit="contain"></el-image>
                    Arose demo
                </el-link>
        </el-col>
        <el-col :span="9">
            <el-menu :default-active="this.$route.path"  mode="horizontal" :router=true>
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/easyhpc" >超算习堂</el-menu-item>
                <el-menu-item index="/appcenter">资源中心</el-menu-item>
                <el-menu-item index="/jobsubmit">作业提交</el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<style scoped>
    .el-image{
        max-width: 50px;
        height: auto;
    }
    .el-col:first-child{
        border-bottom: solid 1px #e6e6e6;
    }
</style>
<script>
    export default{
        name:"Header",
        data(){
            return{
                logo_url:require("@/assets/logo-plugin.png"),
            };
        },
        mounted(){
            console.log(this.$route.path)
        }
    
    }
</script>

