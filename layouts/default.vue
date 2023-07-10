<template>
    <VGrid :gap="8" :columns="24">
        <VCell :width="12">
            <div class="content">
                <slot />
            </div>
        </VCell>
    </VGrid>
</template>

<script>
export default {
    data() {
        return {
            logoUrl: ''
        }
    },

    mounted() {
        const that = this
        let url = 'https://api.blog.bromel.info/api/options/one?key=site'
        fetch(url).then(Response => {
            if (Response.ok) {
                return Response.json()
            }
        }).then(res => {
            that.logoUrl = res.data.opt.image
        })
    }
}
</script>

<style scoped></style>