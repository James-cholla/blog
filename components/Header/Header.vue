<template>
    <header>
        <nav class="flex pt-6 pl-4">
            <NuxtLink :class="`mr-4 navBar  ${curIndex == index ? 'hover shadow-md' : ''} `" :to="item.link" v-for="(item, index) in nav" :key="index" @click="fun(index)">{{ item.text }}</NuxtLink>
        </nav>
    </header>
</template>
    
<script>

export default {
    data() {
        return {
            nav: [
                {
                    text: '首页',
                    link: '/'
                },
                {
                    text: '生活',
                    link: '/category/4'
                },
                {
                    text: '技术',
                    link: '/category/5'
                },
                {
                    text: '其他',
                    link: '/category/6'
                },
                {
                    text: '关于',
                    link: '/about'
                }
            ],
            curIndex: 0
        }
    },
    methods:{
        fun(num){
            this.curIndex = num
        }
    }
}
</script>

<style scoped>
.navBar{
    background: transparent;
    padding: 6px 12px;
    border-radius: 40px;
}

.hover,
.navBar:hover{
    background: #e43939;
    color: #fff;
}
</style>