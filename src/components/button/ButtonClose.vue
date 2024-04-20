<template>
  <button @click="closeBurgerMenu">
    <img
      class="w-5"
      src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png"
      alt="close-icon"
    />
  </button>
</template>

<script>
export default {
  name: "ButtonClose",
  methods: {
    closeBurgerMenu() {
      this.$emit("close-burger");
    },
  },
};
</script>
