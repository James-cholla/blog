<template>
    <Art :data="data[value-1]" ></Art>

    <div class="pages flex">
        <NuxtLink :class="`pg ${value == index+1? 'active': ' '}`" :to="`?pages=${index+1}`" v-for="(item, index) in pages" :key="index" @click="fun(index)">{{ index+1 }}</NuxtLink>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [],
            pages: 0,
            value: 1
        }
    },
    methods: {
        fun(num){
            this.value = num+1
        },
        pagesArr(argArr, len){
            let arr = []
            for (let index = 0; index < argArr.length; index++) {
                arr.push(argArr.slice(this.pages, this.pages+len))
                this.pages += 1
            }
            return arr
        }
    },
    created() {
        
    },
    mounted(){
      
        let api = useRuntimeConfig().public.apiBase
        fetch(`${api}article/all?page=1&limit=100`).then(Response => {
            if (Response.ok) {
                return Response.json()
            }
        }).then(res => {
            const d = res.data.data
            this.data = this.pagesArr(d, 1)
            
        })
        const route = useRoute()
        this.value = route.query.pages == undefined ? 1 : route.query.pages
    }
}
</script>

<style scoped>
.pages .pg{
    display: inline-block;
    padding: 2px 8px;
    background: #e9e9e9;
}

.pages .active{
    background: #4e4e4e;
}
</style>