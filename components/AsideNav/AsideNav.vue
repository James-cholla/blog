<template>
    <nav class="mx-auto flex justify-center flex-col content-center flex-wrap mt-4">
        <NuxtLink class="relative" :to="item.link" v-for="(item, index) in nav" :key="index">
            <Icons class="icon rounded-md mt-4 w-9 h-9 inline-block text-center " :icon="item.icon" :size="item.size" :color="item.color" :hoverColor="item.hoverColor"></Icons>
            <span class="inline-block absolute rounded-md right-12 w-14 py-0.5 text-center">{{ item.text }}</span>
        </NuxtLink>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            nav: [
                {
                    link: '/about',
                    text: '关于我',
                    icon: 'incognito',
                    color: '#3e3e3e',
                    size: 20,
                    hoverColor: '#FFF'
                },
                {
                    link: '/book',
                    text: '图书',
                    icon: 'book-half',
                    color: '#3e3e3e',
                    size: 18,
                    hoverColor: '#FFF'
                },
                {
                    link: '/album',
                    text: '相册',
                    icon: 'image-fill',
                    color: '#3e3e3e',
                    size: 18,
                    hoverColor: '#FFF'
                },
                {
                    link: '/video',
                    text: '视频',
                    icon: 'collection-play-fill',
                    color: '#3e3e3e',
                    size: 18,
                    hoverColor: '#FFF'
                },
                {
                    link: '/github',
                    text: '代码库',
                    icon: 'github',
                    color: '#3e3e3e',
                    size: 18,
                    hoverColor: '#FFF'
                }
            ]
        }
    },
    created() {

    }
}
</script>

<style scoped>
.icon{
    line-height: 37px;
}
.icon:hover{
    background: var(--bg-color);
}

span{
    background: var(--bg-color);
    padding-top: 4px;
    padding-bottom: 4px;
    font-size: 13px;
    color: #fff;
    display: none;
    top: 1.3rem
}

.icon:hover + span{
    display: block;
}
</style>