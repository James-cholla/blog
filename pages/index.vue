<template>
    <Art :data="data"></Art>
    <va-pagination v-model="value" :pages="5" @click="fun" />
</template>

<script>
export default {
    data() {
        return {
            data: [],
            value: 1
        }
    },
    methods: {
        fun() {
            let api = useRuntimeConfig().public.apiBase
            fetch(`${api}article/all?limit=2&page=${this.value}`).then(Response => {
                if (Response.ok) {
                    return Response.json()
                }
            }).then(res => {
                this.data = res.data.data
            })
        }
    },
    created() {
        let api = useRuntimeConfig().public.apiBase
        fetch(`${api}article/all?limit=2&page=${this.value}`).then(Response => {
            if (Response.ok) {
                return Response.json()
            }
        }).then(res => {
            this.data = res.data.data
        })
    }
}
</script>

<style></style>