<template>
  <ul class="list-unstyled">
    <li>{{ tag.id }} - {{ tag.name }}</li>
  </ul>
</template>

<script>
export default {
    props: ["tag"],
}
</script>

<style>

</style>