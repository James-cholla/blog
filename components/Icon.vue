<template>
    <i :class="`bi bi-${icon}`" :style="`--hover-Color:${hoverColor}; font-size:${size}rem; color:${color}; `"></i>

</template>

<script>
export default {
    props: ['icon', 'size', 'color','hoverColor'],
    data() {
        return {

        }
    },
    

}
</script>

<style scoped>

i:hover{
    color: var(--hover-Color) !important
}
</style>