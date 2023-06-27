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
                {
                    icon: 'card-image',
                    color: '#363636',
                    hoverColor: '#fff',
                    title: '相册夹',
                    link: '/'
                },
                {
                    icon: 'collection-play-fill',
                    color: '#363636',
                    hoverColor: '#fff',
                    title: '视频库',
                    link: '/'
                },
                {
                    icon: 'chat-square-quote-fill',
                    color: '#363636',
                    hoverColor: '#fff',
                    title: '一言堂',
                    link: '/'
                }
            ]
        }
    },
    methods:{

    }
}

</script>

<style scoped>
nav{
    margin-top: 18px;
    display: flex;
    flex-direction: column;
}
.link{
    margin-top: 10px;
    margin-left: 6px;
    position: relative;
    line-height: 40px;
    text-align: center;
    display: inline-block;
}

.link i{
    width: 38px;
    height: 38px;
    display: block;
    border-radius: 6px;
}
.link:hover i{
    background: rgb(233, 57, 57);
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2457);
}
.link span{
    position: absolute;
    right: -60px;
    top: 5px;
    display: block;
    
    background: rgb(233, 57, 57);
    display: inline-block;
    font-size: 14px;
    padding: 0 8px; 
    line-height: 28px;
    color: #fff;
    border-radius: 4px;
    display: none;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2457);
}

.link:hover span{
    display: block;
}
</style>