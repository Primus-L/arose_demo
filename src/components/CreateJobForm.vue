<template>
    <el-form :model="ruleForm" :rules="rules" ref="CreateJobForm" label-width="100px">
        <el-form-item label="作业名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="作业描述" prop="description">
            <el-input type="textarea" v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="作业类型" prop="type">
            <el-select v-model="ruleForm.type">
                <el-option label="科学计算" value="科学计算"></el-option>
                <el-option label="物理" value="物理"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="集群" prop="cluster">
            <el-select v-model="ruleForm.cluster">
                <el-option label="Test" value="Test"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
</template>
<script>
    export default{
        name:'CreateJobForm',
        data(){
            return{
                ruleForm:{
                    name:'',
                    description:'',
                    type:'',
                    cluster:''
                },
                rules:{
                    name:[
                        {required:true,message:'请输入作业名称',trigger:'blur'},
                        {min:3,max:30,message:'长度在3到30字符',trigger:'blur'},
                        {pattern:/^[\u4e00-\u9fa5a-zA-Z0-9.-:_~=]+$/,message:'作业名中不允许出现特殊字符',trigger:'blur'}
                    ],
                    description:[
                        {required:true,message:'请输入作业描述',trigger:'blur'}
                    ],
                    type:[
                        {required:true,message:'请选择作业类型',trigger:'change'}
                    ],
                    cluster:[
                        {required:true,message:"请选择集群",trigger:'change'}
                    ]
                }
            }
        },
        methods:{
            submitForm(){
                this.$refs['CreateJobForm'].validate((valid) => {
                   if(valid){
                        console.log('submit!');
                        this.$emit('jobSubmit',{status:true,info:this.ruleForm});
                   } else{
                        //alert('error!');
                        return false;
                   }
                });
            },
            resetForm(){
                this.$refs['CreateJobForm'].resetFields();
            }
        }
    }

</script>