<template>
  <div class="lg:w-1/2 w-full h-screen">
    <img
      v-if="isLaptop"
      class="lg:w-52"
      src="@/assets/imgs/logo.png"
      alt="Logo"
    />
    <nav class="fixed w-full bg-slate-button z-10">
      <div v-if="isMobile" class="ml-5 mr-5 flex justify-between items-center">
        <img class="w-32" src="@/assets/imgs/logo.png" alt="Logo" />

        <div>
          <button @click="openBurgerMenu">
            <img
              class="w-16"
              src="https://cdn-icons-png.flaticon.com/512/9663/9663120.png"
              alt="burger-menu"
            />
          </button>
        </div>
        <div v-if="openBurger">
          <NavMobile @close-burger="closeBurgerMenu"></NavMobile>
        </div>
      </div>
    </nav>

    <div class="scale-75 flex items-end flex-wrap -ml-5">
      <p class="text-8xl mt-32 lg:mt-24">
        A Good <span class="text-cyan-400">Education</span> Is a Foundation for
        Better Future
      </p>
      <p class="text-3xl font-semibold text-slate-600 mt-10">
        A Comunity with high expectation and high academic achievement
      </p>
      <a href="#course">
        <ButtonPrimary
          class="text-2xl mt-14 font-bold scale-100"
          :text="'Get Started'"
        >
        </ButtonPrimary>
      </a>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "../button/ButtonPrimary.vue";
import { useWindowSize } from "@vueuse/core";
import NavMobile from "./NavMobile.vue";

export default {
  name: "LeftHero",
  components: {
    ButtonPrimary,
    NavMobile,
  },
  data() {
    return {
      openBurger: false,
      currentWindowSize: useWindowSize(),
    };
  },
  methods: {
    openBurgerMenu() {
      this.openBurger = true;
    },
    closeBurgerMenu() {
      this.openBurger = false;
    },
  },
  computed: {
    isMobile() {
      return this.currentWindowSize.width < 1024;
    },
    isLaptop() {
      return this.currentWindowSize.width >= 1024;
    },
  },
};
</script>
