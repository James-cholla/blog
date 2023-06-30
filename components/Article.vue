<template>
    <article>
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>promotion management</el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
       
        <h1 class="text-2xl font-black mt-8 mb-3">{{ data.title }}</h1>
        
        <p class="text-md font-black mb-6"><NuxtLink to="d">{{ data.expand.sort[0].name }}</NuxtLink> · {{ data.create_time }}</p>
         <div class="content text-base" v-html="data.content"></div>
        <div>
            <el-tag class="ml-2" :type="items.color" v-for="items in data.expand.tag"><NuxtLink >{{items.name}}</NuxtLink></el-tag> 
        </div>
    </article>
</template>

<script>
export default {
    props: ["data"],
    data(){
        return {

        }
    }
}
</script>

<style scoped>

</style>