<template>
    <div>
        <el-row :gutter="20" style="margin-bottom: 20px;">
            <el-col :span="8">
                <el-tag color="white">作业名</el-tag>
                <span>{{jobInfo.jobName}}</span>
            </el-col>
            <el-col :span="8">
                <el-tag color="white">作业类型</el-tag>
                <span>{{jobInfo.jobType}}</span>
            </el-col>
            <el-col :span="8">
                <el-tag color="white">作业简介</el-tag>
                <span>{{jobInfo.jobDescription}}</span>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-tag color="white">提交时间</el-tag>
                <span>{{jobInfo.date}}</span>
            </el-col>
            <el-col :span="8">
                <el-tag color="white">作业集群</el-tag>
                <span>{{jobInfo.cluster}}</span>
            </el-col>
            <el-col :span="8">
                <el-tag color="white">作业状态</el-tag>
                <span>{{jobInfo.jobStatus}}</span>
            </el-col>
        </el-row>
    </div>
</template>
<style scoped>
    .el-tag{
        margin-right: 10px;
    }
</style>
<script>
    export default{
        name:'JobInfoTable',
        data(){
            return{
                jobInfo:{
                    jobName:'test',
                    jobType:'科学计算',
                    jobStatus:'正在执行',
                    date:"2021-6-20 10:00:00",
                    cluster:'天河三号原型机',
                    jobDescription:'这是作业简介'
                }
            }
        }
    }
</script>