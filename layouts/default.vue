<script lang="ts">

</script>

<template>
  <main class="main w-9/12 mx-auto flex">
    <aside class="aside w-20"><Aside></Aside></aside>

    <div>
      <header></header>
      <slot />
    </div>
  </main>
  <footer class="footer text-center mt-6">foot</footer>
</template>