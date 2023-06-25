<template>
    <div>
        <h1><a href=""><img src="" alt=""></a></h1>
        <nav class="flex flex-col text-center">
            <a href=""><i data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="Tooltip on left" class="bi bi-person-circle"></i></a>
            <a href=""><i class="bi bi-play-btn-fill"></i></a>
            <a href=""><i class="bi bi-image-fill"></i></a>
            <a href=""><i class="bi bi-journal-x"></i></a>
            <a href=""><i class="bi bi-github"></i></a>
        </nav>
    </div>
</template>

<script>
let i = document.querySelectorAll('i')

for (let index = 0; index < i.length; index++) {
    new bootstrap.Tooltip(i[index])
}
</script>

<style scoped>
nav a{
    margin-top: 1rem;
    color: #5a5a5a
}
</style>