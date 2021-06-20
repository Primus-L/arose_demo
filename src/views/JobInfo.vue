<template>
    <div>
        <el-row style="margin-bottom: 20px;">
            <el-col>
                <el-page-header content="作业信息" @back="back"></el-page-header>
            </el-col>
        </el-row>
        <el-row type="flex">
            <el-button size="small" @click="workspaceVisable = !workspaceVisable">工作目录</el-button>
            <el-button size="small">修改</el-button>
            <el-button size="small">作业提交</el-button>
        </el-row>
        <JobInfoTable></JobInfoTable>
        <JobWorkSpace v-if="workspaceVisable"></JobWorkSpace>
    </div>
</template>
<style scoped>
    .el-row{
        margin-bottom: 20px;
    }
</style>
<script>
    import JobInfoTable from '@/components/JobInfoTable.vue'
    import JobWorkSpace from '@/components/JobWorkSpace.vue'
    export default{
        name:'JobInfo',
        data(){
            return{
                workspaceVisable:false,
            }
        },
        components:{
            JobInfoTable,
            JobWorkSpace
        },
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>