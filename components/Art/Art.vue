<template>
    <section class="flex mb-10 pl-4" v-for="(item, index) in data" :key="index">
        <article class="w-9/12">
            <h2 class="text-xl font-black mb-4"><NuxtLink :to="`art/${item.id}?${item.opt.auth == 'password'? 'pwd=true' : ''}`">{{ item.title }}</NuxtLink></h2>
            <p class="w-11/12 text-sm tracking-wider text-slate-600 text-justify"><NuxtLink  :to="`art/${item.id}`">{{ item.description }}</NuxtLink></p>
            <div class="mt-4 text-sm" v-for="sort in item.expand['sort']"><NuxtLink :to="`art/${sort.id}`" class="font-black text-rose-700">{{ sort.name }}</NuxtLink> · {{ timeDate(item.create_time) }}</div>
        </article>
        <div class="w-3/12">
            <NuxtLink :to="`art/${item.id}`">
                <img class="w-3/4 mx-auto rounded shadow-lg" :src="item.img_src" alt="">
            </NuxtLink>
        </div>
    </section>
</template>

<script>
export default{
    props:["data"],
    data(){
        return {
            
        }
    },

    methods: {
        timeDate(items){
            const now = new Date()
            const nowYear = now.getFullYear()
            const nowMonth = now.getMonth()+1
            const nowDay = now.getDay()
            
            const create_time = new Date(Date.parse(items))
            const createYear = create_time.getFullYear()
            const createMonth = create_time.getMonth()+1
            const createDay = create_time.getDay()
            
            if(nowYear == createYear){
                let month = nowMonth - createMonth

                if(month > 1){
                    return '大于1'
                }else{
                   let day = nowDay - createDay
                   
                   switch (day) {
                    case 0:
                        return '今天'
                        break;
                    
                    case 1:
                        return '昨天'
                        break;
                    case 2:
                        return '前天'
                        break;
                    default:
                        return day+'天前'
                        break;
                   }
                   return items
                }
            }
        }
    }
}
</script>

<style scoped>
h2:hover{
    color: #e43939
}
</style>