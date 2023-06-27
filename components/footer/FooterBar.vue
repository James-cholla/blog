<template>
    <div>
        <p><a href="" target="_blank">{{ copy }}</a> <a :href="siteMap.url">{{ siteMap.text }}</a></p>
    </div>
</template>

<script>
export default{
    data(){
        return {
            api: this.$config.ConfigApi,
            copy:'',
            siteMap:{
                url: '/sitemap.xml',
                text: '网站地图'
            }
        }
    },
    created(){
        fetch(`${this.api}options/all`).then(Response=>{
            if(Response.ok){
                return Response.json()
            }
        }).then(res=>{
            this.copy = res.data.site.opt.copy            
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style scoped>
p{ 
    font-size: 14px;
}
p > a{
    color: #f3f3f3;
    position: relative;
    text-decoration: none;
    transition: .3s ease-in-out;
    margin-right: 6px;
}

p > a::after{
    content: '';

    width: 1px;
    height: 1vh;
    background: #f5f5f5;
    
    display: block;
    position: absolute;
    right: -5px;
    bottom: 4px;
}

p > a:last-child::after{
    display: none;
}

p > a::before{
    content: ' ';
    display: block;
    width: 100%;
    border-bottom: 1px dashed #ffffff;
    position: absolute;
    left: 0;
    bottom: -2px;
    opacity: 0;
    transition: .3s ease-in-out;
}
p > a:hover{
    color: inherit
}
p > a:hover::before{
    opacity: 1;
}
</style>