<template>
  <div class="lg:w-1/2 w-full h-screen">
    <img
      class="hidden lg:inline lg:w-52"
      src="@/assets/imgs/logo.png"
      alt="Logo"
    />

    <div class="scale-75 flex items-end flex-wrap lg:-mt-20 xl:-mt-14 -ml-5">
      <p class="text-8xl mt-32 lg:mt-24">
        A Good <span class="text-cyan-400">Education</span> Is a Foundation for
        Better Future
      </p>
      <p class="text-3xl font-semibold text-slate-600 mt-10">
        A Comunity with high expectation and high academic achievement
      </p>
      <router-link to="/course">
        <ButtonPrimary
          class="text-2xl mt-14 font-bold text-slate-800 scale-100"
          :text="'Get Started'"
        >
        </ButtonPrimary>
      </router-link>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "../Button/ButtonPrimary.vue";

export default {
  name: "LeftHero",
  components: {
    ButtonPrimary,
  },
};
</script>
