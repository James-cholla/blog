<template>
    <i v-if="icon" :class="`bi bi-${icon}`" :style="`--hover-color: ${hoverColor}; font-size: ${size}px; color: ${color}`"></i>
</template>

<script>
export default{
    props:{
        icon: {
            type: String,
            default: ''
        },
        size: {
            type: Number,
            default: 14
        },
        color: {
            type: String,
            default: '#ccc'
        },
        hoverColor: {
            type: String,
            default: '#ccc'
        }
    }
}
</script>

<style scoped>
i:hover{
    color: var(--hover-color) !important
}
</style>