<template>
    <div v-if="pwd" >
        <div v-if="!res.isPWD" class="w-4/12 mx-auto mt-40">
            <p class="text-slate-500 text-base my-2">输入密码可见</p>
            <el-row :gutter="10">
                <el-col :span="18">
                    <el-input v-model="input" type="password" placeholder="Please input password" show-password />
                </el-col>
                <el-col :span="6">
                    <el-button type="primary" @click="getPost">验证密码</el-button>
                </el-col>
            </el-row>
        </div>
        <div v-else>
            <Article :data="res.data"></Article>
        </div>
    </div>
    <div v-else>
        <Article :data="res.data"></Article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pwd: '',
            input: '',
            api: '',
            id: 0,
            res: {
                msg: '',
                code: 0,
                data: {},
                isPWD: false
            }
        }
    },
    methods: {
        getPost() {

            fetch(`${this.api}article/one?id=${this.id}&password=${this.input}`).then(Resopnse => {
                if (Resopnse.ok) {
                    return Resopnse.json()
                }
            }).then(res => {
                
                if(res.code == 403){
                    ElMessage.error('密码错误!')
                }else if(res.code == 200){
                    this.res.data = res.data
                    this.res.code = res.code
                    this.res.msg = res.msg
                    this.res.isPWD = true
                }
               
                // this.res.msg, this.res.code, this.res.data = {...res}
                
            })
        }
    },
    created() {
        this.id = this.$route.params.id
        this.pwd = JSON.parse(this.$route.query.pwd)
        this.api = useRuntimeConfig().public.apiBase

        if (this.pwd != true) {
            fetch(`${this.api}article/one?id=${this.id}`).then(Resopnse => {
                if (Resopnse.ok) {
                    return Resopnse.json()
                }
            }).then(res => {
                this.res.data = res.data
            })
        }
    }
}
</script>

<style scoped></style>