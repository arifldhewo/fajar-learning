<template>
  <div
    class="bg-gradient-to-tr from-red-300 via-purple-300 to-blue-300 w-full fixed top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-baseline"
  >
    <div class="m-5">
      <div class="m-5 absolute right-0">
        <ButtonClose @close-burger="closeBurgerMenu"></ButtonClose>
      </div>
      <div class="m-5">
        <button @click="closeBurgerMenu">
          <router-link class="text-2xl font-semibold" to="/">Home</router-link>
        </button>
      </div>
      <div class="m-5">
        <router-link class="text-2xl font-semibold" to="/about"
          >About</router-link
        >
      </div>
      <div class="m-5">
        <button @click="closeBurgerMenu">
          <a class="text-2xl font-semibold" href="#course">Course</a>
        </button>
      </div>
      <div class="m-5">
        <a class="text-2xl font-semibold" href="https://wa.me/0895328899115">
          Contact Us</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import ButtonClose from "../button/ButtonClose.vue";

export default {
  name: "NavMobile",
  components: {
    ButtonClose,
  },
  methods: {
    closeBurgerMenu() {
      this.$emit("close-burger");
    },
  },
};
</script>
