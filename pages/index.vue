<template>
    <Art :data="data"></Art>
</template>

<script>
export default{
    data(){
        return {
            data:[]
        }
    },
    created(){
        let api =  useRuntimeConfig().public.apiBase
        fetch(`${api}article/all`).then(Response=>{
            if(Response.ok){
                return Response.json()
            }
        }).then(res=>{
            this.data = res.data.data
        })
    }
}
</script>

<style>

</style>