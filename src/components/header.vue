<template>
    <el-header id="indexHeader">
                <div id="headerTitle">
                    江西软件大学-新型图书管理系统
                </div>
                <div id="headerFunction">
                    <router-link to="/Login"><el-button type="primary">系统登录</el-button></router-link>
                    <router-link to="/Work"><el-button type="primary">工作中心</el-button></router-link>
                    <router-link to="/Student"><el-button type="primary">学生信息查询</el-button></router-link>
                    <router-link to="/CNNode"><el-button type="primary">论坛</el-button></router-link>
                    <el-button type="primary">图书信息查询</el-button>
                </div>
    </el-header>
</template>
<script>
export default {
    name:"header",
    data() {
        return {
            message:"图书管理系统"
        }
        
    },
}
</script>
<style scoped>
        #indexHeader{
            background-color: #244152;
        }
        #headerTitle{
            color:white;
            height: 100%;
            width: 400px;
            /* background-color: red; */
            line-height: 60px;
            font-size: 24px;
            font-weight: bolder;
            display: inline-block;
        }
        #headerFunction{
            float:right;
            display:inline-block;
            /* width: 200px; */
            height: 60px;
            /* background-color:green; */
        }
        #headerFunction > .el-button {
            display: inline-block;
            margin-top: 8px;
            background-color: #0a9588;
            border-color:#0a9588;
        }
</style>

