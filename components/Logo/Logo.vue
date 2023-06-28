<template>
<NuxtLink to='/'>
    <img class="w-11 mx-auto mt-8 rounded shadow-md" :src="logoSrc" alt="">
</NuxtLink>
</template>

<script>

export default{
    data(){
        return{
            logoSrc: ''
        }
    },
    created() {
        let config =  useRuntimeConfig()
        fetch(`${config.public.apiBase}users/one?id=2`).then(Response=>{
            if(Response.ok){
                return Response.json()
            }
        }).then(res=>{
            let img = new Image()
            img.src = res.data.head_img
            this.logoSrc = img.src
        }).catch(err=>{
            
        })
    },
}
</script>
