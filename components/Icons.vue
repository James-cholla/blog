<template>
    <i :class="`bi bi-${icon}`" :style="`--hover-color: ${hoverColor}; font-size: ${size}px; color: ${color}`"></i>
</template>

<script>
export default{
    props:['icon', 'size', 'color', 'hoverColor'],
    data(){
        return {
            size: this.size == undefined ? 16 : this.size,
            color: this.color == undefined ? "#ccc" : this.color,
            hoverColor: this.hoverColor == undefined ? '#ccc' : this.hoverColor
        }
    }
}
</script>

<style scoped>
i:hover{
    color: var(--hover-color) !important
}
</style>