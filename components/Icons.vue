<template>
    <i :class="`bi bi-${name}`" :style="`--icon-size:${size}; --icon-color:${color}; --hover-color: ${hoverColor}`"></i>
</template>

<script>
export default{
    props:{
        name: {
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
.bi{
    color: var(--icon-color);
    font-size: var(--icon-size);
    transition: .3s ease-in-out;
}

.bi:hover{
    color: var(--hover-color);
}
</style>