<template>
    <div>
        <el-row style="margin-bottom:20px;margin-top: 30px;">
            <el-button size='small'>上传</el-button>
            <el-button size='small'>刷新</el-button>
            <el-button size='small'>新建文件</el-button>
            <el-button size='small'>新建文件夹</el-button>
        </el-row>
        <el-table
            :data="jobDirs[currentPath]"
            style="width: 100%;">
            <el-table-column
                label="菜单"
                width="300">
                <template slot-scope="scope" v-if="scope.row.name !=='..'">
                    <el-button
                        size="mini">编辑</el-button>
                    <el-button
                        size="mini">重命名</el-button>
                    <el-button
                        size="mini"
                        type="danger">删除</el-button>
                </template>
                <template v-else>

                </template>
            </el-table-column>
            <el-table-column label="文件名">
                <template slot-scope="scope" >
                    <el-link v-if="scope.row.isDir" href="#">{{scope.row.name}}</el-link>
                    <span v-else>{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="大小"
                prop="size">
            </el-table-column>
            <el-table-column
                label="修改时间"
                prop="mTime">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    export default{
        name:'JobWorkSpace',
        data(){
            return{
                currentPath:'',
                jobDirs:{
                    '':[{
                        name:'..',
                        size:'-',
                        mTime:'-',
                        isDir:true
                    },{
                        name:'test.sh',
                        size:'10kb',
                        mTime:'2021-6-20 10:00:00',
                        isDir:false
                    }
                ]
                }
            }
        }
    }
</script>