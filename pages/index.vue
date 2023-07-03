<template>
    <div>
        {{ data }}

        <div>
            <NuxtLink :to='`?page=${index+1}`' v-for="(item,index) in pages" :key="index">{{ index+1 }}</NuxtLink>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            api: '',
            limit: 1,
            page: 1,

            pages: 0,
            data: [],
        }
    },
    created() {
        const route = useRoute()
        // let page = $route.query
        // console.log($route.params.id);
        this.api = useRuntimeConfig().public.apiBase
        let that = this

        console.log(route.params);

        fetch(`${this.api}article/all?limit=${this.limit}&page=${this.page}`).then(Response => {
            if (Response.ok) {
                return Response.json()
            }
        }).then(res => {
            that.pages = res.data.page
            that.data = res.data.data
        })
    }
}
</script>

<style scoped>
.infinite-list-wrapper {
    height: 300px;
    text-align: center;
}

.infinite-list-wrapper .list {
    padding: 0;
    margin: 0;
    list-style: none;
}

.infinite-list-wrapper .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-danger-light-9);
    color: var(--el-color-danger);
}

.infinite-list-wrapper .list-item+.list-item {
    margin-top: 10px;
}
</style>