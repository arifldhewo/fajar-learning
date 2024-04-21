<template>
  <router-link class="text-2xl font-semibold" :to="linkToPage">{{
    displayLink
  }}</router-link>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    linkToPage: String,
    displayLink: String,
  },
};
</script>
