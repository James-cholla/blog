<template>
  <figure>
      <img :src="head_img" :alt="nickname" />
  </figure>
</template>

<style>
figure{
  margin-top: 40px;
  padding: 2px;
  width: 50px;
  height: 50px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #fff;
  box-shadow: 0 1px 6px rgba(0,0,0,0.234);
  overflow: hidden;
}

img {
  width: 100%;
  height: auto;
}
</style>

<script>
export default{
  data(){
    return{
      api: this.$config.ConfigApi,
      head_img: '',
      nickname: ''
    }
  },
  created(){
    fetch(`${this.api}users/one?id=1`).then(Response=>{
      if(Response.ok){
        return Response.json()
      }
    }).then(res=>{
      this.head_img = res.data.head_img
      this.nickname = res.data.nickname

    }).catch(err=>{
      console.log(err);
    })
  }
}
</script>
