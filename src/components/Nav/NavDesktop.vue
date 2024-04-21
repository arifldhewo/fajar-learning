<template>
  <nav class="hidden lg:flex ml-5 mr-5">
    <div class="w-6/12">
      <router-link to="/">
        <LogoFajarLearning></LogoFajarLearning>
      </router-link>
    </div>
    <div class="w-6/12 flex justify-evenly items-center">
      <NavLink link-to-page="/" display-link="Home"></NavLink>
      <NavLink link-to-page="/about" display-link="About"></NavLink>
      <NavLink link-to-page="/course" display-link="Course"></NavLink>
      <a href="https://wa.me/0895328899115">
        <ButtonPrimary
          class="text-2xl font-bold text-white hover:text-black"
          text="Contact Us"
        ></ButtonPrimary>
      </a>
    </div>
  </nav>
</template>

<script>
import ButtonPrimary from "../button/ButtonPrimary.vue";
import LogoFajarLearning from "../Logo/LogoFajarLearning.vue";
import NavLink from "./NavLink.vue";

export default {
  name: "NavDesktop",
  components: {
    LogoFajarLearning,
    NavLink,
    ButtonPrimary,
  },
};
</script>
