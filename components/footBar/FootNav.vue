<template>
    <nav>
        <nuxt-link class="link" :to="item.link"  v-for="(item, index) in nav" :key="index">
            <Icon class="icons" :icon="item.icon" :size="item.iconSize" :color="item.color" :hoverColor="item.hoverColor"></Icon>
            <span>{{ item.title }}</span>
        </nuxt-link>
    </nav>
</template>

<script>

export default{
    data(){
        return {
            nav:[
                {
                    icon: 'incognito',
                    color: '#363636',
                    title: '关于我',
                    link: '/',
                    hoverColor: '#fff',
                    iconSize: 1.5,
                },
                {
                    icon: 'archive-fill',
                    color: '#363636',
                    title: '日记本',
                    link: '/',
                    iconSize: 1.2,
                    hoverColor: '#fff'
                },
                {
                    icon: 'book-half',
                    color: '#363636',
                    title: '图书馆',
                    link: '/',
                    hoverColor: '#fff'
                },
            ]
        }
    },
    methods:{

    }
}

</script>

<style scoped>
nav{
    display: flex;
    position: absolute;
    bottom: 0;
}

.link{
    position: relative;
}
.link span{
    position: absolute;
    bottom: -50px;
}
</style>