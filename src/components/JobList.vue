<template>
    <div class="jobList">
        <CreateJobButton></CreateJobButton>
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
    import CreateJobButton from '../components/CreateJobButton.vue'
    export default{
        name:'JobList',
        data(){
            return{
                jobList:[{
                    jobName:'test',
                    jobType:'科学计算',
                    jobStatus:'running',
                    date:new Date().getDate(),
                }],
                tableHead:[{
                    label:'作业名',
                    prop:'jobName'    
                },{
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
            handleSelectionChange(val){
                this.selection = val;
                console.log(val);
            },
            handleDelete(index,row){
                console.log(index,row);
                this.jobList.splice(index,1);
            }
        },
        components:{
            CreateJobButton,
        }
    }
</script>