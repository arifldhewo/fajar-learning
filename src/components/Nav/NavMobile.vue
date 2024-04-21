<template>
  <nav class="fixed lg:hidden w-full bg-slate-button z-10">
    <div class="ml-5 mr-5 flex justify-between items-center">
      <router-link to="/">
        <LogoFajarLearning> </LogoFajarLearning>
      </router-link>
      <div>
        <button @click="openMobileNav()">
          <img
            class="w-16"
            src="https://cdn-icons-png.flaticon.com/512/9663/9663120.png"
            alt="burger-menu"
          />
        </button>
      </div>
    </div>

    <div
      v-if="isHiddenNav"
      class="bg-gradient-to-tr from-red-300 via-purple-300 to-blue-300 w-full fixed top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-baseline"
    >
      <div class="m-5">
        <div class="m-5 absolute right-0">
          <ButtonClose @close="closeMobileNav()"></ButtonClose>
        </div>
        <div class="m-5">
          <NavLink
            class="text-2xl font-semibold"
            link-to-page="/"
            display-link="Home"
          ></NavLink>
        </div>
        <div class="m-5">
          <NavLink
            class="text-2xl font-semibold"
            link-to-page="/about"
            display-link="About"
          ></NavLink>
        </div>
        <div class="m-5">
          <NavLink
            class="text-2xl font-semibold"
            link-to-page="/course"
            display-link="Course"
          ></NavLink>
        </div>
        <div class="m-5">
          <a class="text-2xl font-semibold" href="https://wa.me/0895328899115">
            Contact Us</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ButtonClose from "../Button/ButtonClose.vue";
import LogoFajarLearning from "../Logo/LogoFajarLearning.vue";
import NavLink from "./NavLink.vue";

export default {
  name: "NavMobile",
  components: {
    ButtonClose,
    LogoFajarLearning,
    NavLink,
  },
  data() {
    return {
      isHiddenNav: false,
    };
  },
  methods: {
    openMobileNav() {
      this.isHiddenNav = true;
    },
    closeMobileNav() {
      this.isHiddenNav = false;
    },
  },
};
</script>
