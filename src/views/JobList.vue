<template>
    <div class="jobList">
        <CreateJobButton @addJob="addJob"></CreateJobButton>
        <el-table 
            :data="jobList" 
            tooltip-effect="dark"
            style="width:100%"
            @selection-change="handleSelectionChange"
            :border="true"
            ref="jobListTable">
            <el-table-column
                type="selection"
                width="50">
            </el-table-column>
            <el-table-column
                label = "作业名"
                prop = "jobName"
                :resizable="false"
                :show-overflow-tooltip="true">
                <template slot-scope="scope">
                    <router-link :to="{name:'JobInfo',params:{jobId:scope.row.jobId}}">{{scope.row.jobName}}</router-link>
                </template>
            </el-table-column>
            <el-table-column
                v-for="head in tableHead" 
                :label="head.label" 
                :prop="head.prop"
                :key="head.prop"
                :show-overflow-tooltip="true"
                :resizable="false">
                
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<style scoped>
    
</style>
<script>
    import CreateJobButton from '@/components/CreateJobButton.vue'
    export default{
        name:'JobList',
        data(){
            return{
                jobList:[{
                    jobId:0,
                    jobName:'test',
                    jobType:'科学计算',
                    jobStatus:'正在执行',
                    date:"2021-6-20 10:00:00",
                }],
                tableHead:[{
                    label:'作业类型',
                    prop:'jobType'
                },{
                    label:'运行状态',
                    prop:'jobStatus'
                },{
                    label:'创建时间',
                    prop:'date'
                }],
                selection:[],
            }
        },
        mouted(){

        },
        methods:{
            getTime(){
                var date = new Date();//当前时间
                var month = date.getMonth() + 1;//月
                var day = date.getDate();//日
                var hour = date.getHours();//时
                var minute = date.getMinutes();//分
                var second = date.getSeconds();//秒
                //当前时间
                var curTime = date.getFullYear() + "-" + month + "-" + day
                        + " " + hour + ":" + minute + ":" + second;
                return curTime;
            },
            handleSelectionChange(val){
                this.selection = val;
                console.log(val);
            },
            handleDelete(index,row){
                console.log(index,row);
                this.jobList.splice(index,1);
            },
            addJob(job){
                var newJob = {}
                newJob['jobName'] = job.name;
                newJob['jobType'] = job.type;
                newJob['jobStatus'] = '等待上传文件';
                newJob['jobId'] = 1;
                newJob['date'] = this.getTime();
                this.jobList.push(newJob);
            },
            getJobHref(jobId){
                return "/jobsubmit/"+jobId;
            }
        },
        components:{
            CreateJobButton,
        }
    }
</script>