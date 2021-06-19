
<template>
    <el-button @click="create">新建作业</el-button>
</template>
<script>
    /* eslint-disable */
    import CreateJobForm from './CreateJobForm.vue'
    export default{
        name:'CreateJobButton',
        components:{
            CreateJobForm,
        },
        data(){
            return{
                sub_status:false,
            }
        },
        methods:{
            create(){
                const h = this.$createElement;
                this.$msgbox({
                    title:'新建作业',
                    message:h('CreateJobForm',{ref:'CreateJobForm',on:{setSubStatus:'setSubStatus'}}),
                    showCancelButton: true,
                    confirmButtonText:'确定',
                    cancelButtonText:'取消',
                    beforeClose:(action,instance,done)=>{
                        if(action === 'confirm'){
                            instance.confirmButtonLoading = true;
                            instance.confirmButtonText = '提交中..';
                            this.sub_status = false;
                            this.$refs.CreateJobForm.submitForm();
                            if(this.sub_status)
                                done();
                            else
                                instance.confirmButtonText = '确定'
                            instance.confirmButtonLoading = false;
                        }
                        else{
                            done();
                            this.$refs.CreateJobForm.resetForm();
                        }
                        
                    }
                })
            },
            setSubStatus(status){
                this.sub_status = status
            }
        }
    }
</script>