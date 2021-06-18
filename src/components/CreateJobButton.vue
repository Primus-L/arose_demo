<template>
    <el-button @click="create"></el-button>
</template>
<script>
    import CreateJobForm from './CreateJobForm.vue'
    export default{
        name:'CreateJobButton',
        components:{
            CreateJobForm,
        },
        methods:{
            create:function(){
                const h = this.$createElement;
                this.$msgbox({
                    title:'新建作业',
                    message:h('p',null,[
                        h('CreateJobForm',null,null)
                    ]),
                    shouwCancelButton:true,
                    confirmButtonText:'确定',
                    cancelButtonText:'取消',
                })
            }
        }
    }
</script>